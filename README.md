# VisualAnalytics-Compras de libros de Política de Estados Unidos

Este proyecto es un análisis de los datos de una red de libros sobre política estadounidense publicada alrededor de las elecciones presidenciales de 2004 y vendida en línea por Amazon.com. Los links entre libros representan la frecuente compra de libros por parte de los mismos compradores. La red fue compilada por [V. Krebs, unpublished](http://www.orgnet.com/).

Los nodos representan libros sobre la política de los EE. UU. Vendidos por en línea Amazon.com. Los enlaces representan la frecuente compra conjunta de libros por parte de los mismos compradores: "los clientes que compraron este libro también compraron estos otros libros" en Amazon.

Los nodos reciben valores **"l"**, **"n"** o **"c"** para indicar si son **"liberales"**, **"neutrales"** o **"conservadores"** de acuerdo con lo consignado por Mark Newman basado en una lectura de las descripciones y revisiones de los libros publicados en Amazon.

Las tareas que se buscan conseguir por medio de estas visualizaciones son:<br/>
○ H1 - Identificar los libros que frecuentemente son comprados juntos, visualizando los clustes de acuerdo con el grupo al cual pertenece cada libro<br/><br/>

Para lograrlo se ha elegido visualizar por medio de Force Directed Diagram apoyado por una Matriz de Adyacencia que permita ver más clara la correlación en los libros comprados por los mismos clientes.  ![Visualización](https://github.com/vlarandac/Compras-de-libros-en-Amazon/blob/master/Nodos_Matriz.PNG?raw=true) <br/><br/>


Los insights logrados a partir de las visualizaciones son:<br/><br/>
○ Existe una clara caracterización de los tres tipos de libros que eligen los compradores, Lberales, neutrales y conservadores, y la relación de compra entre los lobros de cada grupo es muy marcada. <br/> 
○ Existe una mayor relación en comprar libros neutrales junto con libros conservadores que entre libros neutrales y liberales.<br/>
○ El libro "Plan of Atack" de Bood Woodward, que está caracterizado como un libro neutral, se ha comprado junto con una gran cantidad de libros liberales, lo cual podría indicar que está mal categorizado en cuanto al grupo al cual fue asociado. <br/>
○ Existen menos compras registradas para libros neutrales, lo cual indica que la gente tiene bien marcada su tendencia, bien sea liberal o conservadora<br/>

Usted puede acceder para ver los distintos proyectos de la clase en el siguiente link [Proyectos Visual Analytics 2017](http://johnguerra.co/classes/visual_analytics_fall_2017/students/index.html).
<br/>
Usted puede acceder al [Sitio del proyecto](https://vlarandac.github.io/Compras-de-libros-en-Amazon/).


