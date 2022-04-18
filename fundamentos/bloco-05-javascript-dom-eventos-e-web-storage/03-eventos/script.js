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

// Exercício 1
function addDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let day of dezDaysList) {
    let element = document.createElement('li');
    element.innerHTML = day;
    document.getElementById('days').appendChild(element);
  }
}

addDays();

// Exercício 2
function createButton(feriados) {
  let btn = document.createElement('button');
  btn.id = 'btn-holiday';
  btn.innerHTML = feriados;
  document.getElementsByClassName('buttons-container')[0].appendChild(btn);
}
createButton("Feriados");

// Exercício 3
let holidayBtn = document.getElementById('btn-holiday');
holidayBtn.addEventListener('click', onClickHolidays);
let btnClicked = false;
function onClickHolidays() {
  let holidays = document.getElementsByClassName('holiday');
  for (let holiday of holidays) {
    let newColor;
    btnClicked ? newColor = 'green' : newColor = 'rgb(238,238,238)';
    holiday.style.backgroundColor = newColor;
    holiday.style.backgroundColor = newColor;
}
  btnClicked = !btnClicked;
}

// Exercício 4
function uselessFuction(string) {
  let btn = document.createElement('button');
  btn.innerHTML = string;
  btn.id = 'btn-friday';
  document.getElementsByClassName('buttons-container')[0].appendChild(btn);
}

uselessFuction('Sexta-feira');