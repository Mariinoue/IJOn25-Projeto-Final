
# Título do Projeto

TDAH & Tempo
Você luta com o tempo? Eu sim 🙋‍♀️ ! Quando estou fazendo algo apaixonante (como desenhar estes posts☺️) geralmente perco totalmente a noção de tempo! Aparentemente é bastante comum para pessoas com TDAH passarem por essa experiência de “cegueira temporal” ⏰ Utilizar ferramentas visuais como os calendários visuais, planejadores ou cronogramas reversos realmente me ajudaram.

---
# Olá, eu sou a Mari Inoue! 👩🏽


## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora Front-End.
Fui aluna da Reprograma - ON12 - Back-End. Vou assim que comecei minha jornada como DEV 💜
Hoje trabalho com densevolvimento web - Front End.
Fiz transição de carrerira, no passado eu era estilista de moda 🤩 hoje sou uma Deva. Gosto muito da area de tech do que eu escolhi para mim. 


Tecnologias:

|Ferramenta |	Descrição |
|-|-|
| javascript |Linguagem de programação utilizada
|nodejs	| Ambiente de execução do javascript

## Funcionalidades

#### Ferramenta de organização
- Lista de tarefas 
- Criar lista de tarefas
- Remover lista de tarefas
#### Ferramenta de geranciar tempo

- Cronometro 
- Set de 25 minutos
- Set de 5 minutos
- Iniciar o cronometro
- Parar o cronometro
- Reset do cronometro


## Tema
![Captura de tela 2023-09-16 023236](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/11a4e81c-e93b-4dda-8f63-0fa1eeb7119a)


![Captura de tela 2023-09-16 023214 (2)](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/021154d5-04e3-45b1-a211-56f788120f45)

![Captura de tela 2023-09-16 023254 (2)](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/a6d0e84d-0b89-4bcf-b919-401b76ff930d)


## Demonstração

Insira um gif ou um link de alguma demonstração


## Uso/Exemplos

```javascript
 export default class List {
  todoItems;
  constructor() {
    this.todoItems = [];
  }

//--------------Funcão single responsability--------------
//--------------Feature Adição----------------------------
  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
    console.table("todoItem populando array", this.todoItems);
  }
//--------------Feature Remoção----------------------------
  removeTodoItem(todoItem) {
    this.todoItems = this.todoItems.filter((word) => word !== todoItem);
  }
//--------------Feature Listagem de tarefas----------------------------
  getTodoItems() {
    console.table("getTodoItems", this.todoItems);
    return this.todoItems;
  }
}

const listinha = new List();

listinha.addTodoItem("Banho e tosa");
listinha.addTodoItem("Arrumar bolsa da natação");
listinha.addTodoItem("Almoçar as 13:00");
listinha.addTodoItem("Tomar remédio");

listinha.getTodoItems();
//console.log -> getTodoItems ['Banho e tosa','Arrumar bolsa da natação','Almoçar as 13:00','Tomar remédio']

listinha.removeTodoItem("Banho e tosa");
//remover o item [ 'Arrumar bolsa da natação', 'Almoçar as 13:00', 'Tomar remédio' ]
````

```javascript
export class PomodoroTimer {
  constructor(workDuration, breakDuration) {
    this.workDuration = workDuration;
    this.breakDuration = breakDuration;
    this.interval = null;
    this.seconds = workDuration * 60;
    this.isPlaying = true;
    this.timerDisplay = document.getElementById("timer-display");
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.stop();
    this.seconds = this.isPlaying
      ? this.workDuration * 60
      : this.breakDuration * 60;
    this.updateDisplay();
  }

  tick() {
    if (this.seconds > 0) {
      this.seconds--;
      this.updateDisplay();
    } else {
      this.isPlaying = !this.isPlaying;
      this.seconds = this.isPlaying
        ? this.workDuration * 60
        : this.breakDuration * 60;
      this.updateDisplay();
    }
  }

  updateDisplay() {
    if (this.timerDisplay) {
      this.timerDisplay.textContent = `${
        this.isPlaying ? "Work" : "Break"
      } Time: ${this.formatTime(this.seconds)}`;
    }
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  }
}

const timer = new PomodoroTimer(25, 5); 
````
__________________________
```javascript
        📁 projeto-to-list
          |
          |-  📁 src
          |    |
          |    |- 📄 pomodoroTimer.js 
          |    |- 📄 index.js 
          |
          |
          |    |- 📁 __tests__
          |         |- 📄 pomodoroTimer.spec.js 
          |         |- 📄 todoList.spec.js 
          |
          |- 📄 jest.config.js
          |- 📄 .babelrc
          |- 📄 package-lock.json
          |- 📄 node_modules
          |- 📄 .gitignore
          |- 📄 package.json
          |
          |    |- 📄 pomodoro.html     
          |    |- 📄 index.html 
          |
          |
          📄 README.md  
````          
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Mariinoue/IJOn25-Projeto-Final
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


## Teste de cobertura

[Link Coverage](http://127.0.0.1:5500/projeto-to-do-list/coverage/lcov-report/index.html)
![Captura de tela 2023-09-15 234129](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/39b58bcb-1982-41a7-901e-83eb707950df)


## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

Esse projeto foi a consolidação de 10 semanas intensas de contato com boas práticas de código, fundamentos de POO e testes.

Desenvolvi o projeto a partir do tema de saúde mental do qual estou buscando entendimento.
Apliquei o conceito POO para criar classes List e Pomodoro.
Testes unitários para testar as funções e clean code - cuidanado de nomear variaveis, função com uma responsabilidade. Organização das pastas do projeto.
## Roadmap

- Adicionar mais features
- Criar telas
- Tracking de emoção
- Ansiedade
- Planner mensal
- Planner semanal


## 🛠 Habilidades
Javascript, HTML, CSS, React, Node, Typescript, Jest


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mariana-inoue/)



## Referência

 - [Blog sobre ADHD](https://www.theminiadhdcoach-brasil.com/post/sintomas-de-tdah-mais-comuns)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

