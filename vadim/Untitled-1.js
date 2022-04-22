let item_1 = 5;
console.log(item_1);
let item_2 = 3;
console.log(item_2);
let item_3 = item_2 + item_1;
console.log(item_3);
let item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
let item_5 = item_3;
let item_6;
let item_6_type;
item_6 = 15;
item_6_type = item_6;
item_6 = 15;
item_6_type = typeof(item_6);
console.log("item_6 == " + item_6, "item_6_type == " + item_6_type);
let item_7 = "item_6";
let item_7_type = typeof(item_6);
console.log("item_7 == " + item_7,  "item_7_type == " + item_7_type);
let age1 = 10;
let age2 = 18;
let age3 = 60;
// if (age1< age2) {
//     console.log("You don’t have access cause your age is " + age1 + " It’s less then");
// }
// else if (age1 >= age2 && age1 < age3) {
//     console.log("Welcome!")
// }
// else if (age1 > age3) {
//     console.log("Keep calm and look Culture channel")
// }
// else {
    
//     console.log ("Technical work")

// }
// //1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// const checkAge = function(age) {
// if (age< age2) {
//     console.log("You don’t have access cause your age is " + age + " It’s less then 18");
// }
// else if (age >= age2 && age < age3) {
//     console.log("Welcome!")
// }
// else if (age > age3) {
//     console.log("Keep calm and look Culture channel")
// }
// else {
    
//     console.log ("Technical work")

// }
// }
// checkAge(17);

//2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции 
//проверялся тип данных. И если он не Number - кидалась ошибка.


const checkAge = function(age) {
    if (typeof age == "number") {
    if (age< age2) {
        console.log("You don’t have access cause your age is " + age + " It’s less then 18");
    }
    else if (age >= age2 && age < age3) {
        console.log("Welcome!")
    }
    else if (age > age3) {
        console.log("Keep calm and look Culture channel")
    }
    else {
        
        console.log ("Technical work")
    
    }
    
    } else {console.log("Wrong type of data")}
}
    checkAge(17);
    checkAge("nnnnn"); 
let agePrompt = prompt("enter age");