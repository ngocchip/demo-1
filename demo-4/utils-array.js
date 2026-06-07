let arr = [1, 2, 3, 4];
// Thêm phần tử cuối
arr.push(5);
console.log(arr);

// Thêm phần tử đầu
arr.unshift(0);
console.log(arr);

// Thên phần tử vào giữa
arr.splice(2, 0, 1.5)
console.log(arr);

// Xóa ở cuối
arr.pop();
console.log(arr);

// Xóa ở đầu
arr.shift();
console.log(arr);

//Xóa ở vị trí bất kỳ
arr.splice(1, 1);
console.log(arr);

// Tìm kiếm phần tử đầu tiên hợp lệ
const number = [5, 12, 8, 130];
let first = number.find(num => num > 10);
console.log(first);

// Tìm kiếm tất cả phần tử hợp lệ
let all = number.filter(num => num > 10);
console.log(all);


// Nhân mỗi phần tử với 2
const numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num*2);
console.log(doubled);


// Sắp xếp tăng dần
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Sắp xếp giảm dần
numbers.sort((a, b) => b - a);
console.log(numbers);
