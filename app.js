// write code here
let a = undefined;
let b = 2;
let c = a++;

let d = String(a); // The Result is: "NaN"
let e = String(b); // The Result is: "2"
let f = String(c); // The Result is: "NaN"

console.log(`The value of 'd' is: ${d}, \nThe value of 'e' is: ${e}, \nThe value of 'f' is: ${f}`);

//=============== Explanation ===============
// - ผลลัพทธ์ของตัวแปร d เป็น String ข้อความคำว่า "์NaN" เพราะหลังจากที่มีการกำหนดค่าของตัวแปร a เป็น Undefined แล้ว ตอนประกาศใช้ตัวแปร c มีการทำ increment a++ ซึ่งก็คือการทำ Undefined++ ได้ผลลัพธ์เป็น NaN เมื่อแปลงเป็น String จึงเป็นข้อความคำว่า "NaN"

// - ผลลัพทธ์ของตัวแปร e เป็น String ข้อความคำว่า "2" เพราะตัวแปร b เก็บเลข 2 เอาไว้

// - ผลลัพทธ์ของตัวแปร f เป็น String ข้อความคำว่า "์NaN" เพราะค่าของตัวแปร c เป็น NaN ไม่สามารถหาค่าทาง Math ได้เนื่องจากค่าของตัวแปร a เป็น Undefined