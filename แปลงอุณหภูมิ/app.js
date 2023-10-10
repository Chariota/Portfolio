let toCelsius = () => {
    let fahrenheit = prompt("Fahrenheit : ")
    let value = (fahrenheit -32) *5 /9
    document.getElementById("result1").innerHTML = value.toFixed(2) + "°C"
}

let toFaharenheit = ()=> {
    let celsius = prompt("Celsius : ")
    let value2 = (celsius * 1.8) +32 
    document.getElementById("result2").innerHTML = value2.toFixed(2) + "°F"
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