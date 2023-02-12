var form = document.getElementById('addTask');
var taskList = document.getElementById('tasks');


// add item
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);

function addTask(e) {
    e.preventDefault();
    //  add to list
    var newTask = document.getElementById('task').value;

    var li = document.createElement('li');
    li.className = 'task-list-gloup';
    li.appendChild(document.createTextNode(newTask));

    var delBtn = document.createElement('button');
    delBtn.className = 'btn delete';
    delBtn.appendChild(document.createTextNode('X'));

    taskList.append(li);
    li.appendChild(delBtn);
}

function removeTask(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?'))
            var li = e.target.parentElement;
        taskList.removeChild(li);
    }
}





