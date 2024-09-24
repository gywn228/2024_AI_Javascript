// 2000개 [빨,주,노,초,파,남,보]

const container = document.createElement("div");
container.classList.add("container");

// ["red", "orange", "yellow", "green", "blue", "navy", "purple"].forEach((x) => {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   box.style.backgroundColor = x;
//   container.appendChild(box);
//   document.body.appendChild(container);
// });

const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
Array(2001)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[i % colors.length];
    container.appendChild(box);
  });

document.body.appendChild(container);
