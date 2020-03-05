window.onload = function (){

}

let form = document.getElementById("form");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let btnClr = document.getElementById("btnClr");
let id = 1;

let liItem = "";
let todoList = [];

btn.addEventListener("click", addTodoItem);

//list event listener
list.addEventListener("click", boxChecked);

//event listener for clear list
btnClr.addEventListener("click", clearList);

if (localStorage.length <= 0) {
    btnClr.style.display = "none"; //hide clean btn
    console.log("button");
}

//checking localstorage has data
if (localStorage.length > 0) {
    displayList();
}