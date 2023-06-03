let round = prompt("จะเล่นทั้งหมดกี่รอบ")
for (let i = 0; i < round; i++) {
    let ans = prompt("หัว หรือ ก้อยจ๊ะ!")
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
        alert("ว้าว ถูกด้วย เก่งจัง")
    } 
    else{
        alert("ว้ายย ผิดน้า ผิดจ้า")
    }
    console.log(random_ans + ":" + ans)
    document.getElementById("game-list").innerHTML += ans + ":" + random_ans + "<br>" 
}