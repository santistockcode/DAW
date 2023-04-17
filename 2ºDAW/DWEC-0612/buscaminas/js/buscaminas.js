//Almacena el tamanyo del tablero
let tamanyo_elegido = 10;
//Pintar tablero con ?
crear_pintar_tabla_con_botones_y_funciones(tamanyo_elegido);
//Crea el tablero y lo llena de 0
let tablero = crearTablero(tamanyo_elegido);
//TODO mejorar que no coincida mina y tesoro
//Se obtienen posiciones random de mina y tesoro evitando que coicidan
let codmX = (codmY = codtX = codtY = 0);
while (codmX == codtX && codmY == codtY) {
  codmX = Math.floor(Math.random() * tamanyo_elegido);
  codmY = Math.floor(Math.random() * tamanyo_elegido);
  codtX = Math.floor(Math.random() * tamanyo_elegido);
  codtY = Math.floor(Math.random() * tamanyo_elegido);
}
//Se colocan ambos en el tablero
ponerMina(tablero, codmX, codmY);
ponerTesoro(tablero, codtX, codtY);
//en este punto hay un tablero completo (con 0, T, * y pistas de proximidad), aunque no se muestre

//pintar cuenta atrás
pintar_cuenta_atras();

//FUNCIONES

/**
 * Función que se llama al cargar el script que pinta una tabla con botones en html
 * Los comentarios en inglés son de la fuente original, ver bibliografía
 * @param {*} tamanyo 
 */
function crear_pintar_tabla_con_botones_y_funciones(tamanyo) {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  //la tabla estará centrada
  tbl.style.marginLeft = "auto";
  tbl.style.marginRight = "auto";
  const tblBody = document.createElement("tbody");
  // creating all cells
  for (let i = 0; i < tamanyo; i++) {
    // creates a table row
    const row = document.createElement("tr");
    for (let j = 0; j < tamanyo; j++) {
      // Crea el botón en cada casilla
      const cell = document.createElement("button");
      cell.style.height="40px";
      cell.style.width="40px";
      //Mete la función anónima de cada casilla que llamará a click_en_boton pasándole donde está la casilla
      cell.onclick = function () {
        click_en_boton(i, j);
      };
      const cellText = document.createTextNode("?");
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

/**
 * Fuunción que maneja el texto de una casilla que se ha pulsado comparandolo con el tablero con la solución
 * @param {number} codX 
 * @param {number} codY 
 */
function click_en_boton(codX, codY) {
  console.log(codX);
  console.log(codY);
  const paragraphs = document.getElementsByTagName("tr")[codX];
  console.log(paragraphs);
  const casilla = paragraphs.getElementsByTagName("button")[codY];
  console.log(casilla);
  casilla.innerHTML = tablero[codX][codY];
  casuistica(tablero[codX][codY]);
}

/**
 * Función que actualiza cada segundo una cuenta atrás desde la fecha actual + 3 minutos
 * Comentarios de la fuente original, ver bibliografía al final de este archivo
 */
function pintar_cuenta_atras() {
  var countDownDate = new Date();

  countDownDate.setMinutes(countDownDate.getMinutes() + 3);

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("contador").innerHTML =
      +minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      voltear_tablero();
      document.getElementById("contador").innerHTML = "Se acabó el tiempo";
    }
  }, 1000);
}

/**
 * Función que crea un tablero matriz del tamaño tamanyo y lo llena de ceros.
 * @param {number} tamanyo
 * @returns {Array.<number>} tablero de juego
 */
function crearTablero(tamanyo) {
  let celdas = [];
  for (let i = 0; i < tamanyo; i++) {
    celdas[i] = new Array(tamanyo);
    celdas[i].fill(0);
  }
  return celdas;
}

/**
 * Función que coloca una mina y suma 1 unidad a las casillas colindantes
 * @param {Array.<number>} tablero
 * @param {number} x coordenada x de la mina
 * @param {number} y coordenada y de la mina
 */
function ponerMina(tablero, x, y) {
  tablero[x][y] = "*";
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (
        i >= 0 &&
        i < tablero.length &&
        j >= 0 &&
        j < tablero[i].length &&
        tablero[i][j] != "*"
      ) {
        tablero[i][j]++;
      }
    }
  }
}

/**
 * Función que coloca el tesoro en el tablero
 * @param {Array.<number>} tablero
 * @param {number} x
 * @param {number} y
 */
function ponerTesoro(tablero, x, y) {
  tablero[x][y] = "T";
}

/**
 * Función que maneja el resultado del tablero
 * @param {string} inner 
 */
function casuistica(inner) {
  if (inner == "*") {
    alert("Fin de juego -> mina");
    voltear_tablero();
  } else if (inner == "T") {
    alert("Fin de juego -> encontraste el tesoro");
    voltear_tablero();
  } else if (inner == 0) {
    console.log("!Agua!");
  } else {
    console.log("Tienes " + inner + " minas alrededor");
  }
}

/**
 * Función que resuelte todas las casillas 
 */
function voltear_tablero()
{ for (let i = 0; i < tablero.length; i++) {
      for (let j = 0; j < tablero[i].length; j++) {
        const paragraphs = document.getElementsByTagName("tr")[i];
        console.log(paragraphs);
        const casilla = paragraphs.getElementsByTagName("button")[j];
        console.log(casilla);
        casilla.innerHTML = tablero[i][j];
        casilla.disabled=true;
        document.getElementById("contador").style.visibility="hidden";
      }
    }
}

/* BIBLIOGRAFÍA */

//Fuente cuenta atrás :https://www.w3schools.com/howto/howto_js_countdown.asp

//Fuente crear tabla: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

//Fuente manejar click en botón y pasar parámetros: https://stackoverflow.com/questions/24050456/onclick-assigned-function-with-parameters

//Fuente crear botón en tabla: https://stackoverflow.com/questions/45027943/how-to-make-a-button-dynamically-in-javascript