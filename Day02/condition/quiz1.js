// 버스 종류
// 마을버스, 시내버스, 고속버스, 심야버스
// 1500, 2000, 8000, 10000
// 경기권, 충청권, 강원권, 제주권
// +2000, +3000, +3000, +10000
// 일반석, 프리미엄석, 넷플석
// +1000, +3000, +4000
// 나이 13세 이하면 20% 65세 이상 50% 나머지 100%

const bus = {
  type: [
    { name: "마을버스", price: 1500 },
    { name: "시내버스", price: 2000 },
    { name: "고속버스", price: 8000 },
    { name: "심야버스", price: 10000 },
  ],
  zone: [
    { name: "경기권", price: 2000 },
    { name: "충청권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],
  seat: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄석", price: 1000 },
    { name: "넷플석", price: 1000 },
  ],
};

const busChoose = Number(
  prompt(
    `${bus.type[0].name} ${bus.type[1].name} ${bus.type[2].name} ${bus.type[3].name} 중에 고르시오`
  )
);
const zoneChoose = Number(
  prompt(
    `${bus.zone[0].name} ${bus.zone[1].name} ${bus.zone[2].name} ${bus.zone[3].name} 중에 고르시오`
  )
);
const seatChoose = Number(
  prompt(
    `${bus.seat[0].name} ${bus.seat[1].name} ${bus.seat[2].name} 중에 고르시오`
  )
);
const age = Number(prompt("나이를 입력해 주세요"));

const msg = `버스종류 : ${bus.type[busChoose].name}, 버스 행선지 : ${bus.zone[zoneChoose].name}, 버스 좌석 : ${bus.seat[seatChoose].name}`;

if (age <= 13) {
  const total =
    (bus.type[busChoose].price +
      bus.zone[zoneChoose].price +
      bus.seat[seatChoose].price) *
    0.8;
  console.log(`${msg} 총 금액 : ${total}`);
} else if (age >= 65) {
  const total =
    (bus.type[busChoose].price +
      bus.zone[zoneChoose].price +
      bus.seat[seatChoose].price) *
    0.5;
  console.log(`${msg} 총 금액 : ${total}`);
} else {
  const total =
    (bus.type[busChoose].price +
      bus.zone[zoneChoose].price +
      bus.seat[seatChoose].price) *
    1;
  console.log(`${msg} 총 금액 : ${total}`);
}
