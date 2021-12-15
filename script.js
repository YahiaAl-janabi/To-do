document.body.innerHTML = `<div class="container">
      <h1>Todo List</h1>
      <input type="text" name="item-input" id="item-input" />
      <button id="submitbtn" type="submit" value="">Add</button>
      <div class="list-container">
        <ul></ul>
      </div>
    </div>`;

// constants

const ul = document.querySelector('ul');
const addBtn = document.querySelector('#submitbtn');
const input = document.querySelector('#item-input');

// functions

const createListItem = () => {
  const li = document.createElement('li');
  const inputValue = input.value;
  const inputValueText = document.createTextNode(inputValue);
  const closeBtn = document.createElement('button');

  closeBtn.textContent = 'X';
  closeBtn.classList.add('close');
  li.appendChild(inputValueText);
  li.appendChild(closeBtn);

  if (inputValue == '') {
    alert('Please add an item');
  } else {
    ul.appendChild(li);
    input.value = null;
  }
};

const removesItem = (e) => {
  if (e.target.classList.contains('close')) {
    e.target.parentElement.style.display = 'none';
  }
};

// Event listeners
ul.addEventListener('click', removesItem);
addBtn.addEventListener('click', createListItem);
