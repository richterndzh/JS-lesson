let title ="JavaScript";
let screens ="Простые, Сложные, Интерактивные";
let screenPrice ="17";
let rollback ="29";
let fullPrice ="40000";
let adaptive ="true";

console.log(typeof title);
console.log(screens.length);
console.log(screens.toLowerCase().split(","));
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимость разработки сайтов" + " " + rollback + " " + "долларов");
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(fullPrice * (rollback / 100));

// alert("Hello,World");
// console.log("Hello console!");
