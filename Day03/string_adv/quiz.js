// 유저에게 비밀번호 설정을 물어보고, 비밀번호가 it,IT를 포함하면 비밀번호 설정 완료! 아니면 비밀번호 설정 오류
// const user = prompt("비밀번호 설정").toUpperCase();

// const pw = user.includes("IT") ? "비밀번호 설정 완료!" : "비밀번호 설정 오류";

// console.log(pw);

// 1. 유저에게 좋아하는 음식을 입력 받고 그 음식을 5번 출력하는 프로그램
// const food = prompt("좋아하는 음식 입력");
// const user1 = food.repeat(5);
// alert(user1);
// // 2. 유저에게 좋아하는 음식과 횟수를 입력받고 그 음식을 횟수번 만큼 출력하는 프로그램
// // ex) 떡볶이 5 -> 떡볶이떡볶이떡볶이떡볶이떡볶이
// const foodCount = prompt("좋아하는 음식과 횟수 입력");
// const arr = foodCount.split(" ");
// const myFood = arr[0]; //떡볶이
// const count = Number(arr[1]); // 5
// alert(myFood.repeat(count));

// // 3. 유저에게 알파벳 단어를 입력 받고 6글자보다 작으면 소문자화 하고 크면 대문자화 해서 출력
// const abc = prompt("알파벳 단어 입력");
// const is6unde = abc.length < 6;
// const result = is6unde ? abc.toLowerCase() : abc.toUpperCase();
// alert(result);

// const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.
// No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.
// But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.
// The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

// 1. 유저에게 단어를 입력 받고, 소문자이면 대문자로, 대문자이면 소문자로
// ex) happy -> HAPPY , SAD -> sad
const word = prompt("단어를 입력해주세요");
const result1 =
  word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();
alert(result1);

// 2. 유저에게 비밀번호 설정을 물어보고
// -1. 길이가 8~20 아니면 비밀번호 길이 오류
// -2. 시작이 it,IT로 시작 안하면 비밀번호 시작은 it,IT로 시작해야함
// -3. 특수문자 &#@!중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
// 위에 조건이 모두 통과되면 비밀번호 설정 완료
const user2 = prompt("비밀번호 설정");
const a = user2.length >= 8 && user2.length <= 20;
const b = user2.startsWith("it") || user2.startsWith("IT");
const c =
  user2.includes("&") ||
  user2.includes("#") ||
  user2.includes("@") ||
  user2.includes("!");
if (!a) {
  alert("비밀번호 길이 오류");
} else if (!b) {
  alert("비밀번호 시작은 it,IT로 시작해야함");
} else if (!b) {
  alert("비밀번호에 반드시 특수문자 넣어야함");
} else {
  alert("비밀번호 설정 완료!");
}
