function newElement() {
    var li = document.createElement("li");
    li.classList.add('todo-item', 'active');

    //// date
    var elementDate = document.createElement("div");
    elementDate.classList.add("todo-element-date");
    var divDate = document.createElement('div');
    divDate.classList.add('todo-date');
    li.appendChild(elementDate);
    elementDate.appendChild(divDate);
    
    const date = new Date();
    const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ', ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    divDate.innerText = dateText;
  
    ///////////// li elements 
    var divElementText = document.createElement('div');
    divElementText.classList.add('todo-element-text');
    li.appendChild(divElementText);
    
    var iAdded = document.createElement('i');
    iAdded.classList.add("far", 'fa-circle');
    var itemText = document.createElement('label');
    itemText.classList.add('todo-text');
    var editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    const iClose = document.createElement('i');
    iClose.classList.add("far", 'fa-times-circle');
    divElementText.appendChild(iAdded);
    divElementText.appendChild(itemText);
    divElementText.appendChild(editInput);
    divElementText.appendChild(iClose);
  
  
}
