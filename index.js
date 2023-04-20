
const dayEl = document.getElementById("day-el")
const monthEl = document.getElementById("month-el")
const yearEl = document.getElementById("year-el")
const yearOutput = document.getElementById("year-output")
const monthOutput = document.getElementById("month-output")
const dayOutput = document.getElementById("day-output")
const dayError = document.getElementById("day-error")
const monthError = document.getElementById("month-error")
const yearError = document.getElementById("year-error")
const error = document.getElementsByClassName("error")
const dayLab = document.getElementById("day-lab")
const monthLab = document.getElementById("month-lab")
const yearLab = document.getElementById("year-lab")
let currentTime = new Date()
let currentYear = currentTime.getFullYear()



function day(){
    if(dayEl.value <= 31){
        dayError.innerHTML = ""
     }else  {
       dayError.innerHTML = "Must be a valid day"
       dayEl.style.borderColor = "red";
       dayLab.style.color = "red";
     }
}

function month(){
    if (monthEl.value <= 12){
        monthError.innerHTML = ""
    }else{
        monthError.innerHTML = "Must be a valid month"
        monthEl.style.borderColor = "red";
        monthLab.style.color = "red";
    }
}

function year(){
    if (yearEl.value <= currentYear){
        yearError.innerHTML = ""
    }else {
        yearError.innerHTML = "Must be in the past"
        yearEl.style.borderColor = "red";
        yearLab.style.color = "red";

    }
}
 