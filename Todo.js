

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
    // const htmlResult = `<li class="flex flex-row items-center justify-start gap-1">
    //                     <input type="checkbox" id="1" name="Doit" value="">
    //                     <label class="title" for="1">${todo.title}</label>
    //                     <div class="dateDone">${dateFormat}</div>
    //                     <div class="description" >${todo.description}</div>
    //             </li>`
//     const newEl = document.createElement("div")
//     newEl.innerHTML = htmlResult
//     todoListEl?.appendChild(newEl)
//   })
// }

// renderTodos()



let ListEl = document.querySelector("#list");
let addTitleEl = document.querySelector("#addTitle");
let addDescriptionEl = document.querySelector("#addDescription");
let addTimeEl = document.querySelector("#addTime");
let doneBtnEl = document.querySelector("#done");
let DialogEl = document.querySelector("#dialog")


//Add Item
doneBtnEl.addEventListener("click", (e)=>{
  if (!addTitleEl.value){
    return
  }
  ListEl.appendChild(createListItem(addTitleEl.value, addDescriptionEl.value,addTimeEl.value))
  addTitleEl.value = ""
  addDescriptionEl.value = ""
  addTimeEl.value = ""
  hideDialog()
})


function createListItem(titleValue, descriptionValue, timeValue){
  const newLi = document.createElement("li")
  const result = `<li class="grid grid-cols-[1fr_24px] items-center gap-6 border-b-2 border-neutral-200 pb-4">
  <label class="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md pl-2 hover:bg-slate-100">
    <input type="checkbox" class="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-orange-600 dark:accent-orange-700 checked:appearance-auto">
    <span class="select-none text-slate-700 peer-checked:text-slate-400 peer-checked:line-through">${titleValue}</span>
  </label>
  <div class="flex">
    <button class="rounded-sm hover:bg-orange-300 hover:rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </button>
    <button onclick="deleteItem()" class="rounded-sm hover:bg-red-300 hover:rounded-md ">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>
  <div class="flex items-center justify-between pl-6 text-sm font-light">
    <span class="text-zinc-500">${descriptionValue}</span>
    <span class="text-lime-600"><i class="ri-time-line"></i>${timeValue}</span>
  </div>
</li>`
  newLi.innerHTML = result;
  return newLi;
}



//Delete Item
function deleteItem(){
  document.querySelector("li").remove()
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