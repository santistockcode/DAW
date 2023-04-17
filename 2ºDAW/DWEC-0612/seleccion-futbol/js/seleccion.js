/** ESTRUCTURA DE DATOS  */

/**
 * Array que almacena el total de personas posibles
 */
let array_total_db = new Array();
/**
 * Subdivisiones del array anterior
 */
let array_fut = new Array();
let array_ent = new Array();
let array_mas = new Array();
/**
 * Array solo con las personas convocadas
 */
let array_convocatoria = new Array();

/*
        ---------- Personas: SeleccionFutbol ----------
        */
function SeleccionFutbol(id, nombre, apellidos, edad) {
  //Propiedades
  var _id = id;
  var _nombre = nombre;
  var _apellidos = apellidos;
  var _edad = edad;

  //seters getters
  Object.defineProperty(this, "id", {
    get: function () {
      return _id;
    },
    set: function (value) {
      _id = value;
    },
  });

  Object.defineProperty(this, "nombre", {
    get: function () {
      return _nombre;
    },
    set: function (value) {
      _nombre = value;
    },
  });

  Object.defineProperty(this, "apellidos", {
    get: function () {
      return _apellidos;
    },
    set: function (value) {
      _apellidos = value;
    },
  });

  Object.defineProperty(this, "edad", {
    get: function () {
      return _edad;
    },
    set: function (value) {
      _edad = value;
    },
  });

  //Funciones que son comunes a todas las personas inscritas en la db
  SeleccionFutbol.prototype.concentrarse = function () {
    alert("Persona de id " + this.id + " se concentra");
    this.se_concentra = true;
  };
  SeleccionFutbol.prototype.viajar = function () {
    alert(this.nombre + " viaja!");
    this.viaja = true;
  };
}

/*
        ---------- Futbolista ----------
        */
function Futbolista(id, nombre, apellidos, edad, dorsal, demarcacion) {
  SeleccionFutbol.call(this, id, nombre, apellidos, edad);
  var _dorsal = dorsal;
  var _demarcacion = demarcacion;

  Object.defineProperty(this, "dorsal", {
    get: function () {
      return _dorsal;
    },
    set: function (value) {
      _dorsal = value;
    },
  });

  Object.defineProperty(this, "demarcacion", {
    get: function () {
      return _demarcacion;
    },
    set: function (value) {
      _demarcacion = value;
    },
  });

  //Métodos propios de futbolistas
  Futbolista.prototype.jugarPartido = function () {
    alert("Futbolista de id " + this.id + " juega");
    this.juega = true;
  };
  Futbolista.prototype.entrenar = function () {
    console.log("Futbolista de id " + this.id + " entrena");
  };

  Futbolista.prototype.toString = function futbolistaString() {
    return (
      "ID: " +
      `${this.id}` +
      "; Nombre: " +
      `${this.nombre}` +
      "; Apellidos: " +
      `${this.apellidos}` +
      "; Edad: " +
      `${this.edad}` +
      " Dorsal: " +
      this.dorsal +
      "; Demarcación: " +
      `${this.demarcacion}` 
    );
  };
}

Futbolista.prototype = new SeleccionFutbol(); 
//duda

/*
        ---------- Entrenador ----------
        */
function Entrenador(id, nombre, apellidos, edad, idFederacion) {
  SeleccionFutbol.call(this, id, nombre, apellidos, edad);
  var _idFederacion = idFederacion;

  Object.defineProperty(this, "idFederacion", {
    get: function () {
      return _idFederacion;
    },
    set: function (value) {
      _idFederacion = value;
    },
  });

  //Métodos propios de entreandors
  Entrenador.prototype.dirigirPartido = function () {
    alert(this.nombre + " estará a cargo de X partido!");
    this.dirije = true;
  };
  Entrenador.prototype.dirigirEntrenamiento = function () {
    console.log("Entrenad de id " + this.id + " dirije entrenamiento");
  };

  Entrenador.prototype.toString = function entrenadorString() {
    return (
        "ID: " +
        `${this.id}` +
        "; Nombre: " +
        `${this.nombre}` +
        "; Apellidos: " +
        `${this.apellidos}` +
        "; Edad: " +
        `${this.edad}` +
        " idFederacion: " +
        this.idFederacion 
      );}
}

