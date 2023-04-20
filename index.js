
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
let currTime = new Date()
let currYear = currTime.getFullYear()
let currMonth = currTime.getMonth()
let currDay = currTime.getDate()



function dayErr(){
    if(dayEl.value <= 31){
        dayError.innerHTML = ""
     }else if (dayEl.value === ""){
        dayError.innerHTML = "This field cannot be blank"
        dayEl.style.borderColor = "red";
        dayLab.style.color = "red";
     }else  {
       dayError.innerHTML = "Must be a valid day"
       dayEl.style.borderColor = "red";
       dayLab.style.color = "red";
     }
}

function monthErr(){
    if (monthEl.value <= 12){
        monthError.innerHTML = ""
    }else if(monthEl.value === ""){
        monthError.innerHTML = "This field cannot be blank"
        monthEl.style.borderColor = "red";
        monthLab.style.color = "red";
    }else{
        monthError.innerHTML = "Must be a valid month"
        monthEl.style.borderColor = "red";
        monthLab.style.color = "red";
    }
}

function yearErr(){
    if (yearEl.value <= currentYear){
        yearError.innerHTML = ""
    }else if (yearEl.value === ""){
        yearError.innerHTML = "This field cannot be empty"
        yearEl.style.borderColor = "red";
        yearLab.style.color = "red";
    }
    else {
        yearError.innerHTML = "Must be in the past"
        yearEl.style.borderColor = "red";
        yearLab.style.color = "red";

    }
}
 