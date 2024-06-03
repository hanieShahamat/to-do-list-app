
const todoListEl = document.getElementById("todo_list")

class ToDo {
  constructor(id, title, description, dateDone) {
    this.id = id
    this.title = title
    this.description = description
    this.dateDone = dateDone
    this.dateCreated = new Date()
  }
}

// const todoList = []
// todoList.push(new ToDo("1", "Do 30 minutes of yoga", "Fitness #",new Date()))
// todoList.push(new ToDo("2", "Dentist appointment", "Appointments #", new Date()))
// todoList.push(new ToDo("3", "Buy bread", "Groceries #", new Date()))


// const renderTodos = () => {
//   console.log("call to method")

//   todoList.forEach(todo => {
//     const dateFormat = todo.dateDone.getMonth()+"/"+todo.dateDone.getDay()
//     const newEl = document.createElement("div")
//     newEl.innerHTML = htmlResult
//     todoListEl?.appendChild(newEl)
//   })
// }

// renderTodos()

// const deleteItem = (id)=>{
//     // delete item from array
//     renderTodos() 
// }
// const todoList:ToDo[]

let itemBtn = document.getElementById("item")
let deleteBtn = document.getElementById("delete")
let list = document.querySelector("#to-do-list")

//Delete Item
list.addEventListener("click", (e)=>{
  if(e.target.nodeName == "DIV" && e.target.className == "delete-btn"){
    e.target.parentNode.remove()
  }
})


//dropdown item
function toggleDropdown(){
  let dropdown = document.querySelector("#dropdownButton #dropdown");
  dropdown.classList.toggle("hidden");
}