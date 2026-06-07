const numbers = [1, 3, 8, 7, 9, 10, 11];
let firstEven = null;

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
        firstEven = num;
        break;
    }
}
console.log(`So chan dau tien: ${firstEven}`);
