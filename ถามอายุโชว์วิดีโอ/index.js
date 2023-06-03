let age = prompt("กรุณากรอกอายุของท่าน")
if (age >= 18) {
    //หาก Link มี "" ให้ใส่ \ ไว้ข้างหน้า " ทุกอันยกเว้นอันแรกกับอันสุดท้าย
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/PGZ7QiKdumo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
}