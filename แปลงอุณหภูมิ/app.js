let toCelsius = (fahrenheit) => {
    let value = (fahrenheit -32) *5 /9
    return value.toFixed(2) + "°C"
}

let display = (elementId, value) => {
    document.getElementById(elementId).innerHTML = "<b>" + value + "</b>";
}

let toFaharenheit = (celsius)=> {
    let value = (celsius * 9) /5+32 
    return value.toFixed(2) + "°F"
}

let toCelsiusProgram = (value) => {
    alert(toCelsius(value))
}
let toFaharenheitProgram = (value) => {
    alert(toFaharenheit(value))
}
