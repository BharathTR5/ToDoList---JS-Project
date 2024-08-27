const todoArray=[];

function renderHTML(){
  let todoList='';

  for(let i=0; i<todoArray.length; i++){
    const todoObject = todoArray[i];
    const name= todoObject.name;
    const dueDate=todoObject.date;

    const html = `<div>${name}</div>
                 <div>${dueDate}</div> 
    <button onclick="
    todoArray.splice(${i},1)
    renderHTML();"
    class="deleteButton">Delete</button>`;

    todoList+=html;
  }
  document.querySelector('.todo-list').innerHTML= todoList;
}


function addtoTodo(){
  let inputElement=document.querySelector('.inputElement');
  let dateInput=document.querySelector('.dateInput');
  let name=inputElement.value;
  let dueDate=dateInput.value;
  todoArray.push({name: name,
                  date: dueDate
                });
  inputElement.value='';
  dateInput.value='';
  renderHTML();
}