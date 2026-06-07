// for...in Loop
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (const key in person) {
    console.log(key);
}

// forEach (không thể dùng với break hoặc continue)
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value) {
    console.log(value);
});
