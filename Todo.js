const ListEl = document.querySelector("#list");
const addTitleEl = document.querySelector("#addTitle");
const addDescriptionEl = document.querySelector("#addDescription");
const addTimeEl = document.querySelector("#addTime");
const doneBtnEl = document.querySelector("#done");
const DialogEl = document.querySelector("#dialog");
const deleteBtnEl = document.querySelector("#deleteBtn");

let modalMode = ""
let editingItemid = ""

class ToDo {
  constructor(id, title, description, dateDone) {
    this.id = id
    this.title = title
    this.description = description
    this.dateDone = dateDone
    this.dateCreated = new Date()
  }
}

let todoList = []


// Show and prepare Edit item Modal
function showEditItemDialog(id){
  editingItemid = id
  const todoToEdit = todoList.find((todo)=>{
    if(todo.id == id){
      return(todo);
    }
  })
  console.log("found item: ", todoToEdit);
  addTitleEl.value = todoToEdit.title;
  addDescriptionEl.value = todoToEdit.description;
  addTimeEl.value = todoToEdit.dateDone;

  modalMode = "edit"
  showDialog();
}

const renderTodos = () => {
      //clear ul before adding
      ListEl.innerHTML = ""

  todoList.forEach(todo => {
    const htmlResult = `<li class="grid grid-cols-[1fr_24px] items-center gap-6 border-b-2 border-neutral-200 pb-4">
    <label class="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md pl-2 hover:bg-slate-100">
      <input type="checkbox" class="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-orange-600 dark:accent-orange-700 checked:appearance-auto">
      <span class="select-none text-slate-700 peer-checked:text-slate-400 peer-checked:line-through">${todo.title}</span>
    </label>
    <div class="flex btn">
      <button onclick="showEditItemDialog(${todo.id})" class="rounded-sm hover:bg-orange-300 hover:rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
      <button onclick="deleteItem(${todo.id})" class="rounded-sm hover:bg-red-300 hover:rounded-md deleteBtn">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
    <div class="flex items-center justify-between pl-6 text-sm font-light">
      <span class="text-zinc-500">${todo.description}</span>
      <span class="text-lime-600"><i class="ri-time-line"></i>${todo.dateDone}</span>
    </div>
  </li>`
    const newEl = document.createElement("div")
    newEl.innerHTML = htmlResult

    // add new list data
    ListEl?.appendChild(newEl)
  })
}

// todoList.push(new ToDo(1,"title1","descriptio1n",new Date()))
// todoList.push(new ToDo(2,"title2","description2",new Date()))
// todoList.push(new ToDo(3,"title3","description3",new Date()))
renderTodos()





// done btn
doneBtnEl.addEventListener("click", (e)=>{
  const titleInputValue = addTitleEl.value
  const descriptonInputValue = addDescriptionEl.value
  const dateInputValue = addTimeEl.value

  // do nothing if title is empty
  if (!titleInputValue){
    return
  }

  // clear dialog
  addTitleEl.value = ""
  addDescriptionEl.value = ""
  addTimeEl.value = ""

  // call to fn
  const todo = new ToDo(new Date().getTime(),titleInputValue, descriptonInputValue,dateInputValue)
  if (modalMode === "new"){
    console.log("new item");
    addTodo(todo)
  }
  else if (modalMode === "edit"){
    console.log("edit item");
    editTodo(editingItemid , todo)
  } else {
    console.error("error")
  }

  // render todos
  renderTodos()

  hideDialog()

})

// Show Add Item Modal
function showAddItemDialog(){
  addTitleEl.value = ""
  addDescriptionEl.value = ""
  addTimeEl.value = ""

  modalMode = "new"
  showDialog()
}





// add Item
function addTodo(todo){
  todoList.push(todo)
}

// Edit todo
function editTodo(id,todo){
  let index = todoList.findIndex((todo)=>{
    return todo.id === editingItemid
  })
  // todoList[index] = new ToDo(id, todo.title,todo.description, todo.dateDone)
  todoList.splice(index ,1,new ToDo(id, todo.title,todo.description, todo.dateDone))
  renderTodos()
}

//Delete Item
function deleteItem(id){
  const newTodosList = todoList.filter((todo)=>{
    return todo.id !== id
  })
  todoList = newTodosList;
  renderTodos()
}





//Dialog
function showDialog(){
  DialogEl.classList.remove("hidden");
  DialogEl.classList.add("relative");
}
function hideDialog(){
  DialogEl.classList.remove("relative");
  DialogEl.classList.add("hidden");
}