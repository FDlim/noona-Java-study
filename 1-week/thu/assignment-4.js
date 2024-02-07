// 숫자가 소수이면 true 아니면 false

let a = 9791; //숫자입력
let result = true; //소수인지 아닌지를 나타냄
if (a == 0 || a == 2) {
  result = false;
} else if (a == 1) {
  result = true;
} else if (a > 1) {
  for (i = 2; i < a; i++) {
    if (a % i == 0) {
      result = false;
      break;
    }
  }
  if (result == true) {
    console.log("소수입니다.");
  } else {
    console.log("소수가 아닙니다.");
  }
}
