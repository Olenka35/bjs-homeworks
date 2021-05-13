"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  if (percent < 0 || isNaN(percent) === true || percent === " ") {
    return `Параметр percent содержит неправильное значение ${percent}`;
  } else if (contribution < 0 || isNaN(contribution) === true || contribution === " ") {
    return `Параметр contribution содержит неправильное значение ${contribution}`;
  } else if (amount < 0 || isNaN(amount) === true || amount === " ") {
    return `Параметр amount содержит неправильное значение ${amount}`;
  } else if (new Date > date || date === " ") {
    return `Параметр date содержит неправильное значение ${date}`;
  }
  let P = percent/(12*100);
  let oneMonthImMsec = 31536000000/12;
  let months = Math.round((date.getTime() - new Date().getTime())/oneMonthImMsec);
  let monthFee = (amount - contribution) * (P + P/(((1 + P)** months)-1));
  let totalAmount = monthFee * months;
  console.log(totalAmount.toFixed(2));
  return Number(totalAmount.toFixed(2));
}

  
 function getGreeting() {
   
    if (name != "null") {
    console.log('Привет, мир! Меня зовут' + ' ' + name);
}   else  {
    console.log('Привет, мир! Меня зовут' + ' ' + 'Аноним');
};
    return greeting;
 }
     console.log(getGreeting (''))
     console.log(getGreeting ('')); 
     console.log(getGreeting ());
     console.log(getGreeting (null)); 

