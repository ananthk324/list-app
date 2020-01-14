/* A simple list app using client side local storage
 */

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

// Array to store data (converted to JSON) retrieved from localStorage, if any
let itemsArray
if (localStorage.getItem('items')) {
  itemsArray = JSON.parse(localStorage.getItem('items'))
} else {
  itemsArray = []
}

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// function to create list
const createLi = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

// to add an item to list
form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  createLi(input.value);
  input.value = "";
});

data.forEach(item => {
  createLi(item);
});

// to clear all items from localStorage when button is clicked
button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});
