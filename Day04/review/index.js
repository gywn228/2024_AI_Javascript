// 1. [10,20,30,40,50]을 30 이하면 100 더하기, 아니면 200 더하기
const arr = [10, 20, 30, 40, 50];

const add = arr.map((x) => {
  return x <= 30 ? x + 100 : x + 200;
});
console.log(add);

// 2. ["americano","latte","vanilla","mocha","mint","tea"]
//  -1. 5글자 이하이면 대문자화, 아니면 '☕'로 바꾸기
const arr1 = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];

const leng = arr1.map((x) => {
  return x.length <= 5 ? x.toUpperCase() : "☕";
});
console.log(leng);

const add1 = (x, y) => x + y;
const sub = (x, y) => x - y;

const mul = (x, y) => {
  const a = "123";
  return x * y;
};
