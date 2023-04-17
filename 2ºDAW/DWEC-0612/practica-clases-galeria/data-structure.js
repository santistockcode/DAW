/**
 * data-structure.js
 * @author Santi
 * Defines and initialices arrays for neccessary objects
 * Implements methods for mangaging these objects
 */

//stores objects from class Object_gallery
var array_object_gallery = new Array();
//stores objects from class Image
var array_image = new Array();
//stores objects from class Category
var array_category = new Array();
//stores objects from class Imgae_category
var array_image_category = new Array();
//stores objects from class Author
var array_author = new Array();
//stores objects from class Coords
var array_coords = new Array();
//stores objects from class Landscape
var array_landscape = new Array();
//stores objects from class Portrait
var array_portrait = new Array();

/**
 * Class representing a gallery
 */
class Object_gallery {
  /**
   * Creates an object_gallery
   * @param {number} id_gallery
   * @param {string} tittle
   */
  constructor(id_gallery, tittle) {
    this._id_gallery = id_gallery;
    this._tittle = tittle;
    //Only stored into array if new id
    if (!object_gallery_exists(id_gallery)) {
      //push new object_gallery into array
      array_object_gallery.push(this);
    }
  }
  /**
   * Get the tittle value
   * @return {string} The tittle value
   */
  get tittle() {
    return this._tittle;
  }

  /**
   * Set the tittle value
   * @param {string} The tittle value
   */
  set tittle(value) {
    this._tittle = value;
  }

  /**
   * Get the id_gallery value
   * @return {number} the id_gallery value
   */
  get id_gallery() {
    return this._id_gallery;
  }

  /**
   * Set the id_gallery value
   * @param {number} Value for the new id_gallery
   */
  set id_gallery(value) {
    this._id_gallery = value;
  }
}

/**
 * Class representing an image
 */
class Image {
  /**
   * Creates an object Image
   * @param {number} id_image
   * @param {string} url
   * @param {string} tittle
   * @param {string} description
   * @param {number} id_gallery
   * @param {number} id_author
   * @param {string} mode
   * @param {string} latitude_longitude
   */
  constructor(
    id_image,
    url,
    tittle,
    description,
    id_gallery,
    id_author,
    mode,
    latitude_longitude
  ) {
    this._id_image = id_image;
    this._url = url;
    this._tittle = tittle;
    this._description = description;
    //If null default category is set
    this._id_gallery = id_gallery != null ? id_gallery : 0;
    //If null default author is set
    this._id_author = id_author != null ? id_author : 0;
    //Coords added when creating new image (this may change is further functionality is applied)
    array_coords.push(new Coords(latitude_longitude));
    this._latitude_longitude = latitude_longitude;
    //Image is dependant on object_gallery
    try {
      /**
       * @throws Will show an error if tittle is null
       */
      if (tittle == null) {
        throw "Tittle of an image can't be null";
      }
      /**
       * @throws Will show an error if Id image already exists
       */
      if (image_exists(id_image)) {
        throw "Id_image already in use";
      }
      //Check if object_gallery and author exists (it should)
      if (
        !image_exists(id_image) &&
        object_gallery_exists(id_gallery) &&
        author_exists(this._id_author)
      ) {
        array_image.push(this);
        //Partial dependency makes it possible for "landscape" "portrait" or "other" possibilities
        if (valid_mode(mode)) {
          this._mode =
            mode == "landscape"
              ? //creates new Landscape/Portrait object and push into its array
                array_landscape.push(new Landscape(id_image))
              : array_portrait.push(new Portrait(id_image));
        }
      }
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  }
  //since no functionality is required, set is omitted for certain attributes
  // ( url, description, id_gallery, mode, longitude_latitude)

  /**
   * Get the id_image value
   * @return {number} Id_image value
   */
  get id_image() {
    return this._id_image;
  }

  /**
   * Set the id_image value
   * @param {number} for the new id_image
   */
  set id_image(value) {
    this._id_image = value;
  }

  /**
   * Get the url value
   * @return {string} url value 
   */
  get url() {
    return this._url;
  }
  
  /**
   * Get the tittle value
   * @return {string} Tittle of image
   */
  get tittle() {
    return this._tittle;
  }

  /**
   * Set the tittle value
   * @param {string}
   */
  set tittle(value) {
    this._tittle = value;
  }

  /**
   * Get the description value
   * @return {string} Image description
   */
  get description() {
    return this._description;
  }

  /**
   * Get the id_gallery value
   * @return {number} id_gallery for the gallery which contains the image
   */
  get id_gallery() {
    return this._id_gallery;
  }

  /**
   * Get the id_author value
   * @return {number} Returns the author id of the image
   */
  get id_author() {
    return this._id_author;
  }

  /**
   * Set the author id value
   * @param {number} Author_id for the image
   */
  set id_author(value) {
    this._id_author = value;
  }

  /**
   * Get the image mode
   * @return {string} Returns image mother (portrait, lanscape or other options)
   */
  get mode() {
    return this._mode;
  }

  /**
   * Get the latitude_longitude value
   * @return {string} Latitude longitude in a string of this image
   */
  get latitude_longitude() {
    return this._latitude_longitude;
  }
}

/**
 * Class representing a Category
 */
class Category {
  /**
   * Creates a new category
   * @param {number} id_category 
   * @param {string} tittle 
   * @param {string} description 
   */
  constructor(id_category, tittle, description) {
    this._id_category = id_category;
    this._tittle = tittle;
    this._description = description;
    try {
      /**
       * @throws Show an error if Category already exists
       */
      if (category_exists(id_category)) {
        throw "Category already exists";
      }
      //Tittle can not be null
      if (!category_exists(id_category) && tittle != null) {
        array_category.push(this);
      }
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  }
  /**
   * Get the id_category for this category
   * @return {number} Id category
   */
  get id_category() {
    return this._id_category;
  }

  /**
   * Get the category tittle
   * @return {string} Category tittle
   */
  get tittle() {
    return this._tittle;
  }

  /**
   * Get the category description
   * @return {string} Description
   */
  get description() {
    return this._description;
  }

  /**
   * Overwritten toString used to display categories to user
   * @returns {String} Summary of category information
   */
  toString() {
    return (
      "Category:" +
      this._id_category +
      "; Tittle: " +
      this._tittle +
      "; Description: " +
      this._description
    );
  }
}

/**
 * Class representing an association of image and category
 */
class Image_category {
  /**
   * Creates a new Image_category
   * @param {number} id_category 
   * @param {number} id_image 
   */
  constructor(id_category, id_image) {
    this._id_category = id_category;
    this._id_image = id_image;
    //Image and category should exists
    if (image_exists(id_image) && category_exists(id_category)) {
      //push object into array for image_category
      array_image_category.push(this);
    }
  }

