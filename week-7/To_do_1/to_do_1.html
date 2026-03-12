<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Yash To-Do List</title>

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<style>

/* ===== GLOBAL ===== */

:root{
    --primary:#3b82f6;
    --sidebar:#364152;
    --bg:#f5f5f7;
}

body{
    margin:0;
    font-family:Segoe UI, sans-serif;
    background:var(--bg);
    display:flex;
    height:100vh;
}

/* ===== SIDEBAR ===== */

.sidebar{
    width:220px;
    background:var(--sidebar);
    color:white;
    padding:25px;
}

.logo{
    font-size:22px;
    font-weight:bold;
    color:var(--primary);
    margin-bottom:25px;
}

.nav-item{
    padding:10px;
    border-radius:6px;
    cursor:pointer;
    opacity:.7;
    margin-bottom:5px;
}

.nav-item.active{
    background:rgba(255,255,255,0.1);
    opacity:1;
}

/* ===== MAIN CONTENT ===== */

.main{
    flex:1;
    padding:30px;
    overflow-y:auto;
}

.input-box{
    display:flex;
    gap:10px;
    background:white;
    padding:15px;
    border-radius:10px;
    margin-bottom:20px;
}

input,select{
    padding:8px;
    border:1px solid #ddd;
    border-radius:6px;
}

input{
    flex:1;
}

button{
    background:var(--primary);
    border:none;
    color:white;
    padding:8px 16px;
    border-radius:6px;
    cursor:pointer;
}

/* ===== TASKS ===== */

.task-list{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
    gap:15px;
}

.task{
    background:white;
    padding:15px;
    border-radius:10px;
    border-left:5px solid #ccc;
    position:relative;
}

.task.High{border-left-color:#ef4444;}
.task.Medium{border-left-color:#f59e0b;}
.task.Low{border-left-color:#10b981;}

.task.completed{
    opacity:.5;
}

.task.completed h3{
    text-decoration:line-through;
}

.delete{
    position:absolute;
    top:10px;
    right:10px;
    border:none;
    background:none;
    cursor:pointer;
}

/* ===== RIGHT PANEL ===== */

.right{
    width:300px;
    background:white;
    padding:25px;
    border-left:1px solid #ddd;
}

.calendar-head{
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
    font-weight:bold;
}

.calendar{
    display:grid;
    grid-template-columns:repeat(7,1fr);
    text-align:center;
    gap:4px;
    font-size:13px;
}

.day-name{
    font-weight:bold;
    color:#777;
}

.day{
    padding:6px;
    border-radius:4px;
    cursor:pointer;
}

.day:hover{
    background:#eee;
}

.today{
    background:var(--primary);
    color:white;
}

.stat{
    margin-top:20px;
    background:#f9fafb;
    padding:15px;
    text-align:center;
    border-radius:10px;
}

</style>
</head>

<body>

<!-- ===== SIDEBAR ===== -->

<div class="sidebar">

<div class="logo">Yash To-Do List</div>

<div class="nav-item active">
<i class="fa-solid fa-house"></i> My Day
</div>

<div class="nav-item">
<i class="fa-solid fa-calendar"></i> Planned
</div>

</div>

<!-- ===== MAIN ===== -->

<div class="main">

<h2>My Tasks</h2>

<div class="input-box">

<input id="taskInput" type="text" placeholder="New task">

<select id="prioInput">
<option value="High">High</option>
<option value="Medium" selected>Medium</option>
<option value="Low">Low</option>
</select>

<button onclick="addTask()">Add</button>

</div>

<div class="task-list" id="tasks"></div>

</div>

<!-- ===== RIGHT PANEL ===== -->

<div class="right">

<div class="calendar-head">
<button onclick="changeMonth(-1)"><</button>
<span id="monthYear"></span>
<button onclick="changeMonth(1)">></button>
</div>

<div class="calendar" id="calendar"></div>

<div class="stat">
<h2 id="count">0</h2>
<p>Tasks Active</p>
</div>

</div>

<script>

/* ===== TASK SYSTEM ===== */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let curr = new Date();

function addTask(){

let text = document.getElementById("taskInput").value;

if(!text) return;

tasks.push({
id: Date.now(),
text: text,
prio: document.getElementById("prioInput").value,
done: false
});

document.getElementById("taskInput").value = "";

render();
}

function toggle(id){

tasks = tasks.map(t =>
t.id === id ? {...t, done: !t.done} : t
);

render();
}

function del(id){

tasks = tasks.filter(t => t.id !== id);

render();
}

function render(){

localStorage.setItem("tasks", JSON.stringify(tasks));

let box = document.getElementById("tasks");

box.innerHTML = "";

tasks.forEach(t => {

let card = document.createElement("div");

card.className = `task ${t.prio} ${t.done ? 'completed' : ''}`;

card.innerHTML = `
<input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggle(${t.id})">
<h3>${t.text}</h3>
<button class="delete" onclick="del(${t.id})">
<i class="fa-solid fa-trash"></i>
</button>
`;

box.appendChild(card);

});

document.getElementById("count").innerText = tasks.length;

}

/* ===== CALENDAR ===== */

function renderCalendar(){

let grid = document.getElementById("calendar");

grid.innerHTML = "";

let y = curr.getFullYear();
let m = curr.getMonth();

document.getElementById("monthYear").innerText =
curr.toLocaleString("default",{month:"long",year:"numeric"});

let days = ["Su","Mo","Tu","We","Th","Fr","Sa"];

days.forEach(d=>{
grid.innerHTML += `<div class="day-name">${d}</div>`;
});

let first = new Date(y,m,1).getDay();
let last = new Date(y,m+1,0).getDate();

for(let i=0;i<first;i++){
grid.innerHTML += "<div></div>";
}

for(let d=1; d<=last; d++){

let today =
d === new Date().getDate() &&
m === new Date().getMonth() &&
y === new Date().getFullYear();

grid.innerHTML += `<div class="day ${today?'today':''}">${d}</div>`;

}

}

function changeMonth(v){

curr.setMonth(curr.getMonth()+v);

renderCalendar();

}

render();
renderCalendar();

</script>

</body>
</html>
