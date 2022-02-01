let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = prompt('Сколько будет стоить данная работа?');
let rollback = 500; 
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
let fullPrice =  Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice = Number(fullPrice) - Number(rollback/100);


console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(typeof fullPrice);
console.log(screens.length);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена.");
} else if (fullPrice < 0) {
  console.log("Что-то пошло не так!");
}