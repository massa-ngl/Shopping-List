const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');

// 01: add item function
const addItem = (e) => {
  e.preventDefault();

  if (itemInput.value !== '') {
    // get itemInput value
    let userItem = itemInput.value;

    // create "li" element tag
    const li = document.createElement('li');

    // add class="item" attr to "li"
    li.setAttribute('class', 'item')

    // append "userItem" to "li"
    li.appendChild(document.createTextNode(userItem));

    // create "button" tag
    const button = document.createElement('button');

    // attach class="remove-item btn-link text-red" to "button" tag
    button.setAttribute('class', 'remove-item btn-link text-red');

    // create textNode for "button"
    button.innerHTML = '<p>&times;</p>';

    // append "button" to "li"
    li.appendChild(button);

    // append "li" to "ul";
    itemList.appendChild(li);

    itemInput.value = '';

    console.log(li);
    return;
  } else {
    alert('Enter an item first!');
  }
};

// listen for submit event from the form
itemForm.addEventListener('submit', addItem);

// 02: remove items
const removeItem = (e) => {
  e.preventDefault();

  if (e.target.tagName === 'P') {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      // console.log('Remove button clicked!!!');
    }
  }
};

itemList.addEventListener('click', removeItem);

// 03: clear all items
const clearAllItems = (e) => {
  e.preventDefault();

  if (confirm('Are you sure of deleting all items?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
};

clearBtn.addEventListener('click', clearAllItems);