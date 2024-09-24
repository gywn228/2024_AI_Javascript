// arr 함수들
// map : 바꿔주기
// filter : 걸러주기 , 어떠한 조건에 부합하는 요소만 남겨주기

[10, 20, 30, 40, 50]
  .filter((x) => {
    return x > 30; // 30 이하만 남기기
  })

  [(10, 20, 30, 40, 50)].filter((x) => {
    return x == 20 || x == 40; // 20 아니면 40만 남기기
  });

// every : 어떤 조건에 모든 요소가 부합하는지? (return Boolean)
[10, 20, 30, 40, 50].every((x) => {
  return x > 10; // false
});

// some : 어떤 조건에 하나 요소가 부합하는지? (return Boolean)
[10, 20, 30, 40, 50].some((x) => {
  return x > 10; // true
});

// 배열 만들기

// 열칸 만들기[] , fill (전체 다 채우기)
Array(20)
  .fill(0)
  .map((x, i) => {
    return i;
  });
