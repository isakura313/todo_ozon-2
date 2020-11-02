import ItemDeal from "./ItemDeal";

const field: HTMLInputElement = <HTMLInputElement>(document.querySelector(".input"));
const select: HTMLSelectElement = <HTMLSelectElement>(document.querySelector("select"));
const date_picker: HTMLInputElement = <HTMLInputElement>(document.getElementById("date_picker"));
const button_plus: HTMLButtonElement = <HTMLButtonElement>(document.querySelector(".button_plus"));
const deals: HTMLDivElement = <HTMLDivElement>(document.querySelector("#deals"));

const important_color: string[] = [
    "has-background-danger has-text-white is-size-3",
    "has-background-warning has-text-black is-size-3",
    "has-background-link has-text-white is-size-3"
] // массив prioritet - насколько важными, неважными могу быть дела

/*
 Функция добавления дела, которая вызывает функцию отрисовки
 и добавляет дело в localStorage
 и не забывает обнулять значения в field
 */

function addTask() {

    let content: string = field.value;
    if (content === "" && date_picker.value === "") {
        alert("Вы что-то забыли заполнить");
        return;
    }
    let todo: ItemDeal = new ItemDeal(Number(select.value), content, date_picker.value)
    const todo_to_JSON = JSON.stringify(todo)
    localStorage.setItem(String(+todo.dt), todo_to_JSON)
    GenerateDom(todo);
    field.value = ""

}

// назначение листенеров на нашу кнопку button_plus
button_plus.onclick = addTask;
document.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        addTask();
    }
})

function drawOnLoad() {
    for (let i = 0; i < localStorage.length; i++) {
        let lk_key = localStorage.key(i);
        let content = localStorage.getItem(lk_key);
        let todo: ItemDeal = JSON.parse(content);
        GenerateDom(todo);
    }
}

drawOnLoad()
//самовызывающаяся функция, приложения, которая
// пишет дела, когда оно включается

function GenerateDom(obj: ItemDeal) {
    let {priority, text, dt, dl} = obj; // здесь у нас происходит деструктурализация
    deals.insertAdjacentHTML("afterbegin", `
            <div class="wrap_task ${important_color[priority-1]}" id="${dt}">
                <p class="todo_text"> ${text} </p>
                    <p>${new Date(dt).getDate()}/${new Date(dt).getMonth()} / ${dl} </p>
                  <i class="material-icons pen"> edit</i>
                <i class="material-icons del"> delete_outline </i>
            </div>
    `);
    deleteItem();

}

//обработчики удаления дела
// при клике на значок thrash, у нас удаляется родитель этого значка
// операции в DOM именно удаление это дорого по ресурсам
//поэтому делаем его невидимым и удаляем из localStorage
deleteItem();
function deleteItem() {
    let delete_icons: HTMLCollection = <HTMLCollection>(document.getElementsByClassName("del"));
    // @ts-ignore
    let delete_arr:HTMLElement[] = Array.from(delete_icons);

    delete_arr.map((el:HTMLElement)=>{
        el.onclick = () =>{
            const wrap_task: HTMLDivElement = <HTMLDivElement>(el.parentNode);
            wrap_task.style.display = "none";
            localStorage.removeItem(wrap_task.id);
        }
    })
}
deals.addEventListener("click", (e)=>{
    console.log(e.target);
    let pen:HTMLElement = <HTMLElement>(e.target);
    let wrap_task:HTMLDivElement = <HTMLDivElement>(pen.parentNode);
    let todo_text:HTMLParagraphElement = <HTMLParagraphElement>(wrap_task.querySelector(".todo_text"));
    todo_text.contentEditable = "true";
})

//обработчики редактирования дела
