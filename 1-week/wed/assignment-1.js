// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F

let score = 76;

if (score >= 90) {
  console.log("학점은 A 입니다.");
} else if (score >= 80 && score <= 89) {
  console.log("학점은 B 입니다.");
} else if (score >= 70 && score <= 79) {
  console.log("학점은 C 입니다.");
} else if (score >= 60 && score <= 69) {
  console.log("학점은 D 입니다.");
} else if (score < 59) {
  console.log("학점은 F 입니다.");
}

let skills = ["HTML", "CSS", "Javascript", "React"];

if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("합격");
} else if (skills.includes("React")) {
  console.log("예비");
} else if (skills.includes("Javascript")) {
  console.log("예비");
} else {
  console.log("탈락");
}
