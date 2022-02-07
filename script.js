'use strict';

const appData = {
  title: '',
  screens: '',
  adaptive: true,
  service1: '',
  service2: '',
  rollback: 10,
  fullPrice: 0,
  screenPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,

  isNumber: function(num) 
  {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function() {
    appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
    appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, сложные");

    do {
        appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    } 
        while (!appData.isNumber(appData.screenPrice));

    appData.screenPrice = +appData.screenPrice;
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    
  },

  getAllServicePrices: function() {
  let sum = 0;

    for( let i = 0; i < 2; i++)
    {
      let price = 0;
      if ( i === 0) 
      {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } 
      else if ( i === 1)
      {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }
      
      do 
      {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));

      sum += +price;
    }
    return sum;
  },

  getFullPrice: function(screen, service) 
  {
    return screen + service;
  },
  
  getServicePercentPrices: function(per, resultPrice) 
  {
    return Math.ceil(resultPrice - resultPrice * (per / 100));
  },

  getTitle: function() 
  {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLocaleLowerCase();
  },

  getRollbackMessage: function(price) {
    if (price > 30000) {
      return"Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return"Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return"Скидка не предусмотрена.";
    } else if (price < 0) {
      return"Что-то пошло не так!";
    }
  },

  logger: function(){
    for (let key in appData) {
      console.log(`${key}: ${appData[key]}`);
    }
  },

  start: function(){
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    appData.servicePercentPrice = appData.getServicePercentPrices(appData.rollback, appData.fullPrice);
    appData.title = appData.getTitle();
    appData.logger();
  },

};

appData.start();