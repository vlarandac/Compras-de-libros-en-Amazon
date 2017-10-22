// definición de margenes
var margin = {top: 150, right: 0, bottom: 10, left: 150},
    width = 900,
    height = 900;

// definición de variables para controlar dominio, rango y color
var x = d3.scale.ordinal().rangeBands([0, width]),
    z = d3.scale.linear().domain([0, 4]).clamp(true),
    c = d3.scale.category10().domain(d3.range(10));

// Definición del SVG para la matriz
var svg = d3.select("#matriz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("margin-left", -margin.left + "px")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Carga del archivo json con los datos de los libros
d3.json("data.json", function(books) {
  var matrix = [],
      nodes = books.nodes,
      links = books.links,
      n = nodes.length,
      sampleCategoricalData =[];

  // Definir índice por cada nodo.
  nodes.forEach(function(node, i) {
    node.index = i;
    node.count = 0;
    matrix[i] = d3.range(n).map(function(j) { return {x: j, y: i, z: 0}; });
  });

  // Conversión de los links a matriz con conteo de las ocurrencias de interacción de cada libro
  links.forEach(function(link) {
    matrix[link.source][link.target].z += 4;
    matrix[link.target][link.source].z += 4;
    nodes[link.source].count++;
    nodes[link.target].count++;
  });

;

  // Configuración de Orden para los filtros
  var orders = {
   count: d3.range(n).sort(function(a, b) { return nodes[b].count - nodes[a].count; }), // ordenar por la cantidad de nodos origen
   group: d3.range(n).sort(function(a, b) { return nodes[a].group - nodes[b].group; }) // ordenar por el grupo asociado al libro
  };

  // Por defecto sale en orden del grupo del libro.
  x.domain(orders.group);

  svg.append("rect")
      .attr("class", "background")
      .attr("width", width)
      .attr("height", height);

// información de filas
  var row = svg.selectAll(".row")
      .data(matrix)
    .enter().append("g")
      .attr("class", "row")
      .attr("transform", function(d, i) { return "translate(0," + x(i) + ")"; })
      .each(row);

  row.append("line")
      .attr("x2", width);

  row.append("text")
      .attr("x", -6)
      .attr("y", x.rangeBand() / 2)
      .attr("dy", ".32em")
      .attr("text-anchor", "end")
      .text(function(d, i) { return nodes[i].name; });

// información de columnas
  var column = svg.selectAll(".column")
      .data(matrix)
    .enter().append("g")
      .attr("class", "column")
      .attr("transform", function(d, i) { return "translate(" + x(i) + ")rotate(-90)"; });

  column.append("line")
      .attr("x1", -width);

  column.append("text")
      .attr("x", 6)
      .attr("y", x.rangeBand() / 2)
      .attr("dy", ".32em")
      .attr("text-anchor", "start")
      .text(function(d, i) { return nodes[i].name; });

// lenado de los valores en la matriz
  function row(row) {
    var cell = d3.select(this).selectAll(".cell")
        .data(row.filter(function(d) { return d.z; }))
      .enter().append("rect")
        .attr("class", "cell")
        .attr("x", function(d) { return x(d.x); })
        .attr("width", x.rangeBand())
        .attr("height", x.rangeBand())
        .style("fill-opacity", function(d) { return z(d.z); })
        .style("fill", function(d) { return nodes[d.x].group == nodes[d.y].group ? c(nodes[d.x].group) : c(0); })
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);
  }

  
  function mouseover(p) {
    d3.selectAll(".row text").classed("active", function(d, i) { return i == p.y; });
    d3.selectAll(".column text").classed("active", function(d, i) { return i == p.x; });
     
  }

  function mouseout() {
    d3.selectAll("text").classed("active", false);
     d3.selectAll("rect").attr("width",x.rangeBand());
     d3.selectAll("rect").attr("height",x.rangeBand());
  }

// elección de orden 
  d3.select("#order").on("change", function() {
      order(this.value);
  });

  function order(value) {
    x.domain(orders[value]);

    var t = svg.transition().duration(2500);

    t.selectAll(".row")
        .delay(function(d, i) { return x(i) * 4; })
        .attr("transform", function(d, i) { return "translate(0," + x(i) + ")"; })
      .selectAll(".cell")
        .delay(function(d) { return x(d.x) * 4; })
        .attr("x", function(d) { return x(d.x); });

    t.selectAll(".column")
        .delay(function(d, i) { return x(i) * 4; })
        .attr("transform", function(d, i) { return "translate(" + x(i) + ")rotate(-90)"; });
  }
});
