/*
 * As this is an exercise and no id managment system has been implemented
 * a maximum of 50 images for gallery has been set
 */
let max_elements = 50;
for (let i = 0; i < max_elements; i++) {
  //create div for each image
  var div = document.createElement("div");
  div.id = "div" + i;
  var body = document.querySelector("body");
  body.appendChild(div);
  // image is embedded via inner html
  var container = document.getElementById("div" + i);
  if (i < array_image.length) {
    container.innerHTML = constructor_inner_html(array_image[i]);
  }
}

/**
 * Function to reload the images when an image is deleted or added
 * Goes throw all the <div> until no more images in array_image
 */
function reload() {
  let counter = 0;
  if (array_image.length == 0) {
    var container = document.getElementById("div0");
    container.innerHTML = "";
  }
  for (let i = 0; i < array_image.length; i++) {
    var container = document.getElementById("div" + i);
    if (i < array_image.length) {
      container.innerHTML = constructor_inner_html(array_image[i]);
    }
    counter = i;
  }
  // hide the rest of images
  for (let j = counter + 1; j < max_elements; j++) {
    var contenedor = document.getElementById("div" + j);
    contenedor.innerHTML = "";
  }
}

/**
 * Function to create string for inner_html
 * @param {*} objeto image
 * @returns {string}
 */
function constructor_inner_html(objeto) {
  string_final = "<img ";
  string_final += "src='";
  string_final += objeto.url;
  string_final += "' alt='";
  string_final += objeto.descripcion;
  string_final += "' class='";
  string_final += "img-fluid d-block mx-auto";
  string_final += "'>";
  return string_final;
}
