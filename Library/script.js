let myLibrary = [{ title: "a", author: "b", pages: "c", read: "Read" }];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

//--------------------

function addNewBook() {
  const form = document.querySelector(".form-container form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readCheckbox = document.getElementById("status");
    const read = readCheckbox.checked ? "Read" : "Unread";

    let newData = new Book(title, author, pages, read);
    myLibrary.push(newData);

    closeForm();
    updateTable();
  });
}

function updateTable() {
  const tableBody = document.getElementById("table");
  tableBody.innerHTML = "";

  displayLibrary();
  deleteBook();
  changeStatus();
}

// --------------

const table = document.getElementById("table");
const del = document.getElementsByClassName("delete");
const status = document.getElementsByClassName("status");
const add = document.getElementById("add");

function addBook() {
  add.addEventListener("click", () => {});
}

// deleting a book

function deleteBook() {
  [...del].forEach((d) => {
    d.addEventListener("click", () => {
      d.parentElement.parentElement.remove();
    });
  });
}

// status Change
function changeStatus() {
  [...status].forEach((d) => {
    d.addEventListener("click", () => {
      if (d.textContent == "Unread") {
        d.textContent = "Read";
        d.classList.remove("red");
        d.classList.add("blue");
      } else if (d.textContent == "Read") {
        d.textContent = "Unread";
        d.classList.remove("blue");
        d.classList.add("red");
      }
    });
  });
}

// displaying objects in myLibrary

function displayLibrary() {
  myLibrary.forEach((book) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", book.title);

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let readButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    readButton.classList.add("status", "blue");

    deleteButton.classList.add("delete");

    td1.textContent = book.title;
    td2.textContent = book.author;
    td3.textContent = book.pages;

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    td4.appendChild(readButton);
    td5.appendChild(deleteButton);

    readButton.textContent = book.read;
    deleteButton.textContent = "Delete";

    tr.appendChild(td4);
    tr.appendChild(td5);
  });
}

//form open and close
function openForm() {
  document.getElementById("addbook").style.display = "block";
}

function closeForm() {
  document.getElementById("addbook").style.display = "none";
}

displayLibrary();
deleteBook();
changeStatus();
