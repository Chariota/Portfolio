let leapYear = year => {
    if (year % 100 ===0) {
        return year % 400 ===0
    } 
    return year % 4 ===0;
}

let calDayFromBirthYear = (birthYear) => {
    let day = 0

    for(let i = birthYear; i<= 2023; i++){

        if (leapYear(i)){
            day += 366;
        } else {
            day += 365;
        }
    }
    return day;
}
console.log(calDayFromBirthYear(1997));


