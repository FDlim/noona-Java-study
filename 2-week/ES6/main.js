// // let name = "noona's fruit store";
// // let fruit = ["banana", "apple", "mango"];
// // let address = "Seoul";

// // let store = { name, fruit, address };
// // console.log(store);

// // console.log(`제 가게 이름은 ${name}입니다. 위치는 ${address} 에 있습니다`);

// // function calculate(obj) {
// //   let { a, b, c } = obj;
// //   return a + b + c;
// // }

// // console.log(calculate({ a: 1, b: 2, c: 3 }));

// let name = "noona store";
// let fruit = ["banana", "apple", "mango"];
// let address = {
//   country: "Korea",
//   city: "seoul",
// };

// function findStore(obj) {
//   let {
//     name,
//     address: { city },
//   } = obj;
//   return name == "noona store" && city == "seoul";
// }
// console.log(findStore({ name, fruit, address }));

// function getNumber() {
//   let array = [1, 2, 3, 4, 5, 6];
//   return { first, third, forth };
// }

// function getNumber() {
//   let array = [1, 2, 3, 4, 5, 6];
//   let [first, , third, forth] = array;

//   return { first, third, forth };
// }

// console.log(getNumber()); //결과값 {first:1,third:3,forth:4}

// function getCalendar([first, ...rest]) {
//   return (
//     first == "January" &&
//     rest[0] === "February" &&
//     rest[1] === "March" &&
//     rest[2] === undefined
//   );
// }
// console.log(getCalendar(["January", "February", "March"]));

// function getMinimum() {
//   let a = [45, 23, 78];
//   let b = [54, 11, 9];
//   return Math.min(...a, ...b);
// }
// console.log(getMinimum());

// function sumNumber() {
//   let sum = (a, b) => a + b;
//   return sum(40, 10);
// }
// console.log(sumNumber());

// function sumNumber() {
//   const sum = function (a, b) {
//     return a + b;
//   };
//   return sum(40, 10);
// }
// console.log(sumNumber());

// function sumNumber() {
//   let addNumber = (a) => (b) => (c) => a + b + c;
//   return addNumber(1)(2)(3);
// }
// console.log(sumNumber());

function sumNumber() {
  return addNumber(1)(2)(3);
  function addNumber(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
}
console.log(sumNumber());

function sumNumber() {
  let addNumber = (a) => (b) => (c) => a + b + c;
  return addNumber(1)(2)(3);
}
console.log(sumNumber());
