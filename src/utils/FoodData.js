import getTimeStamp from "./getTimStamp";

function getRandomKcal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const fooddata = [
  {
    day: 1,
    date: getTimeStamp("sub", 8, 4),
    time: "8시",
    status: "간식",
    name: "딸기우유 1개",
    kcal: getRandomKcal(500, 900)
  },
  {
    day: 1,
    date: getTimeStamp("sub", 12, 4),
    status: "",
    name: "",
    time: "12시",
    kcal: getRandomKcal(400, 700)
  },
  {
    day: 1,
    date: getTimeStamp("sub", 20, 4),
    status: "",
    name: "",
    time: "20시",
    kcal: getRandomKcal(100, 400)
  },
  {
    day: 2,
    date: getTimeStamp("sub", 5, 3),
    time: "5시",
    status: "간식",
    name: "토마토주스 1/2개",
    kcal: getRandomKcal(50, 200)
  },
  {
    day: 2,
    date: getTimeStamp("sub", 8, 3),
    status: "",
    name: "",
    time: "8시",
    kcal: getRandomKcal(500, 700)
  },
  {
    day: 2,
    date: getTimeStamp("sub", 12, 3),
    status: "",
    name: "",
    time: "12시",
    kcal: getRandomKcal(300, 500)
  },
  {
    day: 2,
    date: getTimeStamp("sub", 20, 3),
    time: "20시",
    status: "간식",
    name: "베이글 1개",
    kcal: getRandomKcal(700, 900)
  },
  {
    day: 3,
    date: getTimeStamp("sub", 9, 2),
    status: "",
    name: "",
    time: "9시",
    kcal: getRandomKcal(400, 600)
  },
  {
    day: 3,
    date: getTimeStamp("sub", 13, 2),
    status: "간식",
    time: "13시",
    name: "포도 1송이",
    kcal: getRandomKcal(700, 900)
  },
  {
    day: 3,
    date: getTimeStamp("sub", 20, 2),
    time: "20시",
    status: "",
    name: "",
    kcal: getRandomKcal(500, 600)
  },
  {
    day: 4,
    date: getTimeStamp("sub", 8, 1),
    status: "간식",
    name: "초콜릿 1개",
    time: "8시",
    kcal: getRandomKcal(600, 700)
  },
  {
    day: 4,
    date: getTimeStamp("sub", 14, 1),
    status: "",
    name: "",
    time: "14시",
    kcal: getRandomKcal(500, 600)
  },
  {
    day: 4,
    date: getTimeStamp("sub", 18, 1),
    status: "",
    name: "",
    time: "18시",
    kcal: getRandomKcal(400, 600)
  },
  {
    day: 5,
    date: getTimeStamp("none", 8),
    status: "",
    name: "",
    time: "9시",
    kcal: getRandomKcal(500, 700)
  },
  {
    day: 5,
    date: getTimeStamp("none", 12),
    status: "",
    name: "",
    time: "12시",
    kcal: getRandomKcal(500, 700)
  },
  {
    day: 5,
    date: getTimeStamp("none", 18),
    status: "간식",
    name: "오렌지 주스 1/2",
    time: "18시",
    kcal: getRandomKcal(700, 800)
  }
];

export { fooddata, getRandomKcal };
