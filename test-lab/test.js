let mathResult = 0;
let mathAverage = 0;
let forResult = 0;
let forAverage = 0;

function randomNum() {
  let randomArr = [];
  for (i = 0; i < 1000; i++) {
    let ranNum = Math.floor(Math.random() * 1000) + 1;
    randomArr.push(ranNum);
  }
  return randomArr;
}

function mathFunction(arr) {
  let smallestNum = arr;
  if (arr == null || arr.length === 0) {
    smallestNum = 0;
  } else {
    smallestNum = Math.min(...arr);
  }
  return smallestNum;
}

function forFunction(arr) {
  let smallestNum = arr[0];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (smallestNum > arr[j]) {
        smallestNum = arr[j];
      }
    }
  }
  return smallestNum;
}

for (y = 0; y < 10; y++) {
  console.time("Math");
  console.log("작은숫자", mathFunction(randomNum()));
  console.timeEnd("Math");
}

for (y = 0; y < 10; y++) {
  console.time("for");
  console.log("작은숫자", forFunction(randomNum()));
  console.timeEnd("for");
}
