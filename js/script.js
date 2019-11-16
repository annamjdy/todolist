function newElement() {
    var li = document.createElement("li");
    li.classList.add('todo-item', 'active');

    /////// li elements 
    var elementDate = document.createElement("div");
    elementDate.classList.add("todo-element-date");
    var divDate = document.createElement('div');
    divDate.classList.add('todo-date');
    var divElementText = document.createElement('div');
    divElementText.classList.add('todo-element-text');
    var iAdded = document.createElement('i');
    iAdded.classList.add("far", 'fa-circle');
    var itemText = document.createElement('label');
    itemText.classList.add('todo-text');
    var editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    const iClose = document.createElement('i');
    iClose.classList.add("far", 'fa-times-circle');
    
   /////appending
    li.append(elementDate, divElementText)
    elementDate.appendChild(divDate);
    divElementText.append(iAdded, itemText, editInput, iClose)
  
  ////////adds input
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    itemText.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    };
    document.getElementById("myInput").value = "";
    
    /////////date 
    const date = new Date();
    const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ', ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    divDate.innerText = dateText;
    
     //////checked
    iAdded.addEventListener('click', function () {
        li.classList.toggle('complete');
        li.classList.toggle('active');
    })
    //////// delete
    iClose.addEventListener('click', function () {
        li.parentNode.removeChild(li);
    })
    
    ///////// edit task

    var buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit');
    buttonEdit.textContent = "edit";
    divElementText.appendChild(buttonEdit);


    var editTask = function () {
        var divElementText = this.parentNode;
        var editInput = divElementText.querySelector('input[type=text]');
        var containsClass = divElementText.classList.contains("editMode");
        //If class of the parent is .editmode
        if (containsClass && itemText.innerText != editInput.value) {
            //switch to .editmode
            //label becomes the inputs value.
            itemText.innerText = editInput.value;
            // date of the edited task
            var editDate = new Date();
            const modifyDate = dateText + ", modified: " + editDate.getDate() + '-' + (editDate.getMonth() + 1) + '-' + editDate.getFullYear() + ', ' + editDate.getHours() + ':' + (editDate.getMinutes() < 10 ? '0' : '') + editDate.getMinutes();
            divDate.innerText = modifyDate;
        } else {
            editInput.value = itemText.innerText;
        }

        //toggle .editmode on the parent.
        divElementText.classList.toggle("editMode");
    }

    buttonEdit.addEventListener('click', editTask)
    
}
