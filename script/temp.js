let inputCelsius = document.querySelectorAll('input')[0]
let inputFahrenheit = document.querySelectorAll('input')[1]
let inputKelvin = document.querySelectorAll('input')[2]

let btnConvert = document.querySelector('button')

function convertFromCelsius() {
    if(inputCelsius.value){
        let celsius = parseFloat(inputCelsius.value)
        inputFahrenheit.value = (celsius * 9 / 5 + 32).toFixed(2)
        inputKelvin.value = (celsius + 273.15).toFixed(2)

    }
}

function convertFromFahrenheit() {
    if (inputFahrenheit.value) {

        let fahrenheit = parseFloat(inputFahrenheit.value)
        inputCelsius.value = ((fahrenheit - 32) * 5 / 9).toFixed(2)
        inputKelvin.value = (((fahrenheit - 32) * 5 / 9 ) + 273.15).toFixed(2)
        
    }
}

function convertFromKelvin() {
    if (inputKelvin.value) {

        let kelvin = parseFloat(inputKelvin.value)
        inputCelsius.value = (kelvin - 273.15).toFixed(2)
        inputFahrenheit.value = ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2)
        
    }
}

function convertAll() {
    if(inputCelsius.value !== ""){
      convertFromCelsius();  
    } else if (inputFahrenheit.value !== ""){
        convertFromFahrenheit();
    } else if(inputKelvin.value !== ""){
        convertFromKelvin();
    }
    
 
}



 btnConvert.addEventListener('click', convertAll)