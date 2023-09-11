class List {
  toDo = [];
  constructor(render) {
    this.render = render;
    this.render.renderList(this.toDo);
  }

  addTask(task) {
    this.toDo.push(task);
    console.log('todooo populando array', this.toDo)
    this.render.renderList(this.toDo);
    console.log('renderizando', this.toDo)
  }

  removeTask(task) {
    this.toDo = this.toDo.filter((word) => word !== task);
    console.log('removendo task', task)
    this.render.renderList(this.toDo);
    console.log('removendo', this.toDo)
  }
}

class Render {
  constructor(input) {
    this.input = input;
    const taskInput = this.input.querySelector("input");
    const addButton = this.input.querySelector("button");
    const ul = this.input.querySelector(".tasks");

    addButton.addEventListener("click", () => {
      console.log('adicionado')
      const task = taskInput.value.trim();
      if (task !== "") {
        listinha.addTask(task);
    
        taskInput.value = "";
        console.log('taskinha - botao add task', task)
      }
    });

    ul.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const task = event.target.previousSibling.textContent;
        listinha.removeTask(task);
        console.log('taskinha - botao apagar task', task)
      }
    });
  }
//  ------essa funçao vem da outra class
  renderList(toDo) { 
    const ul = this.input.querySelector(".tasks");
    ul.innerHTML = "";
    toDo.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      li.appendChild(deleteButton);
      ul.appendChild(li);
    });
  }
}

const render = new Render(document.querySelector("#to-do-container"));
const listinha = new List(render);