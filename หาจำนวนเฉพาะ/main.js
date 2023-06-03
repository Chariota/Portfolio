//Every Number can divide be 1 and it self

//จำนวนเฉพาะ คือ จำนวนที่หารลงตัวแค่ 1 กับตัวมันเอง

//Control ตัวเศษ

for(let i = 2; i <= 100; i++) {

    let isPrime = true
    //COntrol ตัวส่วน

    //Math.sqrt() คือ sqaure root
    for(let j=2; j<i; j++) {
    //for(let j =2; j < Math.sqrt(i); j++){
        //check หารลงตัว
        if(i%j===0) {
            isPrime = false
            break
        }
    }
    if(isPrime){
        console.log(i)
    }
}