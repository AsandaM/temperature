let input = document.querySelectorAll('input')[0]
let input1 = document.querySelectorAll('input')[1]
let input2 = document.querySelectorAll('input')[2]

let btn = document.querySelector('button')

function d() {
    if(input.value){
        input1.value = eval(`${(input.value)}* 9 / 5 + ${32}`)
        input2.value = eval(`${(input.value)} + ${273.15}`)

    }
}

function f() {
    if (input1.value) {
        input.value = ((input1.value - 32) * 5) / 9
        input2.value = eval(`${(input1.value - 32)} * 5 / 9 + ${273.15}`)
        
    }
}

function k() {
    if (input2.value) {
        input.value = eval(`${(input2.value - 273.15)} * 9 /5 + ${32}`)
        input1.value = eval(`${(input2.value )} - ${273.15}`)
        
    }
}

function convertAll() {
    if(input.value !="") d();
    if(input1.value!="")f();
    if(input2.value!="")k();
 
}

 btn.addEventListener('click', convertAll)