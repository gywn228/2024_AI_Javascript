// 1. [1,2,3,4,5] -> 두배 해주기
// 2. [1,2,3,4,5] -> 홀수면 두배 짝수면 세배
// 3. [1,2,3,4,5] -> 3이하면 '🍒' 아니면 '🍉'

const a = (x) => {
  return x * 2;
};

const b = (x) => {
  return x % 2 == 0 ? x * 3 : x * 2;
};

const c = (x) => {
  return x <= 3 ? "🍒" : "🍉";
};

const num = [1, 2, 3, 4, 5].map(a);
const num1 = [1, 2, 3, 4, 5].map(b);
const num2 = [1, 2, 3, 4, 5].map(c);

console.log(num);
console.log(num1);
console.log(num2);

const fruitArray = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];

// 1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화 하기
const word = fruitArray.map((x) => {
  return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
});
// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화 하기
const inA = fruitArray.map((x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
});
// 3. 단어 안에 있는 알파벳 a를 '🍒'로 바꾸기
const cherry = fruitArray.map((x) => {
  return x.includes("a") ? x.replaceAll("a", "🍒") : x;
});

console.log(word);
console.log(inA);
console.log(cherry);

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["warer", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["warer", "wheat", "bean"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

// 1. 가을 시즌 이벤트 -> 모든 가격을 10% 할인한 가격으로 바꿔주기
// 2. 두유 시즌 이벤트 -> 성분에 두유 강제 추가
// 3. 스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인 된 가격으로 바꿔주고, 샷 하나 더 늘려주기
// 4. 인플레이션 시즌 이벤트 -> 모든 가격 20% 떡상한 가격으로 바꿔주기

const fall = starbucks.map((x) => {
  return x.price * 0.9;
});

console.log(fall);

const soymilk = starbucks.map((x) => {
  x.ingredients.push("soymilk");
  return x;
});

console.log(soymilk);

const coffee = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shots = x.shots + 1;
    return x;
  } else {
    return x;
  }
});

console.log(coffee);

const inplationEvent = starbucks.map((x) => {
  x.price = x.price * 1.2; //숫자
  return x;
});

console.log(inplationEvent);
