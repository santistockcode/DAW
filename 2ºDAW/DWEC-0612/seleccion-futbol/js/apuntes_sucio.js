// 1 Crear array_db

// 2 Pintar info array_db (situación inicial

// 3 Pintar botones funciones con su alert

// 3 Pintar botones vistas






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