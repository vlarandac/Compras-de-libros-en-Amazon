## Descripción del Dataset<br><br>
- El data set fue obtenido del Network data repository de la Universidad de California y coresponde a una red de libros sobre política estadounidense publicada alrededor de las elecciones presidenciales de 2004 y vendida en línea por Amazon.com. Los links entre libros representan la frecuente compra de libros por parte de los mismos compradores. La red fue compilada por V. Krebs.<br>
- Está conformado por 104 nodos y 441 enlaces.<br>
- Los nodos reciben valores **"l"**, **"n"** o **"c"** para indicar si son **"liberales"**, **"neutrales"** o **"conservadores"** de acuerdo con lo consignado por Mark Newman basado en una lectura de las descripciones y revisiones de los libros publicados en Amazon.	<br><br>

## Lo que se busca con la visualización <br><br>
○ H1 - Identificar los libros que frecuentemente son comprados juntos, visualizando los clustes de acuerdo con el grupo al cual pertenece cada libro<br/><br/>

## Hallazgos

Los insights logrados a partir de las visualizaciones son:<br/><br/>
○ Existe una clara caracterización de los tres tipos de libros que eligen los compradores, Lberales, neutrales y conservadores, y la relación de compra entre los lobros de cada grupo es muy marcada. <br/> 
○ Existe una mayor relación en comprar libros neutrales junto con libros conservadores que entre libros neutrales y liberales.<br/>
○ El libro "Plan of Atack" de Bood Woodward, que está caracterizado como un libro neutral, se ha comprado junto con una gran cantidad de libros liberales, lo cual podría indicar que está mal categorizado en cuanto al grupo al cual fue asociado. <br/>
○ Existen menos compras registradas para libros neutrales, lo cual indica que la gente tiene bien marcada su tendencia, bien sea liberal o conservadora<br/>

## Visualización

<html>
	<head>
	  	<meta charset="utf-8">
		<title>Tendencia en compra de libros de política de EEUU en Amazon.com</title>
	</head>
	<body>
		<div><iframe src="books_adjacence.html" frameborder="0" width="1200" height="1200" scrolling="yes"></iframe></div>



<p align="center" style="font-size: 13px; text-align: center;">
	      Vivian Lucia Aranda Camacho<br>
	      Código: 201022509<br>
	      Universidad de los Andes<br>
	      Maestría en Ingeniería de Información<br>
	      Visual Analytics
	    </p>
	   </body>
</html>


Adaptación de la publicación hecha por [Hung Do](http://bl.ocks.org/hungvietdo/7f8df0bcd7fba7e531e6/e49fcf4958640a2788e89892e54dff253b1d443b) 
