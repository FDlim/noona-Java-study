// 1부터 50까지 369게임 결과 출력

for (i = 1; i < 51; i++) {
  let iArr = [];
  let str = String(i);
  let check = [];
  iArr = Array.from(str);
  for (j = 0; j < iArr.length; j++) {
    if (iArr[j] == "3" || iArr[j] == "6" || iArr[j] == "9") {
      check.push("짝");
    }
  }
  if (check.length > 0) {
    console.log(check);
  } else {
    console.log(i);
  }
}
