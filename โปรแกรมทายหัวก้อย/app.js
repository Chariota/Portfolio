let round = prompt("จะเล่นทั้งหมดกี่รอบ")
for (let i = 0; i < round; i++) {
    let ans = prompt("หัว หรือ ก้อย!")
    let random_ans = ""
    if(Math.floor(Math.random()*10) <= 4){
        //หัว
        random_ans = "หัว"
    } 
    else{
        //ก้อย
        random_ans = "ก้อย"
    }

    if(ans == random_ans) {
        alert("ยินดีด้วยคุณตอบถูก")
    } 
    else{
        alert("เสียใจด้วยคุณตอบผิด")
    }
    console.log(random_ans + ":" + ans)
    document.getElementById("game-list").innerHTML += ans + ":" + random_ans + "<br>" 
}