  /**
   * Get id_category
   * @return {number} id_category associated
   */
  get id_category() {
    return this._id_category;
  }

  /**
   * Set id_category
   * @param {number} new id_category
   */
  set id_category(value) {
    this._id_category = value;
  }

  /**
   * Get the id_image
   * @return {number} id_image associated
   */
  get id_image() {
    return this._id_image;
  }

  /**
   * Set the id_image
   * @value {number} New id_image to associate
   */
  set id_image(value) {
    this._id_image = value;
  }
}

/**
 * Represents an Author
 */
class Author {
  //since avatar can be null no Image_Author object is needed for association
  /**
   * Creates a new Author
   * @param {number} id_author 
   * @param {string} nickname 
   * @param {string} email 
   * @param {string} id_avatar 
   */
  constructor(id_author, nickname, email, id_avatar) {
    this._id_author = id_author;
    this._nickname = nickname;
    this._email = email;
    this._id_avatar = id_avatar;
    //if id_image doesn't exists is set to null
    this._id_avatar = image_exists(id_avatar) ? id_avatar : null;
    //compulsory nickname and email
    try {
      /**
       * @throws Show error if email or Nickname is null
       */
      if (nickname == null || email == null) {
        throw "Nickname or email can't be null";
      } else {
        //Pushes author into corresponding array
        array_author.push(this);
      }
    } catch (error) {
      console.log("ERROR:");
      console.log(error);
    }
  }

  /**
   * Get the author's id
   * @return {number} id_author
   */
  get id_author() {
    return this._id_author;
  }

  /**
   * Set the author's id
   * @param {number} authors new id
   */
  set id_author(value) {
    this._id_author = value;
  }

  /**
   * Get author's nickname
   * @return {string}
   */
  get nickname() {
    return this._nickname;
  }

  /**
   * Get author's email
   * @return {string}
   */
  get email() {
    return this._email;
  }

  /**
   * Get author's avatar (id)
   * @return {number}
   */
  get id_avatar() {
    return this.id_image;
  }

  /**
   * toString mehtod used to display authors information
   * @return {string} author information summary
   */
  toString() {
    return (
      "Number:" +
      this._id_author +
      "; Nickname: " +
      this._nickname +
      "; Email: " +
      this._email
    );
  }
}

//Weak relation between coords and image makes it redundant to have two attributes
//No functionality is implied by material given
/**
 * Class representing coordinates in which pictuer was taken
 */
class Coords {
  /*
    constructor(latitude, longitude) {
    this._latitude_longitude = latitude + ":" + longitude;
    }
    No use or need to diferenciate latitude/longitude yet
   */
  
  /**
   * Creates new coordinates
   * @param {string} latitude_longitude 
   */
  constructor(latitude_longitude) {
    this._latitude_longitude = latitude_longitude;
  }

