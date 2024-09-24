// 1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살리기
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const three = arr.filter((x) => {
  return x % 3 == 0;
});

console.log(three);
// 2. [1,2,3,4,5,6,7,8,9,10] 4 이상 8 이하만 살리기
const num = arr.filter((x) => {
  return (x >= 4) & (x <= 8);
});

console.log(num);

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
// 3. 알파벳 O가 들어있는 애들만 살려주기
const zero = fruitArray.filter((x) => {
  return x.includes("o");
});

console.log(zero);
// 4. 문자 길이기 6글자 이상만 살려주기
const leng = fruitArray.filter((x) => {
  return x.length >= 6;
});

console.log(leng);
// 5. 문자길이가 짝수인 애들만 살리고, 대문자화 시켜주기
const leng1 = fruitArray
  .filter((x) => {
    return x.length % 2 == 0;
  })
  .map((x) => {
    return x.toUpperCase();
  });

console.log(leng1);

// 유저에게 정수 n(maximum),k(배수)를 입력 받으면
// n = 10 , k = 3 [3,6,9]
// n = 15 , k = 5 [5,10,15]
// 를 도출하는 함수 만들기

const test = (n, k) => {
  return Array(n)
    .fill(0)
    .map((x, i) => {
      return i + 1;
    })
    .filter((x) => {
      return x % k == 0;
    });
};

const todolist = ["점심먹기", "복습하기", "유튜브보기", "카톡하기"];
const finished = [false, false, true, true];

// newTodolist = ["점심먹기","복습하기"]

const newTodolist = (todolist, finished) => {
  return todolist.filter((x, i) => {
    return !finished[i];
  });
};
const a = newTodolist(todolist, finished);
console.log(a);
// x기준으로 나눴을때 나눠진 문자열의 각각 길이를 배열화 시킨거
// "xabcxdefxghi" [0,3,3,3]

const test2 = (word) => word.split("x").map((X) => X.length);

const fruits = ["melon", "kiwi", "apple", "banana", "orange"];

// 모음 : a,e,i,o,u는 대문자로 바꾸기
// [mELOn, kIwI, ApplE, bAnAnA, OrAngE]

const test3 = fruits.map((x) =>
  x
    .split("")
    .map((x) =>
      x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
        ? x.toUpperCase()
        : x
    )
);

const vowels = ["a", "e", "i", "o", "u"];

fruits.map((x) =>
  x.split("").map((y) => (vowels.some((v) => v == y) ? y.toUpperCase() : y))
);
console.log(test3);

// 1~100까지 만들고, 369 만들기
// [1,2,👏]

// 해당 타입에 방법이 없으면 다른 타입으로 바꿔서 ㄱㄱ
const threesixnine = Array(100)
  .fill(0)
  .map((x, i) => String(i + 1))
  .map((y) =>
    y.includes("3") || y.includes("6") || y.includes("9") ? "👏" : y
  )
  .map((y) => (y == "👏" ? "👏" : Number(y)));

console.log(threesixnine);
