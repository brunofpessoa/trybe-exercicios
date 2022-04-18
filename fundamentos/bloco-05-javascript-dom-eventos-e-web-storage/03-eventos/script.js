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
document.getElementsByTagName('li')[20].className = 'holiday';
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
function fridayButton(string) {
    let btn = document.createElement('button');
    btn.innerHTML = string;
    btn.id = 'btn-friday';
    document.getElementsByClassName('buttons-container')[0].appendChild(btn);
}

fridayButton('Sexta-feira');

// Exercício 5
let fridays = ['4', '11', '18', '25'];
let days = document.getElementsByTagName('li');
for (let day of days) {
    if (fridays.includes(day.innerHTML)) {
        day.className = 'friday-day';
    }
}

function modifyFriday() {
    let fridayDays = document.getElementsByClassName('friday-day');
    for (let index = 0; index < fridayDays.length; index += 1) {
        if (fridayDays[index].innerHTML !== 'Sextou!') {
            fridayDays[index].innerHTML = 'Sextou!';
        } else {
            fridayDays[index].innerHTML = fridays[index];
        }
    }
}

document.getElementById('btn-friday').addEventListener('click', modifyFriday);

// Exercício 6
let allDays = document.getElementById('days');
allDays.addEventListener('mouseover', zoomIn);
allDays.addEventListener('mouseout', zoomOut);
function zoomIn(element) {
    element.target.style.fontSize = '30px';
}
function zoomOut(element) {
    element.target.style.fontSize = '20px';
}

// Exercício 7
function addTask(task) {
    let element = document.createElement('span');
    element.innerHTML = task;
    document.getElementsByClassName('my-tasks')[0].appendChild(element);
}
addTask('Projeto: ');

// Exercício 8
function label(color) {
    let newLable = document.createElement('div');
    newLable.className = 'task';
    newLable.style.backgroundColor = color;
    document.getElementsByClassName('my-tasks')[0].appendChild(newLable);
}
label('blue');