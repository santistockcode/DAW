/**
 * An array containing every array and so every object is created
 */
let current_state_of_arrays = new Array(
  { object_gallery: new Array(...array_object_gallery) },
  { image: new Array(...array_image) },
  { category: new Array(...array_category) },
  { image_category: new Array(...array_image_category) },
  { author: new Array(...array_author) },
  { coords: new Array(...array_coords) },
  { landscape: new Array(...array_landscape) },
  { portrait: new Array(...array_portrait) }
);

/**
 * Function to save current state of arrays into json file that can be donwloaded
 */
function save_to_file() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  show_me_everything();
  var bb = new Blob([JSON.stringify(current_state_of_arrays)], {
    type: "text/plain",
  });
  console.log("file created!");
  var a = document.createElement("a");
  a.download = `log_for_${today}.json`;
  a.href = window.URL.createObjectURL(bb);
  a.click();
}

/**
 * Function to enable upload, since I had no time to finish this functionality is disabled
 */
function enable_upload() {
  var input_button = document.getElementById("myFile");
  input_button.disabled = false;
}

//Stores the File uploaded by user
var myUploadedFile = document.getElementById("myFile").files[0];

//TODO
function from_json_to_objects_to_arrays() {
  //no me dio tiempo
  return true;
}
