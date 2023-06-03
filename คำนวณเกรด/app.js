let name = prompt("โย่วๆ ชื่อไรอ่ะเรา")
    document.getElementById("name").innerHTML = (`คุณ ${name}`)
let score = prompt("อ่ะ ได้คะแนนเท่าไหร่อ่ะ")
if (score >= 80) {
    document.getElementById("grade").innerHTML = "A"
} else if (score >= 70) {
    document.getElementById("grade").innerHTML = "B"
} else if (score >= 60) {
    document.getElementById("grade").innerHTML = "C"
} else if (score >= 50) {
    document.getElementById("grade").innerHTML = "D"
} else {
    document.getElementById("grade").innerHTML = "F"
}