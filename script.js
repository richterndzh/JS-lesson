let title ="JavaScript";
let screens ="Простые, Сложные, Интерактивные";
let screenPrice = 17;
let rollback = 29;
let fullPrice = 40000;
let adaptive = true;

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
// Вывести в консоль длину строки screens
console.log(screens.length);
// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(screens.toLowerCase().split(","));
/** Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и т.д*/
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимость разработки сайта" + " " + rollback + " " + "долларов");
// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log(fullPrice * (rollback / 100));

// alert("Hello,World");
// console.log("Hello console!");
