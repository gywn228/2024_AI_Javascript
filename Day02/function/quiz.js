// 1. para : x return : hello x님!

function name(x) {
  return `hello ${x}님!`;
}

// 2. para : x return : ~~핑!
function ping(x) {
  return `${x}핑!`;
}
// 3. para : x return : ~~이라니 럭키비키잖아😊
function lucky(x) {
  return `${x}이라니 럭키비키잖아😊`;
}
// 4. 두 숫자를 주면 제곱을 돌려주는 함수
function num(x, y) {
  return x ** y;
}
// 5. 년도, 월, 일을 넣으면 오늘은 ~~년도, ~월, ~일
function year(x, y, z) {
  return `오늘은 ${x}년도, ${y}월, ${z}일`;
}
// 6. mbti(ei,sn,tf,jp)를 넣으면 외향적/내향적, 감각적/직관적, 이성적/감성적, 계획적/즉흥적
function mbti(a, b, c, d) {
  const mbtiMap = {
    e: "외향적",
    i: "내향적",
    s: "직관적",
    n: "감각적",
    t: "이성적",
    f: "감성적",
    j: "계획적",
    p: "즉흥적",
  };
  return `${mbtiMap[a]},${mbtiMap[b]},${mbtiMap[c]},${mbtiMap[d]} 이시군요!`;
}
// const ei = prompt("E입니까 I입니까?");
// const sn = prompt("S입니까 N입니까?");
// const tf = prompt("T입니까 F입니까?");
// const jp = prompt("J입니까 P입니까?");

// const mbti = {
//   e: "외향적",
//   i: "내향적",
//   s: "직관적",
//   n: "감각적",
//   t: "이성적",
//   f: "감성적",
//   j: "계획적",
//   p: "즉흥적",
// };

// console.log(
//   `당신의 mbti는 ${mbti[ei]}이고, ${mbti[sn]}, ${mbti[tf]},${mbti[jp]} 입니다.`
// );

// 7. zodiac 태어난 년도를 넣으면 띠 돌려주기
function zodiac(year) {
  const target = year % 12;
  const animal = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return `${animal[target]}띠`;
}
