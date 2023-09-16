# Olá, eu sou a Mari Inoue! 👩🏽


## 🚀 Sobre mim

Fui aluna da Reprograma - ON12 - Back-End. 

Foi assim que comecei minha jornada como DEV 💜

Hoje trabalho com densevolvimento web na área de Logística - Front End.

Fiz transição de carrerira, eu era estilista de moda 🤩 hoje sou uma Deva. 

Gosto muito da area de tech do que eu escolhi para mim. 

------------------------------
# Projeto - Gerenciamento de tarefas para pessoas com TDAH

TDAH & Tempo
Você luta com o tempo? Eu sim 🙋‍♀️ ! Quando estou fazendo algo apaixonante (como desenhar estes posts☺️) geralmente perco totalmente a noção de tempo! Aparentemente é bastante comum para pessoas com TDAH passarem por essa experiência de “cegueira temporal” ⏰ Utilizar ferramentas visuais como os calendários visuais, planejadores ou cronogramas reversos realmente me ajudaram.

-------------------------------
ODS

![Captura de tela 2023-09-16 100513](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/bbcd1da0-f2d5-4245-84d0-c6d8e36fee61)

---
## Tema
![Captura de tela 2023-09-16 023236](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/11a4e81c-e93b-4dda-8f63-0fa1eeb7119a)



![Captura de tela 2023-09-16 090651 (1)](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/4c7d05c2-cd36-45f1-b5cd-439d9acde4c9)
#### HEY tem a parte boa também!
![Captura de tela 2023-09-16 090704 (2)](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/79307f5f-3e84-4eac-89c5-6d5f4143c31b)
----------

#### O TDAH e as realizações de tarefas
- Dificuldade em se concentrar e se organizar.
- Desafios para gerenciar suas tarefas diárias
- Dificuldade em completar projetos e trabalhos de forma eficiente.
  
![Captura de tela 2023-09-16 023214 (2)](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/021154d5-04e3-45b1-a211-56f788120f45)

### Solução
- Nesse sentido, o gerenciamento de tarefas pode ser uma ferramenta valiosa para ajudar as pessoas com TDAH.
- Pode gerenciar suas atividades diárias e manter-se organizadas.
- Melhorar foco e eficiência
  
#### Produto
- Criar Todo List e Pomodoro Timer


![Captura de tela 2023-09-16 023254 (2)](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/a6d0e84d-0b89-4bcf-b919-401b76ff930d)


Tecnologias:

|Ferramenta |	Descrição |
|-|-|
| javascript |Linguagem de programação utilizada
|jest	| Testes unitários
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

## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

Esse projeto foi a consolidação de 10 semanas de imersão
- Fundamentos de POO
- Testes unitários
- Clean code - nome variaveis, função com uma responsabilidade
- Organização das pastas do projeto.

## Mão no Código

```javascript
//------------- Classe List -----------------------------
 export default class List {
  todoItems;
  constructor() {
    this.todoItems = [];
  }

//--------------clean code Nomes descritivos -------------
//--------------Funcão single responsability--------------
//--------------Feature Adição----------------------------
  addTodoItem(todoItem) {
    this.todoItems.push(todoItem);
  }
//--------------Feature Remoção----------------------------
  removeTodoItem(todoItem) {
    this.todoItems = this.todoItems.filter((word) => word !== todoItem);
  }
//--------------Feature Listagem de tarefas----------------------------
  getTodoItems() {
    return this.todoItems;
  }
}

const listinha = new List();

//------ Instâncias -------

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
    workDuration;
    breakDuration;
    interval;
    seconds;
    isPlaying;
    timerDisplay;
  constructor(workDuration, breakDuration) {
    this.workDuration = workDuration;
    this.breakDuration = breakDuration;
    this.interval = null;
    this.seconds = workDuration * 60;
    this.isPlaying = true;
    this.timerDisplay = document.getElementById("timer-display");
  }

//--------------clean code Nomes descritivos -------------
//--------------Funcão single responsability--------------
//--------------Feature Iniciar----------------------------
  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }

//--------------Feature Parar Tempo -------------------------
  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

//--------------Feature Resetar----------------------------
  reset() {
    this.stop();
    this.seconds = this.isPlaying
      ? this.workDuration * 60
      : this.breakDuration * 60;
    this.updateDisplay();
  }

//--------------Feature conta segundos----------------------------
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

//--------------Feature Atuliza o display----------------------------
  updateDisplay() {
    if (this.timerDisplay) {
      this.timerDisplay.textContent = `${
        this.isPlaying ? "Work" : "Break"
      } Time: ${this.formatTime(this.seconds)}`;
    }
  }

//--------------Feature formatar tempo ----------------------------
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

## Demonstração

![Compartilhamento-de-tela-2023-09-16-9h39min34s-_1_-_1_](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/3b929388-e87d-4081-887a-37381dcf656b)
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

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


## Teste de cobertura
-  Testei as funções Pomodoro Timer, o iniciar, parar e resetar.
-  Testei as funções do Todo List, o adicionar tarefas, listar as tarefas e remover tarefas.
  
[Link Coverage](http://127.0.0.1:5500/projeto-to-do-list/coverage/lcov-report/index.html)
![Captura de tela 2023-09-15 234129](https://github.com/Mariinoue/IJOn25-Projeto-Final/assets/82849390/39b58bcb-1982-41a7-901e-83eb707950df)

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

