// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1


// let a  = 2;
// let result;
// let i = 0;
// for (i = 1; i<11; i++) {
//     result = a**i;
//     console.log(result);
// }


// let result= 1;
// let i = 0;
// for (i = 1;i<11; i++) {
//     result = result*2;
//     console.log(result);
    
// }



// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
// let a = 2;
// const degreeResult = function(i) {
//      let result;
//      // let i = 0;
//      result = a**i;
//      console.log(result); 
//      }
//      degreeResult(4);


// 2. Написать скрипт, который выведет 5 строк 
// в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// for (i = 0; i<6; i++) {
//     console.log(":)".repeat(i))
// }

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
//которая и будет выводиться в консоль (как в условии смайлик), 
//а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
let a = null;

const printSmile = function(a){
for (i = 0; i<1000; i++) {
console.log(a.repeat(i) + i + " раз")
     }
}
printSmile("zhopa")
// 3**.  Написать функцию, которая принимает на вход слово. 
// Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// const getWordStructure = function(i){
// let glasn = 0;
// let sogl = 0;

// for (a=0; a<i.length; a++) {
//      if (i[a] === ("a" || "е" || "i" || "o"  || "u" || "y")){
//      glasn++
// }
//      else {sogl++;}

// }
// console.log("glasn - "+ glasn + "soglasn - "+ sogl)

// }
// getWordStructure("father");

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)