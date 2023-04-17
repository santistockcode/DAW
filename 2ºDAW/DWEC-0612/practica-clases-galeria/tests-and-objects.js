/** PRUEBAS Y CARGA DE OBJETOS*/
/**
 * There has been declared one array for every type of object
 * This js file is where objects are initialized for their use
 * This js also includes a testing method via console
 */

//Objetos de carga iniciales: 1 object_gallery, 1 author default (posición 0 del array), 1 category default (posición 0 del array). 
let galeria1_prueba = new Object_gallery(0, "Grafitis y pintura al aire libre");
let default_category = new Category(0, "default category", "Images can have this category when no category is said");
let default_author = new Author(0, "default-author-0", "default athor no email", 40);


// DEFAULT IMAGES //
// Uncomment this to se default images
/*
let default_image1 = new Image(0, "default_images/0.png", "Calle", "imagen cuadrada de una calle", 0, null, "", "9829375:0980953");
let default_image2 = new Image(1, "default_images/1.png", "Mural", "imagen apaisada de un mural", 0, 0, "landscape", "3455853:2384599");
let default_image3 = new Image(2, "default_images/2.png", "Mural", "imagen apaisada de un mural", 0, null, "landscape", "2349595:3333444");
let animals_category = new Category(1, "Animals", "Imágenes de animales");
let default_image3_is_category_1 = new Image_category(1, 2);
show_me_everything();
*/

/**
 * Shows in console the content of every array
 */
function show_me_everything() {
  console.log("array_object_gallery");
  console.log(array_object_gallery);
  console.log("array_image");
  console.log(array_image);
  console.log("array_category");
  console.log(array_category);
  console.log("array_immage_category");
  console.log(array_image_category);
  console.log("array_author");
  console.log(array_author);
  console.log("array_coords");
  console.log(array_coords);
  console.log("array_landscape");
  console.log(array_landscape);
  console.log("array_portrait");
  console.log(array_portrait);
}

/**
 * Function to test Exceptions especified by material given
 * @param {String} method to be tested, as displayed when hiting test button 
 */
function console_test_this(method){
  //Text in console to show which method is goint go be tested
  //Each method displays in console its own explanation
  console.log( "Exceptions for method " + method);
  switch(method) {
    case "gettersettertitle":
      console.log("Creating new image without tittle");
      let image3 = new Image(3, "default_images/0.png", null, "imagen cuadrada de una calle", 0, null, "", "9829375:0980953");
      break;
    case "addCategory":
      console.log("Trying to create new category with id 0");
      let colors_category = new Category(0, "Colors", "Imágenes de animales");
      break;
    case "removeCategory":
        console.log("Trying to remove inexistent category");
        delete_category_by_id(500);
        break;
    case "addImage":
        console.log("Trying to create image with already existent id");
        console.log("First a default image is created:");
        let test_image = new Image(20, "default_images/0.png", "Calle", "imagen cuadrada de una calle", 0, null, "", "9829375:0980953");
        reload();
        console.log("then:");
        let error_image = new Image(20, "default_images/0.png", "Calle", "imagen cuadrada de una calle", 0, null, "", "9829375:0980953");
        delete_image_by_id(20);
        break;
    case "removeImage":
          console.log("Trying to delete image inexistent");
          delete_image_by_id(-900);
          break;
    case "addAuthor":
          console.log("Trying to add author with no nickname");
          let test_author = new Author(20, null, "email_author", 0);
          delete_author_by_id(20);
          show_me_everything();
          break;
    case "removeAuthor":
      console.log("Trying to delete author inexistent");
      delete_author_by_id(-100);
      break;
    case "getAuthorImages":
        console.log("Trying to fetch author images with id_author = null");
        getAuthorImages(100);
        break;
    default:
      console.log(method + " is not a valid test");
  } 
}

/** PENDIENTE */
// Si los objetos tuviesen persistencia más allá del tiempo de ejecución otro modelo de gestión de id debiere ser implementado




