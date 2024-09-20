// 1. 출생년도를 물어보고 2005년 이하이면 성인입니다, 아니면 미성년자 입니다.
const year = Number(prompt("출생년도를 입력 하세요"));
const year2 = 2005 >= year ? "성인입니다" : "미성년자입니다";
console.log(year2);
// 2. 놀이기구를 탈려고 키를 물었음 150cm이하면 탈수 없습니다. 아니면 탈수 있습니다.
const hight = Number(prompt("키를 입력 하세요"));
const hight2 = 150 >= hight ? "탈수 있습니다" : "탈수 없습니다";
console.log(hight2);

// 3. 양의 정수를 입력받고, 분초를 바꾸는 프로그램
//ex) 76 -> 1분 16초
const num = Number(prompt("양의 정수를 입력 하세요"));
const sec = num % 60; // 16초
const min = parseInt(num / 60); // 3분
console.log(`${min}분 ${sec}초`);
