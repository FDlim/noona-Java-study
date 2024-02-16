let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

console.log(names[0].length);

//map 문제
// * 모든 이름을 대문자로 바꾸어서 출력하시오
// * 성을제외한 이름만 출력하시오
// * 이름 이니셜만 출력하시오

//일단 각각의 배열을 가져온다.
//각 배열의 문자열중 1번째 있는 글자를 대문자로 바꾼다.
//콘솔로그로 출력한다..

// names.forEach((element) => {
//   let eachArray = element.split("");
//   eachArray[0] = eachArray[0].toUpperCase();
//   console.log(eachArray);
// });
//이걸 map을 사용해서 다시 풀어보자

// let data = names.map((item) => item.toUpperCase());
// console.log(data);

// JavaScript에서 문자열(string)은 불변(immutable)합니다. 따라서 문자열의 특정 문자를 직접 수정할 수 없습니다.

// let data = names.map((item) => {
//   return item.charAt(0).toLowerCase() + item.slice(1);
// });

// console.log(data);

// let data2 = names.map((item) => {
//   return item.split(" ")[0];
// });

// console.log(data2);

// let data3 = names.map((item) => {
//   let eachArray = item.split(" ");
//   let result = "";
//   eachArray.forEach((element) => {
//     result += element.charAt(0);
//   });
//   return result;
// });

// console.log(data3);
//하긴 했는데 왜 되는지 모르겠네 ㅋㅋㅋㅋ
//
//
//
//
//
// filter 문제

// * 이름에 a 를 포함한 사람들을 출력
// * 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오.

// let data = names.filter((item) => {
//   return item.includes("a");
// });

// console.log(data);

// let data2 = names.filter((item) => {
//   let eachArray = item.split("");
//   let result = false;
//   eachArray.forEach((element, index) => {
//     element === eachArray[index + 1] ? (result = true) : "";
//   });
//   return result;
// });
// console.log(data2);

//다른 모범정답
// let doubleLetter =  names.filter((item) => {
//     let splitName = item.split("");
//     return splitName.some((letter, index) => letter == splitName[index + 1]);
//   })

// console.log(doubleLetter)

//머리 빠게지겠네ㅠㅠㅠ
//
//
//
//
//some문제
// * 전체 이름의 길이가 20자 이상인 사람이 있는가?
// * 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관no)

// let data = names.some((item) => {
//   let eachArray = item.split(" ");
//   let result = eachArray.join("");
//   return result.length > 19;
// });

// console.log(data);

// let data2 = names.some((item) => {
//   let eachArray = item.split(" ");
//   let result = eachArray.slice(1).join("").toLowerCase();

//   console.log(result);
//   return result.includes("p");
// });

// console.log(data2);

//every문제
// * 모두의 전체 이름의 길이가 20자 이상인가?
// * 모두의 이름에 a 가 포함되어 있는가?

// let data = names.every((item) => {
//   let eachArray = item.split(" ");
//   let result = eachArray.join("");
//   return result.length > 19;
// });

// console.log(data);

// let data2 = names.every((item) => {
//   return item.includes("a");
// });

// console.log(data2);

//find 문제
// * 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
// * 미들네임이 포함되어있는 사람을 찾으시오.

// let data = names.find((item) => {
//   let eachArray = item.split(" ");
//   let result = eachArray.join("");
//   console.log(result);
//   return result.length > 19;
// });

// console.log(data);
//딱 한개만 찾아주기 때문에 여러값을 찾을수 없음 답지확인 해봐야할듯

// let data2 = names.find((item) => {
//   let eachArray = item.split(" ");
//   return eachArray.length > 2;
// });

// console.log(data2);

//findIndex문제
// * 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// * 미들네임이 포함되어 있는 사람의 인덱스 번호를 찾으시오.

// let data = names.findIndex((item) => {
//   let eachArray = item.split(" ");
//   let result = eachArray.join("");
//   console.log(result);
//   return result.length > 19;
// });

// console.log(names[data]);

// let data2 = names.findIndex((item) => {
//   let eachArray = item.split(" ");
//   return eachArray.length > 2;
// });

// console.log(names[data2]);
