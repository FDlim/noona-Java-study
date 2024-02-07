function greet(name) {
  console.log(`안녕 내이름은 ${name}야`);
  return name;
}
let name = greet("용림이");
console.log(name);

function meetAt(year, month, day) {
  let isNum = {
    yearIsNum: isNaN(year),
    monthIsNum: isNaN(month),
    dayIsNum: isNaN(day),
  };

  let isNumValue = Object.values(isNum);
  let dateKeys = [year, month, day];
  let isGoodDate = true;

  for (i = 0; i < isNumValue.length; i++) {
    if (isNumValue[i] == true) {
      if (dateKeys[i] !== undefined) {
        isGoodDate = false;
        console.log("숫자만 입력해 주세요.");

        break;
      }
    }
  }
  if (month > 12 || month < 1) {
    console.log("정상적인 month 값이 아닙니다.");
    isGoodDate = false;
  } else if (day > 31 || day < 1) {
    console.log("정상적인 day 값이 아닙니다.");
    isGoodDate = false;
  }

  if (isGoodDate == false) {
  } else if (month == undefined && year !== undefined) {
    console.log(`${year}년`);
    return;
  } else if (month !== undefined && day == undefined) {
    console.log(`${year}년 ${month}월`);
    return;
  } else if (day !== undefined) {
    console.log(`${year}/${month}/${day}`);
    return;
  }
}

today = meetAt(1992, 4, 10);
