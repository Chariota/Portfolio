//leap year หาร 4 ลงตัว
//leap year ผลคูณของ 100 && หารด้วย 400 ลงตัวด้วย (ซับซ้อนกว่า)

let leapYear = year => {
    if (year % 100 === 0) {

        /* เขียนแบบ if-else
        if(year % 400 === 0) {
            return true
        }else {
            return false
        }
        */

        /*return year % 400 === 0 ? true : false*/
        
        return year % 400 === 0
    }

    /*if(year % 4 ===0) {
        return true
    } else {
        return false
    }*/

    return year % 4 === 0;
}

console.log(leapYear(200))
console.log(leapYear(1600))
console.log(leapYear(32))
