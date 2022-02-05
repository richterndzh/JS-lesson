let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
let rollback = 50; 
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = Number(prompt('Сколько это будет стоить?'));
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = Number(prompt('Сколько это будет стоить?'));


const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getTitle = function(str) {
  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
title = getTitle(title);

function stringToArray(array){
  return array.toLowerCase ().trim().split(" ");
}
let arr = stringToArray(screens);

let getAllServicePrice = function(priceOne, priceTwo) {
  return priceOne + priceTwo;
};
let allServicePrices = getAllServicePrice(servicePrice1, servicePrice2);

function getFullPrice(priceOfWork, allServicePrices) {
  return priceOfWork + allServicePrices;
}
let fullPrice = getFullPrice(screenPrice, allServicePrices);

const getServicePercentPrices = function(fullPrice, rollback) {
  return fullPrice - (fullPrice * (rollback / 100));
};
let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

const getRollbackMessage = function(price) {
    if (price > 30000) {
      return"Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return"Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return"Скидка не предусмотрена.";
    } else if (price < 0) {
      return"Что-то пошло не так";
    }
};

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(title);
console.log(arr);
console.log(getRollbackMessage(fullPrice));
console.log("Итоговая сумма: " + Math.ceil(getServicePercentPrices(fullPrice, rollback)));
