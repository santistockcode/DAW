//fuente: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

//fuente: https://stackoverflow.com/questions/24050456/onclick-assigned-function-with-parameters

//fuente: https://stackoverflow.com/questions/45027943/how-to-make-a-button-dynamically-in-javascript

//

/**
 * Explicación: 
 * al crear el elemento le puedo poner element.onclick = funcion. 
 * Que simplemente lanzaría esa función
 * Si le pongo en su lugar una función anónima que llamma a otra función pasándole
 * donde estoy eso ya se queda ahí en el momento de crear la tabla
 * y así puuedo acceder al elemento que es y cambiarle el inner html en este caso mediante
 * la función clikie.
 */
function myFunction() {
    codX=1;
    codY=1;
    const paragraphs = document.getElementsByTagName("tr")[codX];
    //console.log(...paragraphs);
    var casilla = paragraphs.getElementsByTagName("button")[codY];
    console.log(casilla);
    casilla.innerHTML = "lol";
    //alert('Hello');
}
let tamanyo = 10;
createTable(tamanyo);
//createTableWithButton();
//createButtonInteractivo();

function createTable(tamanyo){
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    
    tbl.style.marginLeft="auto";
    tbl.style.marginRight="auto";

    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < tamanyo; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < tamanyo; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`${i}, ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    //document.body.appendChild(tbl);

    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}

function createTableWithButton(){
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("button");
        cell.onclick = lorelei;
        const cellText = document.createTextNode(`${i}, ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}

function lorelei(){
    alert("blabla");
}
function crear_pintar_tabla_con_botones_y_funciones(){
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("button");
        cell.onclick = function() {
            click_en_boton(i, j);
        };
        const cellText = document.createTextNode(`${i}, ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}

function click_en_boton(codX, codY){
    console.log(codX);
    console.log(codY);
    const paragraphs = document.getElementsByTagName("tr")[codX];
    //console.log(...paragraphs);
    var casilla = paragraphs.getElementsByTagName("button")[codY];
    console.log(casilla);
    casilla.innerHTML = "lol";
}

//Fuente: https://www.w3schools.com/howto/howto_js_countdown.asp

// Set the date we're counting down to
var countDownDate = new Date();

countDownDate.setMinutes(countDownDate.getMinutes()+3);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = 
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    alert("lorelei");
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
