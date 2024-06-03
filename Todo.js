

// class ToDo {
//   constructor(id, title, description, dateDone) {
//     this.id = id
//     this.title = title
//     this.description = description
//     this.dateDone = dateDone
//     this.dateCreated = new Date()
//   }
// }

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
let deleteBtn = document.getElementsByClassName("delete")
let ulList = document.querySelector("#list")


//Delete Item
ulList.addEventListener("click", (e)=>{
  if(e.target.nodeName == "A" && e.target.className == "delete"){
    e.target.parentNode.remove()
  }
})


//dropdown item
function toggleDropdown(){
  let dropdown = document.querySelector("#dropdownButton #dropdown");
  dropdown.classList.toggle("hidden");
}

//Dialog
function showDialog(){
  let Dialog = document.getElementById("dialog")
  Dialog.classList.remove("hidden");
  Dialog.classList.add("relative");
}
function hideDialog(){
  let Dialog = document.getElementById("dialog")
  Dialog.classList.remove("relative");
  Dialog.classList.add("hidden");
}