for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Bỏ qua các số chẵn
    }
    console.log(i); // Chỉ in ra các số lẻ
}

const scores = [85, 92, 78, 90, 88];
console.log("Điểm >= 80:");

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    if (score < 80) {
        continue; // Bỏ qua các điểm dưới 80
    }
    console.log(score); // Chỉ in ra các điểm >= 80
}