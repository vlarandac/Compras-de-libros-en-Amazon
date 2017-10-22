
#Tendencia en compra conjunta de libros de política de US por usuarios de Amazon.com
<br/><br/>
### Descripción del Dataset 
El data set fue obtenido del [Network data repository](http://networkdata.ics.uci.edu/data.php?d=polbooks) de la Universidad de California y coresponde a una red de libros sobre política estadounidense publicada alrededor de las elecciones presidenciales de 2004 y vendida en línea por Amazon.com. Los links entre libros representan la frecuente compra de libros por parte de los mismos compradores. La red fue compilada por V. Krebs.
	
<html class="ocks-org do-not-copy">
<head>

	<link type="text/css" href="style.css" rel="stylesheet" />	
	<link type="text/css" href="example.css" rel="stylesheet" />
  
	<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
	<script src="http://d3js.org/colorbrewer.v1.min.js"></script>

  
</head>
<body>
    <div>
      <h2>POL BOOKS</h2>
      
      <h3 >Diagrama de Fuerzas (nodos y enlaces) </h3>
    <div width="100%" id="nodos"> </div>
 	
	 
	 <h3 >Matriz de Adyacencia</h3> 


	        <aside style="font-style:italic;
				float:right;width:450px;
				 margin: 1px 15px 10px 90px;"
				>
	         <!-- Filtro para la matriz--> 
	         	<p>Orden: <select id="order">
				  <option value="group">Grupo</option>
				  <option value="count">Nro. de Enlaces</option>
					</select>
				<p >Dataset Pol Books: 104 nodos , 441 enlaces</p>
			</aside>
          	<section id="matriz" style="float:left;width:750px">
		    </section>

	  <script type="text/javascript" src="nodos.js"></script>
	   <script type="text/javascript" src="matriz.js"></script>
	   
   <div>
</body>
</html>

<br/><br/>
Vivian Lucia Aranda<br/>
201022509<br/>
Maestría en Ingeniería de Información <br/>
ISIS4822 – Visual Analytics - 20172 <br/>		
Universidad de los Andes, Bogotá, Colombia

