// Function expression
const hello = function(name) {
    return `Hello ${name}`;
}
console.log(hello("Ngoc"));

// Arrow function
const giaTri = (price, quantity, discount) => {
    return price * quantity - discount;
}
console.log(giaTri(2, 5, 1));
