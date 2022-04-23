const numbers = document.querySelector("#numbers");
const result = document.querySelector("#result");

let a = Number(prompt("Type the first number"));
let b = Number(prompt("Type the second number"));
let c = Number(prompt("Type the third number"));

numbers.textContent = `The numbers are ${a}, ${b}, ${c}`;

// a > b > c -> 321
// a > c > b -> 312
// b > a > c -> 231
// b > c > a -> 132
// c > a > b -> 213
// c > b > a -> 123

if (a > b && b > c) {
  result.textContent = `${a} > ${b} > ${c}`;
} else if (a > c && c > b) {
  result.textContent = `${a} > ${c} > ${b}`;
} else if (b > a && a > c) {
  result.textContent = `${b} > ${a} > ${c}`;
} else if (b > c && c > a) {
  result.textContent = `${b} > ${c} > ${a}`;
} else if (c > a && a > b) {
  result.textContent = `${c} > ${a} > ${b}`;
} else {
  result.textContent = `${c} > ${b} > ${a}`;
}
