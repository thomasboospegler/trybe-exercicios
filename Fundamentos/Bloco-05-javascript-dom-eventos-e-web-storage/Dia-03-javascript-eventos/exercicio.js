function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
console.log(document.querySelector('body'));

//Exercicio 1
function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulListDays = document.querySelector('#days');
  // console.log(document.querySelector('#days'));
  for (index of dezDaysList) {
    let newListDay = ulListDays.appendChild(document.createElement('li'));
    newListDay.classList.add('day');
    newListDay.innerText = index;
    if (index === 24 || index === 25 || index === 31) {
      newListDay.classList.add('holiday');
    }
    if (index === 4 || index === 11 || index === 18 || index === 25) {
      newListDay.classList.add('friday');
    }
  }
}
createDaysOfMonth();

//Exercicio 2
function createButtonHolidays(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.innerHTML = buttonName;
  newButton.id = 'btn-holiday';
  buttonContainer.appendChild(newButton)
}
createButtonHolidays('Feriados');

//Exercicio 3
function buttonHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'yellow';
  getHolidayButton.addEventListener('click', function() {
    for (index of getHolidays) {
      if (index.style.backgroundColor === setNewColor) {
        index.style.backgroundColor = backgroundColor;
      } else {
        index.style.backgroundColor = setNewColor;
      }
    }
  })
}
buttonHolidays();

//Exercicio 4
function createButtonFridays(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.innerHTML = buttonName;
  newButton.id = 'btn-friday';
  buttonContainer.appendChild(newButton)
}
createButtonFridays('Sexta-feira');

//Exercicio 5
function buttonFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll('.friday');
  let newFridayText = 'Sextou';
  getFridayButton.addEventListener('click', function() {
    for (index in getFridays) {
      if (getFridays[index].innerText !== newFridayText) {
        getFridays[index].innerText = newFridayText;
      } else {
        getFridays[index].innerText = fridaysArray[index];
      }
    }
  })
}
let fridaysArray = [4, 11, 18, 25];
buttonFridays(fridaysArray);

//Exercicio 6
function mouseOverDay() {
  let getday = document.querySelector('#days');
  getday.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '25px';
    event.target.style.fontWeight = '800';
  })
}
function mouseOutDay() {
  let getday = document.querySelector('#days');
  getday.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}
mouseOverDay();
mouseOutDay();

//Exercicio 7
function createTasks(task) {
  let taskContainer = document.querySelector('.my-tasks');
  let createTask = document.createElement('span');
  createTask.innerText = task;
  taskContainer.appendChild(createTask);
}
createTasks('Projeto');

//Exercicio 8
function createDivTasks(color) {
  let taskContainer = document.querySelector('.my-tasks');
  let createTask = document.createElement('div');
  createTask.className = 'task';
  createTask.style.backgroundColor = color;
  taskContainer.appendChild(createTask);
}
createDivTasks('green');

//Exercicio 9
function classSelectedTaks() {
  let getTask = document.querySelector('.task');
  let selectedList = document.querySelectorAll('.task selected');
  getTask.addEventListener('click', function(event) {
    if (selectedList.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}
classSelectedTaks();

//Exercicio 10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}

setDayColor();

//Exercicio Bonus
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  })
}
addNewTask();