// 1. 어떤 숫자를 넣으면 홀수 인지 짝수 인지 돌려주는 함수
const num = Number(prompt("숫자를 입력 하세요"));
if (num % 2 == 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

function oddEven(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}
// 2. 어떤 숫자를 넣으면 5의 배수이면 5의 배수 아니면 5의 배수가 아님 함수
const five = Number(prompt("숫자를 입력 하세요"));
if (five % 5 == 0) {
  console.log("5의 배수");
} else {
  console.log("5의 배수가 아님");
}

function isFiveTime(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}
// 3. 어떤 숫자를 넣으면 1 - 일반팝콘, 2 - 캬라멜 팝콘, 3 - 치즈 팝콘, 그외 그런거 없음 돌려주는 함수
const popcorn = Number(prompt("숫자를 입력 하세요"));
if (popcorn == 1) {
  console.log("일반 팝콘");
} else if (popcorn == 2) {
  console.log("캬라멜 팝콘");
} else if (popcorn == 3) {
  console.log("치즈 팝콘");
} else {
  console.log("그런거 없음");
}

function popcorn2(x) {
  if (x == 1) {
    return "일반 팝콘";
  } else if (x == 2) {
    return "캬라멜 팝콘";
  } else if (x == 3) {
    return "치즈 팝콘";
  } else {
    return "그런 팝콘 없음";
  }
}

function popcorn3(x) {
  return `${x}팝콘`;
}

// 4. 어떤 문자열을 3개 넣으면 배열로 돌려주는 함수 ex) 사탕, 떡볶이,멜론 -> [사탕,떡볶이,멜론]
function stringToArray(a, b, c) {
  return [a, b, c];
}

// 어떠한 과일 이름을 넣으면 ~~맛 아이스크림을 돌려주는 함수
function fruit(x) {
  return `${x}맛 아이스크림`;
}

const a = fruit("민트");
console.log(a);

function fruitArray(a, b, c) {
  return [a, b, c];
}

function oddEven1(x) {
  return x % 2 == 1;
}
