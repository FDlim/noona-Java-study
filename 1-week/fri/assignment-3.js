function changeMoney(money) {
  changeMoneyArr = [50000, 10000, 5000, 1000, 500, 100];
  isMoney = isNaN(money);
  if (money == undefined) {
    console.log("돈을 넣어주세요");
  } else if (isMoney == true) {
    console.log("돈만 넣어주세요ㅠㅠ");
  } else {
    for (i = 0; i < changeMoneyArr.length; i++) {
      moneyCount = Math.floor(money / changeMoneyArr[i]);
      console.log(`${changeMoneyArr[i]} : ${moneyCount}`);
      money = money - changeMoneyArr[i] * moneyCount;
    }
  }
}

changeMoney(12300);
