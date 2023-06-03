เขียนฟังก์ชัน truncate(str, length) เพื่อตัดข้อความ ถ้าหากยาวกว่ากำหนด ให้ตัดข้อความที่เกินกำหนดออกแล้วต่อท้ายด้วย ...
ถ้าข้อความสั้นกว่าความยาวที่กำหนด return เป็นข้อความเดิม

ตัวอย่าง
```js
truncate("WHat I'd like to tell on this topic is:", 20); // "What I'd like to te..."
truncate("Hi everyone!", 20); // "Hi everyone!"
```