var input=document.querySelector(".todo_input")
var mainTodoContainer=document.getElementById('todos')
var btnAdd=document.querySelector(".add-item");
var btnDelete=document.querySelector(".deleteBtn")
var addingButton = document.querySelector('.add-item');

addingButton.addEventListener('click', function(e){
    if(input.value.trim()){
        var UlTages=document.createElement('ul');
        UlTages.classList.add('todo-list-container')
        var todolist=document.createElement('div')
        todolist.classList.add("todo-list")
        var liTages=document.createElement('li')
        liTages.innerHTML=input.value
        liTages.classList.add("todo-item")
        var buttondiv=document.createElement('div');
        buttondiv.classList.add('button')
        var btnComplete=document.createElement('button')
        btnComplete.classList.add('complete')
        btnComplete.innerHTML='<i class="fa fa-check"></i>'
        var btnEdit=document.createElement('button')
        btnEdit.classList.add('btnEdit')
        btnEdit.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
        btnEdit.onclick = function(){
            editWorking(liTages);
        }

        var btnTrash=document.createElement('button')
        btnTrash.classList.add('btnTrash')
        btnTrash.innerHTML='<i class="fa fa-trash"></i>'
        UlTages.appendChild(todolist)
        todolist.appendChild(liTages)
        todolist.appendChild(buttondiv)
        buttondiv.appendChild(btnComplete)
        buttondiv.appendChild(btnEdit)
        buttondiv.appendChild(btnTrash)

        mainTodoContainer.appendChild(UlTages)
        input.value=""
        

        todolist.addEventListener('click', function(e){
            var items = e.target;
            if(items.classList[0] === 'complete'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line_through')
            }
            else if(items.classList[0] === 'btnTrash'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('fall');
                todo2.addEventListener('transitionend', function(){
                    var todo3 = todo2.parentElement;
                    todo3.remove();
                });
            }
        });
    }else if(input.value === ''){
        alert('please fill the input field')
    }
});
function editWorking(e){
    var editValue = prompt('edit the select item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
function deleteAllElements(){
    var gettingUlTag = document.querySelectorAll('.todo-list-container');
    for(var i = 0; i < gettingUlTag.length; i++){
        gettingUlTag[i].remove();
    }
    input.value = '';
}