  /**
   * Get the latitude_longitude value
   * @return {string} value for latitude longitude
   */
  get latitude_longitude() {
    return this._latitude_longitude;
  }

  /**
   * Set the latitude_longitude value
   * @value {string} new longitude latitude value
   */
  set latitude_longitude(value_latitude_longitude) {
    this._latitude_longitude = value_latitude_longitude;
  }
}

/**
 * Class representing an image in the mode: landscape
 */
class Landscape {
  /**
   * Creates new Landscape image
   * @param {number} id_image 
   */
  constructor(id_image) {
    this._id_image = id_image;
  }
  /**
   * Get the id_image 
   * @return {number} id_image for this Landscape
   */
  get id_image() {
    return this._id_image;
  }
}

/**
 * Class representing the image in mode: portraite
 */
class Portrait {
  /**
   * 
   * @param {number} id_image 
   */
  constructor(id_image) {
    this._id_image = id_image;
  }
  /**
   * Get the id_image
   * @return {number} Id_image for this portrait
   */
  get id_image() {
    return this._id_image;
  }
}

/**
 * Returns boolean wether id_image already in use or not
 * @param {number} id_image to check
 * @returns {boolean} true if already in use, false if not
 */
function image_exists(id_image) {
  //stores boolean for return
  let exists = false;
  for (let i = 0; i < array_image.length; i++) {
    if (id_image == array_image[i].id_image) {
      exists = true;
    }
  }
  return exists;
}

/**
 * Function returns wether id_gallery alredy in use or not
 * @param {number} id_gallery to check
 * @returns {boolean} true if alredy in use, false if not
 */
function object_gallery_exists(id_gallery) {
  //stores boolean for final return
  let exists = false;
  for (let i = 0; i < array_object_gallery.length; i++) {
    if (id_gallery == array_object_gallery[i].id_gallery) {
      exists = true;
    }
  }
  return exists;
}

/**
 * Function author_exists returns wether id_author is in use or not
 * @param {number} id_author 
 * @returns {boolean} true if exists, false if not
 */
function author_exists(id_author) {
  let exists = false;
  for (let i = 0; i < array_author.length; i++) {
    if (array_author[i].id_author == id_author) {
      exists = true;
    }
  }
  return exists;
}

/**
 * Returns wether latitude_longitude exists. not in use.
 * @param {*} latitude_longitude 
 * @returns 
 */
function coords_exists(latitude_longitude) {
  let exists = false;
  for (let i = 0; i < array_coords.length; i++) {
    if (latitude_longitude == array_object_gallery[i]) {
      exists = true;
    }
  }
  return exists;
}

/**
 * Function to checke wether id_category is in use or not
 * @param {number} id_category 
 * @returns {boolean} true if exists, false if not
 */
function category_exists(id_category) {
  let exists = false;
  for (let i = 0; i < array_category.length; i++) {
    if (id_category == array_category[i].id_category) {
      exists = true;
    }
  }
  return exists;
}

/**
 * Function to check wether a mode is portrait or landscape (valid) or other 
 * @param {string} mode 
 * @returns {boolean} true if mode is "landscape" or "portrait", false if not
 */
function valid_mode(mode) {
  let valid = false;
  if (mode == "landscape" || mode == "portrait") {
    valid = true;
  }
  return valid;
}

/**
 * Function to remove image 
 * @param {number} id_image 
 * @returns {true} returns true if deleted correctly, false if not
 */
//instead of removeImage
function delete_image_by_id(id_image) {
  let deleted = false;
  try {
    /**
     * @throw Show error if trying to remove inexistent image
     */
    if (!image_exists(id_image)) {
      throw "Image doesn't exists";
    }
    //delete from array_images
    for (let i = 0; i < array_image.length; i++) {
      if (array_image[i].id_image == id_image) {
        array_image.splice(i, 1);
        deleted = true;
      }
    }
    //delete from every table in which id_image is foraign attribute;
    for (let i = 0; i < array_image_category.length; i++) {
      if (array_image_category[i].id_image == id_image) {
        array_image_category.splice(i, 1);
      }
    }
    for (let i = 0; i < array_landscape.length; i++) {
      if (array_landscape[i].id_image == id_image) {
        array_landscape.splice(i, 1);
      }
    }
    for (let i = 0; i < array_portrait.length; i++) {
      if (array_portrait[i].id_image == id_image) {
        array_portrait.splice(i, 1);
      }
    }
  } catch (error) {
    console.log("ERROR:");
    console.log(error);
  }
  //category still exists even if no image has this category.
  return deleted;
}

/**
 * Removes author by its id
 * @param {number} id_author 
 * @returns {boolean}
 */
//instead of removeAuthor
function delete_author_by_id(id_author) {
  let deleted = false;
  try {
    /**
     * @throws Shows error for inexistent author
     */
    if (!author_exists(id_author)) {
      throw "Author " + id_author + " doesn't exist";
    }
    /**
     * @throw Show error for trying to delete default author
     */
    if (id_author == 0) {
      throw "Default author can't be deleted";
    }
    //delete from array_author
    for (let i = 0; i < array_author.length; i++) {
      if (array_author[i].id_author == id_author) {
        array_author.splice(i, 1);
        deleted = true;
      }
    }
    //turn id_author in every (image.id_author = id_author) image to 0 (default)
    for (let i = 0; i < array_image.length; i++) {
      if (array_image[i].id_author == id_author) {
        array_image[i].id_author = 0;
      }
    }
  } catch (error) {
    console.log("ERROR:");
    console.log(error);
  }
  return deleted;
}

/**
 * Function to obtain image object from it id
 * @param {number} id_image from image to get
 * @returns {object} image with id id_image
 */
function get_image_by_id(id_image) {
  let position;
  for (let i = 0; i < array_image.length; i++) {
    if (array_image[i].id_image == id_image) {
      position = i;
    }
  }
  return array_image[position];
}

/** Required functions by given material */
/** Enunciados */

/**
 * Function to get an array of authors
 * @returns {Array} 
 */
function getAuthors() {
  return array_author;
}

/**
 * Function to get an array of categories
 * @returns {Array}
 */
function getCategories() {
  return array_category;
}

//Enunciado: redundante y explicado en adjunto
//function addCategory
//redundant because of constructor in Object_category class

/**
 * Function to delete category by passing its id
 * @param {number} id_category 
 * @returns {boolean} true if deleted correctly, false if not
 */
//because of id_category property, instead of function removeCategory(),
function delete_category_by_id(id_category) {
  let deleted = false;
  try {
    /**
     * @throws Error if cateogory doesn't exist
     */
    if (!category_exists(id_category)) {
      throw "Category " + id_category + " doesn't exist";
    }
    /**
     * @throws Error for trying to delete default category
     */
    if (id_category == 0) {
      throw "Default category can't be deleted";
    }
    for (let i = 0; i < array_category.length; i++) {
      if (array_category[i].id_category == id_category) {
        array_category.splice(i, 1);
        deleted = true;
      }
    }
    //image can't have inexistent category
    for (let i = 0; i < array_image_category.length; i++) {
      if (array_image_category[i].id_category == id_category) {
        array_image_category.splice(i, 1);
        deleted = true;
      }
    }
  } catch (error) {
    console.log("ERROR:");
    console.log(error);
  }
  return deleted;
}

//Enunciado: redundante y explicado en adjunto
//function addImage
//redundant because of constructor and use of id

/**
 * Function to get array of images for a category by id id_category
 * @param {number} id_category 
 * @returns {Array} objects image associated with this id_category
 */
function getCategoryImages(id_category) {
  //Array for storing the images to respond
  let array_image_response_category = new Array();
  for (let i = 0; i < array_image_category.length; i++) {
    if (
      array_image_category[i].id_category == id_category &&
      image_exists(array_image_category[i].id_image)
    ) {
      array_image_response_category.push(
        get_image_by_id(array_image_category[i].id_image)
      );
    }
  }
  return array_image_response_category;
}

/**
 * Function to get all images associated with a specific author
 * @param {number} id_author 
 * @returns Array of images with this id_author
 */
function getAuthorImages(id_author) {
  //Array for response
  let array_image_response_author = new Array();
  try {
    if (!author_exists(id_author)) {
      throw "Author doesn't exist";
    }
    for (let i = 0; array_image.length; i++) {
      if (array_image[i].id_author == id_author) {
        array_image_response_author.push(
          get_image_by_id(array_image[i].id_image)
        );
      }
    }
  } catch (error) {
    console.log("ERROR:");
    console.log(error);
  }
  return array_image_response_author;
}

//Enunciado: redundante por el constructor, explicado en adjunto.
//function addAuthor
//redundant because of constructor and use of id's

/**
 * Function that get all images in the mode portrait
 * @returns {Array}
 */
//returns array of images if exists
function getPortraits() {
  //since no futher functionality has been developed
  //image existance must be checked before fetching array_portraits
  let array_image_response_portraits = new Array();
  array_portrait.forEach(collect_images);
  function collect_images(item) {
    array_image_response_portraits.push(get_image_by_id(item.id_image));
  }
  return array_image_response_portraits;
}

/**
 * Function to get all images in the mode Landscape
 * @returns {Array}
 */
//returns array of images if exist
function getLandscapes() {
  //since no futher functionality has been developed
  //image existance must be checked before fetching array_landscape
  let array_image_response_landscapes = new Array();
  array_landscape.forEach(collect_images);
  function collect_images(item) {
    array_image_response_landscapes.push(get_image_by_id(item.id_image));
  }
  return array_image_response_landscapes;
}
