function newElement() {
    const li = document.createElement("li");
    li.classList.add('todo-item', 'active');

    /////// li elements 
    const elementDate = document.createElement("div");
    elementDate.classList.add("todo-element-date");
    const divDate = document.createElement('div');
    divDate.classList.add('todo-date');
    const divElementText = document.createElement('div');
    divElementText.classList.add('todo-element-text');
    const iAdded = document.createElement('i');
    iAdded.classList.add("far", 'fa-circle');
    const itemText = document.createElement('label');
    itemText.classList.add('todo-text');
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    const iClose = document.createElement('i');
    iClose.classList.add("far", 'fa-times-circle');
    
   /////appending
    li.append(elementDate, divElementText)
    elementDate.appendChild(divDate);
    divElementText.append(iAdded, itemText, editInput, iClose)
  
  ////////adds input
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
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

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit');
    buttonEdit.textContent = "edit";
    divElementText.appendChild(buttonEdit);


    const editTask = function () {
        var divElementText = this.parentNode;
        var editInput = divElementText.querySelector('input[type=text]');
        var containsClass = divElementText.classList.contains("editMode");
        //If class of the parent is .editmode
        if (containsClass && itemText.innerText != editInput.value) {
            //switch to .editmode
            //label becomes the inputs value.
            itemText.innerText = editInput.value;
            // date of the edited task
            const editDate = new Date();
            const modifyDate = dateText + ", modified: " + editDate.getDate() + '-' + (editDate.getMonth() + 1) + '-' + editDate.getFullYear() + ', ' + editDate.getHours() + ':' + (editDate.getMinutes() < 10 ? '0' : '') + editDate.getMinutes();
            divDate.innerText = modifyDate;
        } else {
            editInput.value = itemText.innerText;
        }

        //toggle .editmode on the parent.
        divElementText.classList.toggle("editMode");
    }

    buttonEdit.addEventListener('click', editTask)
   
    /// all, active, completed 
    const all = document.querySelector('.all');
    all.addEventListener('click', function () {
        li.style.display = 'block';
    })

    const completed = document.querySelector('.completed');
    completed.addEventListener('click', function () {
        if (li.className !== "todo-item complete") {
            li.style.display = "none";
        } else {
            li.style.display = "block"
        }
    })

    const active = document.querySelector('.active-items');
    active.addEventListener('click', function () {
        if (li.className !== 'todo-item active') {
            li.style.display = "none";
        } else {
            li.style.display = "block"
        }
    })

}
