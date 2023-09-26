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

//reset the form
function resetForm() {
  const bookForm = document.getElementById("newBook").reset();
}

// Getting a new book from the form
function addBookFunc() {
  document
    .getElementById("newBook")
    .addEventListener("submit", function (event) {
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
      resetForm();
      console.log(myLibrary);

      var div = document.querySelector("#bookList");

      div.innerHTML =
        div.innerHTML +
        `<div class="card" id="bookInfo"style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Title: ${newBook.title}</h5>
          <p class="card-text">Author: ${newBook.author}</p>
          <p class="card-text">Pages: ${newBook.pages}</p>
  
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`;
      
      return newBook;
    });
}

addBookFunc();

function showLibContentent() {
  document.getElementById();
}

//
