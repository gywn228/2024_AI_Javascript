// short circuit

// ||[or]
const a = false || true; // true
const b = undefined || "자바스크립트"; // 자바스크립트

const username = prompt("유저 이름 입력");
alert(`${username || "Guest"}님 환영합니다.`);

// &&[and]
const c = true && "탕수육"; // 탕수육
const d = false && "탕후루"; // false

const isLoggin = prompt("비밀번호 입력") == "1234";
isLoggin && alert("안녕하세요");
