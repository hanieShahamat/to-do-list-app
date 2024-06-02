const  todoListEl = document.getElementById("todo_list");




class ToDo{
    id:string
    title: string
    description: string 
    dateCreated: Date
    dateDone: Date

    constructor(id :string, title:string, description:string,dateDone:Date){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dateDone = dateDone;
        this.dateCreated = new Date();
    }
    
}
    

const todoList: Array<ToDo> = []
todoList.push(new ToDo("1","buy","life",new Date(2024)))
todoList.push(new ToDo("2","","",new Date()))
todoList.push(new ToDo("","","",new Date()))
todoList.push(new ToDo("","","",new Date()))
todoList.push(new ToDo("","","",new Date()))

const renderTodos = ()=>{
    console.log("call to method");
    
    todoList.forEach(todo =>{
        const htmlResult = 
            `<li class="flex flex-row items-center justify-start gap-1">
                    <input type="checkbox" id="1" name="Doit" value="">
                    <label id="title" for="1">${todo.title}</label>
                    <div id="dateDone">${todo.dateDone.getDay()}</div>
                    <div id="description" >${todo.description}</div>
            </li>`
        const newEl = document.createElement("div")
        newEl.innerHTML = "htmlResult"
        todoListEl?.appendChild(newEl)
        console.log(todoList);
        
    })
}

renderTodos()
// const todoList:ToDo[]

