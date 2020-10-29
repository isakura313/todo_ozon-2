import ItemDeal from "./ItemDeal";
var field = document.querySelector("input");
var select = document.querySelector("select");
var date_picker = document.getElementById("date_picker");
var button_plus = document.querySelector(".button_plus");
/*
 Функция добавления дела, которая вызывает функцию отрисовки
 и добавляет дело в localStorage
 и не забывает обнулять значения в field
 */
function addTask() {
    var content = field.value;
    if (content === "" && date_picker.value === "") {
        alert("Вы что-то забыли заполнить");
        return;
    }
    var todo = new ItemDeal(select.value, content, date_picker.value);
    var todo_to_JSON = JSON.stringify(todo);
    localStorage.setItem(String(+todo.dt), todo_to_JSON);
    field.value = "";
    //TODO добавить выбор дат
}
// назначение листенеров на нашу кнопку button_plus
//самовызывающаяся функция, приложения, которая
// пишет дела, когда оно включается
// универсальная, отдельаня функция отрисовка, которая вставляеь to_do в DOM
function GenerateDom() {
}
//обработчики удаления дела
//обработчики редактирования дела
