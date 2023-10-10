let toCelsius = () => {
    let fahrenheit = prompt("Fahrenheit : ")
    let value = (fahrenheit -32) *5 /9
    document.getElementById("result").innerHTML = value.toFixed(2) + "°C"
}

let toFaharenheit = ()=> {
    let celsius = prompt("Celsius : ")
    let value = (celsius * 1.8) +32 
    document.getElementById("result").innerHTML = value.toFixed(2) + "°F"
}

let userChoice = () => {
    let choice = prompt("What You want to convert F to C Press \"F\" if C to F Press Anything")
    if(choice === "F"){
        document.getElementById("head").innerHTML = "Fahrenheit to Celsius"
        toCelsius()
    } else{
        document.getElementById("head").innerHTML = "Celsius to Fahrenheit"
        toFaharenheit()
    }
}
userChoice()