Entrenador.prototype = new SeleccionFutbol(); 
//Entrenador.prototype.constructor = Entrenador();

/*
        ---------- Masajista ----------
        */
function Masajista(id, nombre, apellidos, edad, titulacion, aniosExperiencia) {
  SeleccionFutbol.call(this, id, nombre, apellidos, edad);
  var _titulacion = titulacion;
  var _aniosexperiencia = aniosExperiencia;

  Object.defineProperty(this, "titulacion", {
    get: function () {
      return _titulacion;
    },
    set: function (value) {
      _titulacion = value;
    },
  });

  Object.defineProperty(this, "aniosExperiencia", {
    get: function () {
      return _aniosexperiencia;
    },
    set: function (value) {
      _aniosexperiencia = value;
    },
  });

  //Método
  Masajista.prototype.darMasaje = function () {
    id_jugadr = prompt("Introduce el id del futbolista a masajear");
    this.daMasaje = true;
    this.masajeaAEsteId = id_jugadr;
  };

  Masajista.prototype.toString = function futbolistaString() {
    return (
        "ID: " +
        `${this.id}` +
        "; Nombre: " +
        `${this.nombre}` +
        "; Apellidos: " +
        `${this.apellidos}` +
        "; Edad: " +
        `${this.edad}` +
        " Titulación: " +
        this.titulacion +
        " Años de experiencia: " +
        this.aniosExperiencia 
      );}
}

Masajista.prototype = new SeleccionFutbol(); 



/* FUNCIONES INTERACCIÓN POR PANTALLA  */

function cargar_db() {
  /**
   * La db estará formada por 30 jugadores, 30 entrenadores y 30 masajistas
   * almacenados en el array total_db
   */
  let id = 0;
  for (let i = 0; i < 30; i++) {
    array_fut.push(
      new Futbolista(
        id,
        "Futbolista_nombre" + id,
        "Futbolista_apellido" + id,
        20,
        Math.floor(Math.random() * 14),
        "Manchego"
      )
    );
    id++;
  }

  for (let i = 0; i < 30; i++) {
    array_ent.push(
      new Entrenador(
        id,
        "Entrena_nombre" + id,
        "Entrena_apelllido" + id,
        30,
        Math.floor(Math.random() * 200)
      )
    );
    id++;
  }

  for (let i = 0; i < 30; i++) {
    array_mas.push(
      new Masajista(
        id,
        "Masajista_nombre" + id,
        "Masajista_apellido" + id,
        50,
        "superTitulacion",
        5
      )
    );
    id++;
  }
  /*
        let string_final = "";
        for (let j = 0; j < 35; j++) {
          string_final += array_seleccionades[j].toString();
        }
        */

  array_total_db[0] = array_fut;
  array_total_db[1] = array_ent;
  array_total_db[2] = array_mas;

  document.getElementById("titulo_vista").innerHTML = "";

  convocatoria();
  construir_tabla();

  //Mostrar las opciones de la aplicacion
  document.getElementById("boton_convocar").style.visibility = "hidden";
  document.getElementById("boton_volver").style.visibility = "visible";
  document.getElementById("boton_11_ganador_azar").style.visibility = "visible";
  document.getElementById(
    "boton_jugadors_que_necesitan_masaje"
  ).style.visibility = "visible";
  document.getElementById("boton_concentrar_azar").style.visibility = "visible";
  document.getElementById("boton_equipo_tecnico").style.visibility = "visible";
  document.getElementById("boton_quien_viaja").style.visibility = "visible";

  /** PRUEBAS */
  /*
        console.log(array_seleccionades[2]);
        array_seleccionades[2].esta_persona_viaja = true;
        console.log(array_seleccionades[2]);

        console.log(array_seleccionades[31].entrena);
        console.log(array_seleccionades[31].esta_persona_viaja);

        array_seleccionades[5].jugarPartido();
        console.log(array_seleccionades[5].juega);

        array_seleccionades[10].concentrarse();
        console.log(array_seleccionades[10].se_concentra);
        */
}

