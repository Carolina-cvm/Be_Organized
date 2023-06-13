// DATE
date = new Date().toLocaleDateString();
document.getElementById("current_date").innerHTML = date;

// TIME
const h = new Date();
let hour = h.getHours();

const m = new Date();
let minutes = m.getMinutes();

const s = new Date();
let seconds = s.getSeconds(); 

document.getElementById("current_time").innerHTML = hour + ":" + minutes + ":" + seconds;