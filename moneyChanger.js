function getMoneyChange(money) {
    //your code here
  let totalMoney = 0
  let newMoneyStock;
  let arrMoney = []
    
  for (const key in moneyStocks) {
    newMoneyStock = Object.keys(moneyStocks).sort(function(a, b){return b - a})
    arrMoney.push([key])
    totalMoney += key * moneyStocks[key]
  }

  if (money > totalMoney || money < arrMoney[0]) {
    console.log(`Maaf uang kembalian tidak cukup`); 
  } else {
    
    for (let i = 0; i < newMoneyStock.length; i++) {
      if (money >= newMoneyStock[i]) {    
        let obj = {}
        while (money > 0 && money >=newMoneyStock[i] && moneyStocks[newMoneyStock[i]] > 0) {
          money = money - newMoneyStock[i]
          if (obj[newMoneyStock[i]] === undefined) {
            obj[newMoneyStock[i]] = 1
            moneyStocks[newMoneyStock[i]]--
          } else {
            obj[newMoneyStock[i]]++
            moneyStocks[newMoneyStock[i]]--
          }  
        }
        if (obj[newMoneyStock[i]]!== undefined) {
          console.log(newMoneyStock[i] + ' ' + obj[newMoneyStock[i]] + ' Lembar');
        }
      }
    }
  }
}

const moneyStocks = {
  100000: 1,
  50000: 2,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
}

  
getMoneyChange(75000)
/*
  50000 1 lembar
  20000 1 lembar
  5000 1 lembar
*/

getMoneyChange(190000)
/*
  100000 1 lembar
  50000 1 lembar
  20000 2 lembar
*/

getMoneyChange(190000)
/*
  Maaf uang kembalian tidak cukup
*/

getMoneyChange(100000)
/*
  20000 1 lembar
  10000 5 lembar
  5000 4 lembar
  1000 10 lembar
*/

getMoneyChange(400)
/*
  Maaf uang kembalian tidak cukup
*/


console.log(moneyStocks)
/*
{ '500': 5,
  '1000': 0,
  '5000': 0,
  '10000': 0,
  '20000': 0,
  '50000': 0,
  '100000': 0 }
*/