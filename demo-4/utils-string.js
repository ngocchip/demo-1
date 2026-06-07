// Bỏ khoảng trắng
let text = "   Hello World!   ";
console.log(text.trim()); // "Hello World!"
console.log(text.trimStart()); // "Hello World!   "
console.log(text.trimEnd()); // "   Hello World!"


// Chuyển đổi chữ hoa và chữ thường
let str = "JavaScript";
console.log(str.toLocaleLowerCase()); // "javascript"
console.log(str.toLocaleUpperCase()); // "JAVASCRIPT"


// Kiểm tra sự tồn tại của chuỗi con
let text = "   Hello World!   ";
console.log(text.includes("World")); // true
console.log(text.includes("world")); // false


// Tách chuỗi thành mảng
let text = "Hello World!";
console.log(text.split(" ")); // ["Hello", "World!"]

let email = "user@example.com";
console.log(email.split("@")); // ["user", "example.com"]


// Thay thế chuỗi con
let text = "Hello World!";
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript!"

