arr = [100, 200, 3, 0, 2, 1];

function findSmallestElement() {
  let smallestNum = arr[1];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (smallestNum > arr[j]) {
        smallestNum = arr[j];
      }
    }
  }
  return smallestNum;
}
console.log(findSmallestElement());
