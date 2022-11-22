let number = +prompt("Summani kiriting.");
console.log(number);

//ticket $350 =>350*11250  = 3 937 500
//living $680 =>680*11250  = 7 650 000
//tour => c| 230=>230*12864= 2 958 720
// min=3 || max=30

let ticket = 350 * 11250;
let living = 680 * 11250;
let tour = 230 * 12864;

let all = 2 * ticket + living + tour;
console.log("Total:" + all);

let few = all - number;
console.log("Yetmayotgan summa:" + few);

let day = Math.floor(Math.random() * (30 + 1) + 1);
console.log(day);

if (number >= all) {
  alert("Sayohatingiz yaxshi o'tsin!");
} else if (number === 0) {
  alert("Iltimos summa kiritng!");
} else if (number < all) {
  alert(
    `Kechirasiz kiritgan summangiz yetarli emas. Sizga yana minimal ${few} so'm kerak. Iltimos ${day} kundan keyin keling!`
  );
} else alert("Iltimos summa kiriting!");
