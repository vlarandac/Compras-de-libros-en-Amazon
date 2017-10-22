// configuración de variables
var width = 750,
    height = 600;

//  variable de color para los nodos
var color = d3.scale.category10();

// variable para definir la fuerza
var force = d3.layout.force()
    .charge(-120)
    .linkDistance(100)
    .size([width, height]);

//definición del SVG para los nodos
var svgnode = d3.select("#nodos").append("svg")
    .attr("width", width)
    .attr("height", height);

// carga del archivo
d3.json("data.json", function(error, graph) {
  if (error) throw error;

// definición de las variables para caracterizar la fuerza
  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

  var link = svgnode.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      ;
// definición y pintado de los nodos 
  var node = svgnode.selectAll(".node")
      .data(graph.nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 6)
      .style("fill", function(d) { return color(d.group); })
      .call(force.drag);

// leyenda al elegir un nodo
  node.append("title")
      .text(function(d) { return d.name + " (" + d.group + ")"; });

// uso de la fuerza
  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  });
});
