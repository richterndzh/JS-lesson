'use strict';

const title = document.getElementsByTagName('h1')[0];
const plusBtn = document.querySelector('.screen-btn');

const percent = document.querySelectorAll('.other-items.percent');
const number = document.querySelectorAll('.other-items.number');

const input = document.querySelector('.rollback input[type="range"]');
let span = document.querySelector('.rollback span.range-value');

const buttonStart = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];

let total = document.getElementsByClassName('total-input')[0];
let totalCount = document.getElementsByClassName('total-input')[1];
let totalCountOther = document.getElementsByClassName('total-input')[2];
let fullTotalCount = document.getElementsByClassName('total-input')[3];
let totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const cms = document.querySelector('#cms-open');
const cmsVariant = document.querySelector('.hidden-cms-variants');


const appData = {
  title: '',
  screens: [],
  rollback: 0,
  fullPrice: 0,
  screenPrice: 0,
  adaptive: true,
  servicesNumber: {},
  screensQuantity: 0,
  servicesPercent: {},
  servicePricesNumber: 0,
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  
  //
  init: function () {
    this.addTitle();
    plusBtn.addEventListener('click', this.addScreenBlock.bind(this));
    buttonStart.addEventListener('click', this.start.bind(this));
    buttonReset.addEventListener('click', this.reset.bind(this));
    input.addEventListener('input', this.movingTheSlider.bind(this));
    input.addEventListener('change', this.movingTheSlider.bind(this));
    cms.addEventListener('click', this.showCms);
    cmsVariant.addEventListener('click', this.other);
  },
  
  //Заголовок страницы
  addTitle: function (){
    document.title = title.textContent;
  },

  //Выводит результаты вычислений в парвую часть калькулятора
   showResult: function() {
    total.value = this.screenPrice;
    totalCount.value = this.screensQuantity;
    totalCountOther.value = this.servicePricesNumber + this.servicePricesPercent;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  //Работа с расчетом по типу экранов
  addScreens: function() {
    screens = document.querySelectorAll('.screen');
    this.screens = [];

    screens.forEach((screen, index) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        const selectName = select.options[select.selectedIndex].textContent;
        
        this.screens.push({
          id: index, 
          name: selectName,
          count: +input.value, 
          price: +select.value * +input.value,
        });
    });
  },

  //Работа с дополнительными услугами
  addServices: function(){
    percent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if(check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
      
    });

    number.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if(check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
      
    });
    
  },

  //Кнопка плюс блока с типами экранов
  addScreenBlock: function() {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length -1].after(cloneScreen);
  },

  //Работа с ползунком отката посреднику
  movingTheSlider: function(event){
    span.textContent = event.target.value + '%';
    this.rollback = event.target.value;
    this.addPrice();
    this.showResult();
  },

  //Вычисление всех сумм
  addPrice: function(){
    const select = cmsVariant.querySelector('select');
    const selectValue = select.options[select.selectedIndex].value;
    
    for (let screen of this.screens)
    {
      this.screenPrice += +screen.price;
    }
    
    for(let key in this.servicesNumber)
    {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for(let key in this.servicesPercent)
    {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =  +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
    if(Number(selectValue)) 
    {
      this.fullPrice += this.fullPrice * +selectValue /100;
    }
    else
    {
      let percent = cmsVariant.querySelector('#cms-other-input');
      this.fullPrice += this.fullPrice * +percent.value / 100;
    }

    this.servicePercentPrice = Math.ceil(this.fullPrice - this.fullPrice * (this.rollback / 100));

    this.screensQuantity = 0;
    for (let i = 0; i < this.screens.length; i++){
      this.screensQuantity += this.screens[i].count;
    }
  },

  //Работа с CMS
  showCms: function() {
    if(cms.checked) 
    {
      cmsVariant.style.display = 'flex';
    }
    else
    {
      cmsVariant.style.display = 'none';
    }
  },

  //Работа с CMS-другое
  other: function() {
    const select = cmsVariant.querySelector('select');
    const selectName = select.options[select.selectedIndex].textContent;
    const percentBlock = cmsVariant.querySelector('.main-controls__input');

    if(selectName === 'Другое') {
      percentBlock.style.display = 'block';
    }
    else if (selectName !== 'Другое')
    {
      percentBlock.style.display = 'none';
    }
  },  

  //Блокировка типо экранов и кнокки плюс
  block: function () {
    if(this.screens.length !==0) {
      buttonStart.style.display = 'none';
      buttonReset.style.display = 'block';
      plusBtn.setAttribute('disabled', 'disabled');

      screens = document.querySelectorAll('.screen');
      screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      select.setAttribute("disabled", "disabled");
      input.setAttribute("disabled", "disabled");
      });
    }
  },

  //Возвращение кнопки рассчитать
  unblockStartBtn: function() {
    buttonStart.style.display = 'block';
    buttonReset.style.display = 'none';
    plusBtn.removeAttribute('disabled', 'disabled');
  },
  
  //
  hideCms: function() {
    if(cms.checked)
    {
      cms.checked = false;
      cmsVariant.style.display = "none";
    }
  },

  //Чистка результата
  clearResult: function() {
    total.value = '0';
    totalCountOther.value = '0';
    fullTotalCount.value = '0';
    totalCountRollback.value = '0';
    totalCount.value = '0';
    span.textContent = '0%';
    input.value = 0;
    this.rollback = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.screensQuantity = 0;
    this.screenPrice = 0;
    this.servicePercentPrice = 0;
  },

  //Очитска дополнительных услуг
  clearServicesCheckbox: function() {
    percent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');

      if(check.checked) {
        check.checked = false;
      }
      
    });

    number.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');

      if(check.checked) {
        check.checked = false;
      }
      
    });
  },

  //Очитска типов экранов и кол-ва
  deletedScreens: function() {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => {
        const select = screen.querySelector('select');
        const input = screen.querySelector('input');
        select.removeAttribute("disabled", "disabled");
        input.removeAttribute("disabled", "disabled");
        select.selectedIndex = 0;
        input.value = '';

        for (let i = 1; i < screens.length; i++) {
          screens[i].remove();
        }
    });
  },

  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
    
  start: function(){
    this.addScreens();
    if (this.screens.find((screen) => screen.price === 0 ||  !this.isNumber(screen.count))) {return;}
    
    this.addServices();
    this.addPrice();
    this.showResult();
    this.block();
  },

  reset: function () {
    this.unblockStartBtn();
    this.clearResult();
    this.clearServicesCheckbox();
    this.deletedScreens();
    this.hideCms();
  },

};


appData.init();