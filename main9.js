const form = document.querySelector("form")
const submit = document.querySelector(".submit")
const input1 = document.getElementById("day")
const input2 = document.getElementById("month")
const input3 = document.getElementById("year")
const error1 = document.querySelector(".error1")
const error2 = document.querySelector(".error2")
const error3 = document.querySelector(".error3")
const error1a = document.querySelector(".error1a")
const error2a = document.querySelector(".error2a")
const error3a = document.querySelector(".error3a")
const numberday = document.getElementById("numday")
const numbermonth = document.getElementById("nummonth")
const numberyear = document.getElementById("numyear")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let input1Value = input1.value.trim()
    let input2Value = input2.value.trim()
    let input3Value = input3.value.trim()
    if (input1Value === "") {
        error1.classList.remove("hidden")
    } else if(input1Value > 30) {
        error1a.classList.remove("hidden")
    } else if (input1Value < 0) {
        error1a.classList.remove("hidden")
    } else {
        error1.classList.add("hidden")
        error1a.classList.add("hidden")
    }
    

    if (input2Value === "") {
        error2.classList.remove("hidden")
    } else if(input2Value > 12) {
        error2a.classList.remove("hidden")
    } else if (input2Value < 0) {
        error2a.classList.remove("hidden")
    } else {
        error2.classList.add("hidden")
        error2a.classList.add("hidden")
    }
    

    if (input3Value === "") {
        error3.classList.remove("hidden")
    } else if(input3Value > 2024) {
        error3a.classList.remove("hidden")
    } else if (input3Value < 0) {
        error3a.classList.remove("hidden")
    } else {
        error3.classList.add("hidden")
        error3a.classList.add("hidden")
    }




    if (input3Value) {
        let calcul1 = 2024 - input3Value
        numberyear.innerHTML = calcul1
    }
    if (input2Value) {
        let calcul2 = 12 - input2Value
        numbermonth.innerHTML = calcul2
    }
    if (input1Value) {
        let calcul3 = 30 - input1Value
        numberday.innerHTML = calcul3
    }
})