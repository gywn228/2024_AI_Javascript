// makeCoffee 함수 만들기 [커피 준비 - 커피 완료]
// americano,latte,vanilla 함수 만들어서
// makeCoffee(americano) // [커피 준비 - 아메리카노 - 커피 완료]

const makeCoffee = (x) => {
  console.log("커피 준비");
  x();
  console.log("커피 완료");
};

const americano = () => {
  console.log("원두 준비");
  console.log("로스팅 하기");
  console.log("얼음컵에 물과 커피 섞기");
};

const latte = () => {
  console.log("원두 준비");
  console.log("로스팅 하기");
  console.log("얼음컵에 우유와 커피 섞기");
};

const vanilla = () => {
  console.log("원두 준비");
  console.log("로스팅 하기");
  console.log("얼음컵에 우유와 커피 섞기");
  console.log("바닐라 시럽 넣기");
};

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);
makeCoffee(() => {
  console.log("원두 준비");
  console.log("로스팅 하기");
  console.log("얼음컵에 물과 커피 섞기");
  console.log("망고 넣기"); // 아망추 추가하기
});
