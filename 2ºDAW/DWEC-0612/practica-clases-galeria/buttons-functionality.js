/**
 * Function to manage user interaction of adding a new image
 * It takes data via promt and creates corresponding image
 * Reloads and then shows everything in console
 */
function add_image() {
  let url = prompt("image url? default images at default_images");
  let tittle = prompt("image tittle?");
  let description = prompt("image description?");
  let id_gallery = 0; //if futher galleries are implemented id management for galleries need to be changed
  let id_author = prompt(
    "author number? see Authors view button; if you don't know type 0 for default"
  );
  let mode = prompt(
    'mode, type "portrait", "landscape" or "other" in lower casee'
  );
  let latitude = prompt("latitude? ");
  let longitude = prompt("longitude?");
  let latitude_longitude = latitude + ":" + longitude;
  let new_image = new Image(
    array_image.length,
    url,
    tittle,
    description,
    id_gallery,
    id_author,
    mode,
    latitude_longitude
  );
  reload();
  show_me_everything();
}

/**
 * Function to delete image whos id has been asked by prompt
 * Then shows everything in console and then reloads images
 */
function delete_image() {
  let input = prompt("Id image to remove?");
  delete_image_by_id(input);
  show_me_everything();
  reload();
}

/**
 * Function to add new author as asked to user by prompt
 * Then reloads page
 */
function add_author() {
  let nickname = prompt("author nickname?");
  let email = prompt("email? ");
  let id_avatar = prompt(
    "id for image avatar? if image doesn't exist, null will be defined"
  );
  let new_author = new Author(array_author.length, nickname, email, id_avatar);
  reload();
}

/**
 * function to delete author by specific id asked by prompt
 */
function delete_author() {
  let input = prompt("Id author to remove? see Authors view");
  delete_author_by_id(input);
  reload();
}

/**
 * Function to add new category whose data has been asked via prompt
 */
function add_category() {
  let tittle = prompt("category tittle?");
  let description = prompt("description? ");
  let new_category = new Category(array_category.length, tittle, description);
  reload();
}

/**
 * Function to delete category whose id has been asked via prompt
 */
function delete_category() {
  let input = prompt("Id category to remove? see Categories view");
  delete_category_by_id(input);
  reload();
}

/**
 * Function to show via an alert the info of every author
 */
function authors_view() {
  alert(prettify(getAuthors()));
}

/**
 * Function to show in alert the info of every category
 */
function categories_view() {
  alert(prettify(getCategories()));
}

/**
 * Function to associate category with image (object image_category)
 * The id of each object is asked by prompt
 */
function link_image_category() {
  let id_image = prompt("Image number you want to link to category?");
  let id_category = prompt("what category? see Numbers in Categories view");
  let new_image_category = new Image_category(id_category, id_image);
  console.log(
    "you might wanna check tests-and-objects.js to try this on default images"
  );
}

/**
 * Function to display de different methods whose Exceptions can be tested
 * in console
 */
function test_console() {
  alert(
    'Test methods: "gettersettertitle","addCategory","removeCategory","addImage","removeImage","addAuthor","removeAuthor","getAuthorImages"'
  );
  console.log(
    "type 'console_test_this('method')' where method is one of the options displayed in the alert"
  );
}

/**
 * Function to add \n after each object in array so it can be easily read in alarm
 * @param {Array} array
 * @returns
 */
function prettify(array) {
  final_str = "";
  array.forEach((element) => {
    final_str += element.toString();
    final_str += "\n";
  });
  return final_str;
}
