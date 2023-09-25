// The Library
const myLibrary = [];
//The Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  //The function to report the info
  this.info = function () {
    const isRead = this.read ? "Yes" : "No";
    console.log(`${title}, by ${author}, ${pages} pages, ${isRead} `);
  };
}
//function to append a book in the library
function addBookToLibrary(mybook) {
  // do stuff here
  return myLibrary.push(mybook);
}

// Getting a new book from the form
document.getElementById("newBook").addEventListener("submit", function (event) {
  event.preventDefault(); //Prevent the default form submission behavior
  // Get the form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").value;

  // Create a Book Object with the form values
  const newBook = new Book(title, author, pages, isRead);

  // Add new book to library
  addBookToLibrary(newBook);
  console.log(myLibrary);

  // reset the form
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isRead").value = "";
});
// const book1 = new Book("the odemaya", "leon", 200, "Yes");
// book1.info();

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, options);
});
