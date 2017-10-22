
# Compra conjunta de libros de política de Estados Unidos por usuarios de Amazon.com

## Descripción del Dataset<br><br>
- El data set fue obtenido del Network data repository de la Universidad de California y coresponde a una red de libros sobre política estadounidense publicada alrededor de las elecciones presidenciales de 2004 y vendida en línea por Amazon.com. Los links entre libros representan la frecuente compra de libros por parte de los mismos compradores. La red fue compilada por V. Krebs.<br>
- Está conformado por 104 nodos y 441 enlaces.<br>
- Los nodos reciben valores **"l"**, **"n"** o **"c"** para indicar si son **"liberales"**, **"neutrales"** o **"conservadores"** de acuerdo con lo consignado por Mark Newman basado en una lectura de las descripciones y revisiones de los libros publicados en Amazon.	<br><br>

## Lo que se busca con la visualziación <br><br>
○ H1 - Identificar los libros que frecuentemente son comprados juntos, visualizando los clustes de acuerdo con el grupo al cual pertenece cada libro<br/><br/>

## Hallazgos

Los insights logrados a partir de las visualizaciones son:<br/><br/>
○ Existe una clara caracterización de los tres tipos de libros que eligen los compradores, Lberales, neutrales y conservadores<br/> 
○ Quienes eligen libros neutrales en terminos generales siempre eligen de este tipo de libros sin tener preferencia por otro tipo.   <br/>
○ Quienes eligen libros conservadores, eventualmente pueden elegir libros neutrales<br/>
○ Existen menos compras registradas para libros neutrales, lo cual indica que la gente tiene bien marcada su tendencia<br/>

<!DOCTYPE html>
<html>
	<head>
	  	<meta charset="utf-8">
		<title>Tendencia en compra de libros</title>
	</head>
	<body>
		<div><iframe src="books_adjacence.html" frameborder="0" width="1500" height="1500" scrolling="yes"></iframe></div>
	
<p align="center" style="font-size: 13px; text-align: center;">
	      Vivian Lucia Aranda Camacho<br>
	      C&oacutedigo: 201022509<br>
	      Universidad de los Andes<br>
	      Maestr&iacutea en Ingenier&iacutea de Informaci&oacuten<br>
	      Visual Analytics
	    </p>
	   </body>
</html>


