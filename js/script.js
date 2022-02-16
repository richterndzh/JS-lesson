'use strict';

const title = document.getElementsByTagName('h1')[0];
const plusBtn = document.querySelector('.screen-btn');
const percent = document.querySelectorAll('.other-items.percent');
const number = document.querySelectorAll('.other-items.number');

const input = document.querySelector('.rollback input[type="range"]');
let span = document.querySelector('.rollback span.range-value');

const buttonStart = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTOtalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];


let blockWithClassScreen = document.querySelectorAll('.screen');


const appData = {
  title: '',
  screens: [],
  rollback: 0,
  fullPrice: 0,
  screenPrice: 0,
  adaptive: true,
  servicesNumber: {},
  servicesPercent: {},
  servicePricesNumber: 0,
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  
  init: function () {
    appData.addTitle();
    plusBtn.addEventListener('click', appData.addScreenBlock);
    buttonStart.addEventListener('click', appData.start);
    input.addEventListener('input', appData.movingTheSlider);
    input.addEventListener('change', appData.movingTheSlider);
  },

  addTitle: function (){
    document.title = title.textContent;
  },

  showResult: function() {
    total.value = appData.screenPrice;
    totalCount.value = appData.screensQuantity;
    totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPercent;
    fullTOtalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
  },

  addScreens: function() {
    blockWithClassScreen = document.querySelectorAll('.screen');
    appData.screens = [];

    blockWithClassScreen.forEach(function(screen, index) {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;
        
        appData.screens.push({
          id: index, 
          name: selectName, 
          price: +select.value * +input.value,
          count: +input.value
        });

    });


  },

  addServices: function(){
    percent.forEach(function(item){
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if(check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
      
    });

    number.forEach(function(item){
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if(check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
      
    });
    
  },

  addScreenBlock: function() {
      const cloneScreen = blockWithClassScreen[0].cloneNode(true);
      blockWithClassScreen[blockWithClassScreen.length -1].after(cloneScreen);
  },

  movingTheSlider: function(event){
    span.textContent = event.target.value + '%';
    appData.rollback = event.target.value;
  },

  addPrice: function(){

    for (let screen of appData.screens)
    {
      appData.screenPrice += +screen.price;
    }
    
    for(let key in appData.servicesNumber)
    {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for(let key in appData.servicesPercent)
    {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }



    appData.fullPrice =  +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;

    appData.servicePercentPrice = Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback / 100));

    appData.screensQuantity = 0;
    for (let i = 0; i < appData.screens.length; i++){
      appData.screensQuantity += appData.screens[i].count;
    }
  },

    isNumber: function(num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    },

  logger: function(){
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
  },
    
  start: function(){
    appData.addScreens();

    //if (appData.screens.find((screen) => !appData.isNumber(screen.count))) {return;}

    if (appData.screens.find((screen) => screen.price === 0 ||  !appData.isNumber(screen.count))) {return;}

    appData.addServices();
    appData.addPrice();
    //appData.logger();
    appData.showResult();
  },

};


appData.init();