// 기본 타입 : String, Number, Boolean, Null, Undefined
// 참조 타입 : Array

// Array(배열) : []
// 시작은 0번째 부터
const paik = ["아메리카노", "라떼", "모카", "바닐라"];
console.log(paik);
console.log(paik[2]);

// 서브웨이
// 빵메뉴 고르기 [플랫,화이트,위트]
// 치즈 메뉴 고르기 [슈레드,모짜렐라,아메리칸치즈]
// 소스메뉴 고르기 [머스타드,핫칠리,소금,후추,스언,홀레]
// 쿠키메뉴 고르기 [화이트,초콜릿,아몬드]
// 음료메뉴 고르기 [콜라,제로콜라,스프라이트,커피]
// 최종메뉴는 플랫-모짜렐라-소금-아몬드-콜라

const bread = ["플랫", "화이트", "위트"];
const cheese = ["슈레드", "모짜렐라", "아메리칸치즈"];
const sauce = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const cookie = ["화이트", "초콜릿", "아몬드"];
const drink = ["콜라", "제로콜라", "스프라이트", "커피"];

const bread2 = Number(prompt("빵메뉴 고르기 [플랫,화이트,위트] 번호 입력"));
const cheese2 = Number(
  prompt("치즈 메뉴 고르기 [슈레드,모짜렐라,아메리칸치즈] 번호 입력")
);
const sauce2 = Number(
  prompt("소스메뉴 고르기 [머스타드,핫칠리,소금,후추,스언,홀레] 번호 입력")
);
const cookie2 = Number(
  prompt("쿠키메뉴 고르기 [화이트,초콜릿,아몬드] 번호 입력")
);
const drink2 = Number(
  prompt("음료메뉴 고르기 [콜라,제로콜라,스프라이트,커피] 번호 입력")
);

console.log(
  `고르신 메뉴는 ${bread[bread2]}, ${cheese[cheese2]}, ${sauce[sauce2]}, ${cookie[cookie2]}, ${drink[drink2]} 입니다.`
);
