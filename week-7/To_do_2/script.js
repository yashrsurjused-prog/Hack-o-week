// REGISTER
function register(){

let user=document.getElementById("regUser").value;
let pass=document.getElementById("regPass").value;

if(user=="" || pass==""){
alert("Fill all fields");
return;
}

localStorage.setItem("user",user);
localStorage.setItem("pass",pass);

alert("Registration successful");
window.location="login.html";
}

// LOGIN
function login(){

let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;

let savedUser=localStorage.getItem("user");
let savedPass=localStorage.getItem("pass");

if(user===savedUser && pass===savedPass){
window.location="index.html";
}
else{
alert("Invalid login");
}
}

// LOGOUT
function logout(){
window.location="login.html";
}

// TASK SYSTEM
let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function updateCounter(){

let completed=tasks.filter(t=>t.completed).length;

let counter=document.getElementById("taskCounter");

if(counter){
counter.innerText=completed+" / "+tasks.length+" Completed";
}
}

function renderTasks(){

const list=document.getElementById("taskList");

if(!list) return;

list.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

let span=document.createElement("span");
span.innerText=task.text;

if(task.completed){
span.classList.add("completed");
}

let actions=document.createElement("div");
actions.className="actions";

let completeBtn=document.createElement("button");
completeBtn.innerText="✔️";

completeBtn.onclick=function(){
tasks[index].completed=!tasks[index].completed;
saveTasks();
renderTasks();
};

let deleteBtn=document.createElement("button");
deleteBtn.innerText="❌";

deleteBtn.onclick=function(){
tasks.splice(index,1);
saveTasks();
renderTasks();
};

actions.appendChild(completeBtn);
actions.appendChild(deleteBtn);

li.appendChild(span);
li.appendChild(actions);

list.appendChild(li);

});

updateCounter();
}

function addTask(){

let input=document.getElementById("taskInput");

if(!input) return;

let text=input.value.trim();

if(text==="") return;

tasks.push({
text:text,
completed:false
});

input.value="";

saveTasks();
renderTasks();
}

renderTasks();