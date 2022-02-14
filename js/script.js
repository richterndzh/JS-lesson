'use strict';

const title = document.getElementsByTagName('h1')[0];
const button = document.getElementsByClassName('handler_btn');
const btnStart = button[0];
const btnReset = button[1];
const plus = document.querySelector('.screen-btn');
const percent = document.querySelectorAll('.percent');
const number = document.querySelectorAll('.number');
const input = document.querySelector('div.rollback input');
const span = document.querySelector('div.rollback span.range-value');
const inputRight = document.getElementsByClassName('total-input');
const inputRight1 = inputRight[0];
const inputRight2 = inputRight[1];
const inputRight3 = inputRight[2];
const inputRight4 = inputRight[3];
const inputRight5 = inputRight[4];
let blockWithClassScreen = document.querySelectorAll('.screen');


console.log(title);
console.log(button);
console.log(btnStart);
console.log(btnReset);
console.log(plus);
console.log(percent);
console.log(number);
console.log(input);
console.log(span);
console.log(inputRight);
console.log(inputRight1);
console.log(inputRight2);
console.log(inputRight3);
console.log(inputRight4);
console.log(inputRight5);
console.log(blockWithClassScreen);




/*
const appData = {
  title: '',
  screens: [],
  adaptive: true,
  services: {},
  rollback: 10,
  fullPrice: 0,
  screenPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  isNumber: function(num) 
  { 
    num = num.trim();
    if (num === null || num[0] === ' ' || num[num.length-1] === ' ')
    {
      return false;
    }
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function() {
    do{
      appData.title = prompt('Как называется ваш проект?');
    } while (appData.isNumber(appData.title));
    
    
    for( let i = 0; i < 2; i++)
    {
      let name;
      
      do{
        name = prompt('Какие типы экранов нужно разработать?');
      } while (appData.isNumber(name));
      let price = 0;
      do {
          price = prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price));
        appData.screens.push({id: i, name: name, price: +price});
    }
    for( let i = 0; i < 2; i++)
    {
      let name;
      
      do{
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while (appData.isNumber(name));
      
      let price = 0;
      
      do 
      {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));
      appData.services[i + ' ' + name] = +price;
    }
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    
  },
  addPrice: function(){
    appData.screenPrice = appData.screens.reduce(function(sum, accum){
      return sum + accum.price;
    }, 0);
    
    for(let key in appData.services)
    {
      appData.allServicePrices += appData.services[key];
    }
  },
  getFullPrice: function() 
  {
    appData.fullPrice =  +appData.screenPrice + appData.allServicePrices;
  },
  
  getServicePercentPrices: function() 
  {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback / 100));
  },
  getTitle: function() 
  {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLocaleLowerCase();
  },
  getRollbackMessage: function(price) {
    if (price > 30000) {
      return"Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return"Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return"Скидка не предусмотрена";
    } else if (price < 0) {
      return"Что-то пошло не так!";
    }
  },
  logger: function(){
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
  },
  start: function(){
    appData.asking();
    appData.addPrice();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
};
appData.start(); */