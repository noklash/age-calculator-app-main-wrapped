
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





function run(){
    event.preventDefault()
    const dayEl = document.getElementById("day-el")
    const monthEl = document.getElementById("month-el")
    const yearEl = document.getElementById("year-el")

    function dayErr(){
        if(dayEl.value <= 31){
            dayError.innerHTML = ""
         }else if (dayEl.value === ""){
            dayError.innerHTML = "This field cannot be blank"
            dayEl.style.borderColor = "red";
            dayLab.style.color = "red";
            dayOutput.innerHTML += ""
         }else  {
           dayError.innerHTML = "Must be a valid day"
           dayEl.style.borderColor = "red";
           dayLab.style.color = "red";
           dayOutput.innerHTML += ""
         }
    }
    
    function monthErr(){
        if (monthEl.value <= 12){
            monthError.innerHTML = ""
        }else if(monthEl.value === ""){
            monthError.innerHTML = "This field cannot be blank"
            monthEl.style.borderColor = "red";
            monthLab.style.color = "red";
            monthOutput.innerHTML += ""
        }else{
            monthError.innerHTML = "Must be a valid month"
            monthEl.style.borderColor = "red";
            monthLab.style.color = "red";
            monthOutput.innerHTML += ""
        }
    }
    
    function yearErr(){
        if (yearEl.value <= currYear){
            yearError.innerHTML = ""
        }else if (yearEl.value === ""){
            yearError.innerHTML = "This field cannot be empty"
            yearEl.style.borderColor = "red";
            yearLab.style.color = "red";
            yearOutput.innerHTML += ""
        }
        else {
            yearError.innerHTML = "Must be in the past"
            yearEl.style.borderColor = "red";
            yearLab.style.color = "red";
            yearOutput.innerHTML += ""
    
        }
    }

    dayErr()
    monthErr()
    yearErr()
    if (dayEl.value === "" || monthEl.value === "" || yearEl.value === ""){
        dayErr()
        monthErr()
        yearErr()
    }else if(monthEl.value > 12 || yearEl.value > currYear || dayEl.value > 31 ){
        yearOutput.innerHTML = ""
        monthOutput.innerHTML = ""
        dayOutput.innerHTML = ""  
    }else if (dayEl.value === currDay && monthEl.value === currDay){
        yearOutput.innerHTML = currYear - yearEl.value;
        monthOutput.innerHTML = 0;
        dayOutput.innerHTML = 0;
        
    }else if (monthEl.value <= currMonth && dayEl.value <= currDay){
        yearOutput.innerHTML = currYear - yearEl.value;
        monthOutput.innerHTML = currMonth - monthEl.value + 1
        dayOutput.innerHTML = currDay - dayEl.value;
    }else if (monthEl.value > currMonth && dayEl.value > currDay){
        yearOutput.innerHTML = currYear - yearEl.value - 1 
        monthOutput.innerHTML = 12 - monthEl.value + currMonth 
        dayOutput.innerHTML = dayEl.value - currDay
    }else if (monthEl.value > currMonth && dayEl.value < currDay){
        yearOutput.innerHTML = currYear - yearEl.value -1
        monthOutput.innerHTML = 12 - monthEl.value + currMonth + 1
        dayOutput.innerHTML = currDay - dayEl.value
    }else if (monthEl.value < currMonth && dayEl.value > currDay){
        yearOutput.innerHTML = currYear - yearEl.value
        monthOutput.innerHTML = currMonth - monthEl.value 
        dayOutput.innerHTML = dayEl.value - currDay
    }
}
 