function construir_tabla() {

  /** Pintar tabla de jugador·s */

  let textNode0 = document.createTextNode("Jugador@s:");
  document.body.appendChild(textNode0);
  const tbl0 = document.createElement("table");
  const tblBody0 = document.createElement("tbody");
  // creating all cells
  for (let i = 0; i < 30; i++) {
    // creates a table row
    const row = document.createElement("tr");
    /** Funcionalidad viajar --> Ejemplo de método en SeleccionFubtol  */
    let funcionalidad = "Viajar";
    const cell = document.createElement("button");
    cell.style.height = "40px";
    cell.style.width = "80px";
    //Mete la función anónima de cada casilla que llamará a click_en_boton pasándole donde está la casilla
    cell.onclick = function () {
      click_en_boton(funcionalidad, 0, i);
    };
    const cellText = document.createTextNode(funcionalidad);
    cell.appendChild(cellText);
    row.appendChild(cell);
    const infoPersona = document.createTextNode(array_total_db[0][i]);
    row.appendChild(infoPersona);
    tblBody0.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl0.appendChild(tblBody0);
  // appends <table> into <body>
  document.body.appendChild(tbl0);
  // sets the border attribute of tbl to '2'
  tbl0.setAttribute("border", "2");


  /** Pintar tabla de entrenador·s */
  let textNode1 = document.createTextNode("Entrenador#s:");
  document.body.appendChild(textNode1);
  const tbl1 = document.createElement("table");
  const tblBody1 = document.createElement("tbody");
  // creating all cells
  for (let i = 0; i < 30; i++) {
    // creates a table row
    const row = document.createElement("tr");
    /** Funcionalidad viajar --> Ejemplo de método en SeleccionFubtol  */
    let funcionalidad0 = "Viajar";
    const cell0 = document.createElement("button");
    cell0.style.height = "40px";
    cell0.style.width = "80px";
    //Mete la función anónima de cada casilla que llamará a click_en_boton pasándole donde está la casilla
    cell0.onclick = function () {
      click_en_boton(funcionalidad0, 1, i);
    };
    const cellText0 = document.createTextNode(funcionalidad0);
    cell0.appendChild(cellText0);
    row.appendChild(cell0);
    /** Funcionalidad dirigirPartido --> Ejemplo de método en Entrenador  */
    let funcionalidad = "Dirigir";
    const cell = document.createElement("button");
    cell.style.height = "40px";
    cell.style.width = "80px";
    //Mete la función anónima de cada casilla que llamará a click_en_boton pasándole donde está la casilla
    cell.onclick = function () {
      click_en_boton(funcionalidad, 1, i);
    };
    const cellText = document.createTextNode(funcionalidad);
    cell.appendChild(cellText);
    row.appendChild(cell);
    const infoPersona = document.createTextNode(array_total_db[1][i]);
    row.appendChild(infoPersona);
    tblBody1.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl1.appendChild(tblBody1);
  // appends <table> into <body>
  document.body.appendChild(tbl1);
  // sets the border attribute of tbl to '2'
  tbl1.setAttribute("border", "2");


  /** Pintar tabla de masajistas */

  let textNode2 = document.createTextNode("Masajistas:");
  document.body.appendChild(textNode2);
  const tbl2 = document.createElement("table");
  const tblBody2 = document.createElement("tbody");
  // creating all cells
  for (let i = 0; i < 30; i++) {
    // creates a table row
    const row = document.createElement("tr");
    /** Funcionalidad viajar --> Ejemplo de método en SeleccionFubtol  */
    let funcionalidad0 = "Viajar";
    const cell0 = document.createElement("button");
    cell0.style.height = "40px";
    cell0.style.width = "80px";
    //Mete la función anónima de cada casilla que llamará a click_en_boton pasándole donde está la casilla
    cell0.onclick = function () {
      click_en_boton(funcionalidad0, 2, i);
    };
    const cellText0 = document.createTextNode(funcionalidad0);
    cell0.appendChild(cellText0);
    row.appendChild(cell0);
    /** Funcionalidad dirigirPartido --> Ejemplo de método con varios tipos de objeto que añade booleano a futbolista en cuestión  */
    let funcionalidad = "Masajear";
    const cell = document.createElement("button");
    cell.style.height = "40px";
    cell.style.width = "80px";
    //Mete la función anónima de cada casilla que llamará a click_en_boton pasándole donde está la casilla
    cell.onclick = function () {
      click_en_boton(funcionalidad, 2, i);
    };
    const cellText = document.createTextNode(funcionalidad);
    cell.appendChild(cellText);
    row.appendChild(cell);
    const infoPersona = document.createTextNode(array_total_db[2][i]);
    row.appendChild(infoPersona);
    tblBody2.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl2.appendChild(tblBody2);
  // appends <table> into <body>
  document.body.appendChild(tbl2);
  // sets the border attribute of tbl to '2'
  tbl2.setAttribute("border", "2");
}

/**
 * Recibe el método a ejecutar, el tipo de objeto (0, 1 o 2) y el id
 * @param {} funcionalidad 
 * @param {*} tipo_objeto 
 * @param {*} id 
 */
function click_en_boton(funcionalidad, tipo_objeto, id) {
  console.log(
    "Funcionalidad: " + funcionalidad + " Tipo: " + tipo_objeto + " id: " + id
  );

  /*Modificar objetos de array_convocatoria */
  if(funcionalidad == "Viajar"){
    array_total_db[tipo_objeto][id].viajar();
  }else if(funcionalidad == "Dirigir"){
    array_total_db[tipo_objeto][id].dirigirPartido();
  }if(funcionalidad == "Masajear"){
    array_total_db[tipo_objeto][id].darMasaje();
  }
}

/**
 * Crea un array nuevo desde la base de datos solo con las personas convocadas, según el enunciado
 */
function convocatoria() {
  let set_convocades_fut = new Set();
  let set_convocades_ent = new Set();
  let set_convocades_mas = new Set();

  //solo se convocan
  //30 jugadorxs
  while (set_convocades_fut.size < 30) {
    set_convocades_fut.add(
      Math.floor(Math.random() * array_total_db[0].length)
    );
  }
  //3 entrenadorxs
  while (set_convocades_ent.size < 3) {
    set_convocades_ent.add(
      Math.floor(Math.random() * array_total_db[1].length)
    );
  }

  //2 masajista
  while (set_convocades_mas.size < 2) {
    set_convocades_mas.add(
      Math.floor(Math.random() * array_total_db[2].length)
    );
  }

  let array_temp = new Array();
  set_convocades_fut.forEach(function (value) {
    array_temp.push(array_total_db[0][value]);
  });
  array_convocatoria[0] = array_temp;

  array_temp = new Array();
  set_convocades_ent.forEach(function (value) {
    array_temp.push(array_total_db[1][value]);
  });
  array_convocatoria[1] = array_temp;

  array_temp = new Array();
  set_convocades_mas.forEach(function (value) {
    array_temp.push(array_total_db[2][value]);
  });
  array_convocatoria[2] = array_temp;

  console.log("Convocatoria: ");
  console.log(...array_convocatoria);
}

/**
 * Concentra al azar según el enunciado
 */
function concentrar_azar() {
  document.getElementById("titulo_vista").innerHTML = "Personas concentradas";
  let set_concentrads_jug = new Set();
  let set_concentrads_ent = new Set();
  let set_concentrads_mas = new Set();

  //solo se concentran
  //24 jugadorxs
  while (set_concentrads_jug.size < 24) {
    set_concentrads_jug.add(
      Math.floor(Math.random() * array_convocatoria[0].length)
    );
  }
  //2 entrenadorxs
  while (set_concentrads_ent.size < 2) {
    set_concentrads_ent.add(
      Math.floor(Math.random() * array_convocatoria[1].length)
    );
  }
  //1 masajista
  while (set_concentrads_mas.size < 1) {
    set_concentrads_mas.add(
      Math.floor(Math.random() * array_convocatoria[2].length)
    );
  }

  let string_final = "";
  set_concentrads_jug.forEach(function (value) {
    string_final += array_convocatoria[0][value].toString();
    string_final += "<br>";
  });
  set_concentrads_ent.forEach(function (value) {
    string_final += array_convocatoria[1][value].toString();
    string_final += "<br>";
  });
  set_concentrads_mas.forEach(function (value) {
    string_final += array_convocatoria[2][value].toString();
    string_final += "<br>";
  });

  document.getElementById("vista").innerHTML = string_final;
}

/**
 * Elige 11 jugadors al azar
 */
function jugar_11() {
  document.getElementById("titulo_vista").innerHTML = "Personas que juegan";

  let set_jugadors = new Set();
  //solo juegan
  //11 jugadorxs
  while (set_jugadors.size < 11) {
    set_jugadors.add(Math.floor(Math.random() * 29));
  }
  let string_final = "";
  set_jugadors.forEach(function (value) {
    string_final += array_total_db[0][value].toString();
    string_final += "<br>";
  });
  document.getElementById("vista").innerHTML = string_final;
}

/**
 * Muestra quién debe dar un masaje y a quién
 */
function fisioterapia() {
  document.getElementById("titulo_vista").innerHTML = "Fisioterapia";
  let str_final = ""
  for (let i= 0; i<array_total_db[1].length;i++){
    if(array_total_db[2][i].daMasaje){
        str_final += array_total_db[2][i].nombre;
        str_final += " masajea a ";
        let idFubtolista = array_total_db[2][i].masajeaAEsteId;
        str_final += array_total_db[0][idFubtolista].nombre;
        str_final += "<br>";
    }
  }
  if(str_final == "") {str_final += " Nadie tiene que masajear a nadie, selecciónalo abajo"};
  document.getElementById("vista").innerHTML = str_final;
}

/**
 * Muestra los entrenadoras que han sido elegidas para dirigir partidos
 */
function vista_equipo_tecnico() {
  document.getElementById("titulo_vista").innerHTML =
    "Equipo técnico para partidos";
let str_final = ""
  for (let i= 0; i<array_total_db[1].length;i++){
    if(array_total_db[1][i].dirije){
        str_final += array_total_db[1][i].toString();
        str_final += "<br>";
    }
  }
  if(str_final == "") {str_final += " No se han seleccionado a entrenador·s para dirigir partidos"};
  document.getElementById("vista").innerHTML = str_final;
}

/**
 * Muestra quién viaja 
 */
function vista_viajeros() {
  document.getElementById("titulo_vista").innerHTML = "¿quién viaja?";
  let str_final = ""
  for(let j=0; j<3; j++){
  for (let i= 0; i<array_total_db[j].length;i++){
    if(array_total_db[j][i].viaja){
        str_final += array_total_db[j][i].toString();
        str_final += "<br>";
    }
  }
}
  if(str_final == "") {str_final += " No viaja nadie; seleccionalo abajo"};
  document.getElementById("vista").innerHTML = str_final;
} 

/**
 * Navegación, recarga la pagina cuando es pulsado el botón de volver
 */
function volver() {
  document.getElementById("titulo_vista").innerHTML = "";
  document.getElementById("vista").innerHTML = "";
  //   document.getElementById("boton_convocar").style.visibility = "visible";
  //   document.getElementById("boton_volver").style.visibility = "hidden";
  //   document.getElementById("boton_11_ganador_azar").style.visibility = "hidden";
  //   document.getElementById(
  //     "boton_jugadors_que_necesitan_masaje"
  //   ).style.visibility = "hidden";
  //   document.getElementById("boton_concentrar_azar").style.visibility = "hidden";
  window.location.reload(true);
}
