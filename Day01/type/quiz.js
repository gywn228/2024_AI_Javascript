// prompt로 첫번째 숫자 입력
// prompt로 두번째 숫자 입력
// 콘솔로 두 수의 합은 ~~ 입니다
// const a = Number(prompt("첫번째 숫자 입력"));
// const b = Number(prompt("두번째 숫자 입력"));
// const c = a + b;

// console.log(`두 수의 합은 ${c}입니다.`);

// 1. 한 변의 길이를 물어보고, 정사각형의 넓이와 둘레 알려주기
// 2. 밑변과 높이를 물어보고, 정삼각형의 넓이 구하기
// 3. 반지름을 물어보고, 원의 넓이와 둘레 구하기
// 4. 출생년도를 물어보고 나이를 나타내기
// 5. 일본여행 갈거임 그래서 100만원 환전하면 현재 환율로 엔화 나타내기
//  ex) 얼마 환전? 107451

const bun = Number(prompt("한 변의 길이는?"));
const bun2 = bun * bun;
const bun3 = bun * 4;
console.log(`정사각형의 넓이는 ${bun2} 이고, 둘레는 ${bun3} 입니다.`);

const bun4 = Number(prompt("밑변의 길이는?"));
const bun5 = Number(prompt("높이는?"));
const bun6 = (bun4 * bun5) / 2;
console.log(`정삼각형의 넓이는 ${bun6} 입니다.`);

const circle = Number(prompt("반지름은?"));
const circle2 = circle * circle * 3.14;
const circle3 = circle * 2 * 3.14;
console.log(`원의 넓이는 ${circle2} 이고, 둘레는 ${circle3} 입니다.`);

const age = Number(prompt("출생년도는?"));
const age2 = 2025 - age;
console.log(`당신의 나이는 ${age2} 이군요`);

const japen = Number(prompt("얼마 환전?"));
const japen2 = japen * 0.1075;
console.log(`현재 환률은 ${japen2} 입니다.`);
