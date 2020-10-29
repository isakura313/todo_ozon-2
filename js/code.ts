import ItemDeal  from "./ItemDeal";

const field:HTMLInputElement = <HTMLInputElement>(document.querySelector(".input"));
const select: HTMLSelectElement = <HTMLSelectElement> (document.querySelector("select"));
const date_picker:HTMLInputElement = <HTMLInputElement>( document.getElementById("date_picker"));
const button_plus:HTMLButtonElement = <HTMLButtonElement>(document.querySelector(".button_plus"));
const deals: HTMLDivElement = <HTMLDivElement> (document.querySelector("#deals"));

const important_color:string[] = [
    "has-background-danger has-text-white is-size-3",
    "has-background-warning has-text-black is-size-3",
    "has-background-link has-text-white is-size-3"
] // массив prioritet - насколько важными, неважными могу быть дела

/*
 Функция добавления дела, которая вызывает функцию отрисовки
 и добавляет дело в localStorage
 и не забывает обнулять значения в field
 */

function addTask(){
    let content:string = field.value;
    if(content === "" && date_picker.value === ""){
        alert("Вы что-то забыли заполнить");
        return;
    }
    let todo:ItemDeal = new ItemDeal(Number(select.value), content, date_picker.value )
    const todo_to_JSON = JSON.stringify(todo)
    localStorage.setItem(String(+todo.dt), todo_to_JSON)
    field.value = ""

}
// назначение листенеров на нашу кнопку button_plus
button_plus.onclick = addTask;
document.addEventListener("keypress", (e)=>{
    if(e.code ==="Enter"){
        addTask();
    }
})

function drawOnLoad(){
    for(let i = 0; i< localStorage.length; i++){
        let lk_key = localStorage.key(i);
        let content = localStorage.getItem(lk_key);
        let todo:ItemDeal = JSON.parse(content);
        GenerateDom(todo);
    }
}
drawOnLoad()
//самовызывающаяся функция, приложения, которая
// пишет дела, когда оно включается

function GenerateDom(obj:ItemDeal){
    console.log(obj);
}

//обработчики удаления дела

//обработчики редактирования дела
