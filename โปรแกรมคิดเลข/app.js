let qrt = +prompt("จำนวนสินค้า")
let sum = 0
//จำนวนรอบของการกดเครื่องคิดเลข ก็คือตามจำนวนสินค้า
// += คือเพิ่มข้อมูลต่อกันไปเรื่อยๆ คล้ายกับ + ของ string
// i คือจำนวนรอบที่จะใช้งาน
for(let i = 0; i < qrt; i++) {
    let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
    // sum คือ 0 บวกราคาที่กรอกเข้ามาและวนซ้ำไปเรื่อยๆจนครบ จากนั้นค่าทั้งหมดจะไปเก็บไว้ที่ sum
    /*parseFloat - แปลงร่างเป็นเลขจำนวนทศนิยม
    parseInt - แปลงร่างเป็นเลขจำนวนเต็ม
    */
    sum = sum + parseFloat(item_price)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่" + i + ":" +item_price + "บาท" + "<br>"
}
document.getElementById("result").innerHTML = "ราคารวทั้งหมด " + sum + "บาท"