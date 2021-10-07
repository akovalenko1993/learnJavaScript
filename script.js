// 
//let admin;
//let name;
//name = 'Джон';
//admin = name;
//alert(admin);
//

//let nameOfPlanet;
//nameOfPlanet = 'Earth';
//alert(nameOfPlanet);

//let name = 'Oleksii';
//alert(`Hello ${1}`);
//alert(`Hello ${"name"}`);
//alert(`Hello ${name}`);



//userAge = prompt('howOldAreYou', []);
//alert(userAge);

//let age = prompt('сколько тебе лет', '');
//alert(`тебе ${age} лет`);
//alert(typeof age);                              // тут переменная age это string
//let halfAge;
//halfAge = age / 2;                              
//alert(halfAge);                                 // ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ!!!!!!!!!!!!!!!!!!!!!!!!
//alert(typeof halfAge);                          // тут переменная halfAge это number

//let userName = prompt('как тебя зовут', '');
//let userSecondName = prompt('как твоя фамилия', '');
//alert(`твое имя ${userName}, твоя фамилия ${userSecondName}`);
//fullName = userName + ' '+userSecondName;
//alert(userName + ' ' + userSecondName);
//alert(fullName);
//alert(typeof fullName);
//psevdoFullName = Boolean(fullName);
//alert(psevdoFullName);



//let a = true;                                      //                    !!!!
//b = Number(a);                                     //       ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ
//alert(typeof b);                                   //       ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ
//alert(b);                                          //                   !!!!!!


//let a = prompt('Введите число 1', 1);
//let b = prompt('Введите число 2', 2);
//let result = a > b;
//alert(result);

//alert('Я' > 'А');
//alert('Коты' > 'Кода');
//alert('Сонный' > 'Сон');
//alert('A' > 'a');

//let year = prompt('Input Year',);
//let condition = (year == 2015);
//if (condition) {
//    alert('Your Answer is TRUTH');
//} else {
//    alert('Your Answer Is LIE')
//}

//let first_number=prompt('Input First Number','');
//let second_number=prompt('Input Second Number','');
//let a;
//a = (+first_number > +second_number);
//alert(a)
//if (a)
// alert('firstnumber is better') 
// else 
//{ alert('secondNumber is Better') }


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//let x1//////////////////////////////////////////////////можно ли через ф-кцию prompt спросить о правильности уравнения в этом примере
//et x2//////////////////////////////////////////////////строка 91
//let x3
//alert('Хочешь решить квадратное уравнение');
//x1 = prompt('Input first coefficient','');
//x2 = prompt('Input seccond coefficient','');
//x3 = prompt('Input third coefficient','');
//let coefficients = [+x1,+x2,+x3]
//function printEquation(coefficients) {
//    console.log('Это уравнение, которое нужно решить?   ',coefficients[0],'*x^2',coefficients[1],'*x',coefficients[2]);
//}
//
//
//
//printEquation(coefficients)
//let equationTruth = prompt('Посмотри в консоль! Введи 1 - если да, 0 - если нет','')

//if (Boolean(equationTruth)) {//////////////////////////////////////////////////////////////можно ли так писать????
//    let D = (x2 ** 2 - 4 * x1 * x3)
//    console.log('D=',D)
//    let X1
//    let X2
//    if (D > 0) {
//        X1 = ((-x2 + (D ** (1 / 2))) / (2 * x1))
//        X2 = ((-x2 - (D ** (1 / 2))) / (2 * x1))
//        console.log('X1=',X1)
//        console.log('X2=',X2)
//        alert(`X1= ${X1}`)
//       
//        
//    }
//    else if (D == 0) {
//       X1 = ((-x2) / (2 * x1))
//        console.log('X1=',X1)
//        alert('X1=',X1)
//        
//    }
//    else if (D < 0) {
//        alert('Maybe D<0... What Do You Think ???');
//    }
//} else {
//    alert('Ну тогда не проверяй меня на крепость нервов')
//}
//let a = 5

 //   console.log('say_HI', a);

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//          комманды как %% || 
//          == === =
//          and '0'==false or '0'===false
//
//
//
//let userName = prompt('Input User Name?', '');
//lengthOfUserName = userName.length;
//let i = 0;
//for (i; i < lengthOfUserName; i++) {
//    alert(userName[i]);
//}


//let phrases = [
//    'Звучит неплохо',
//    'Да, это определенно надо сделать',
//    'Не думаю, что это хорошая идея',
//    'Может, не сегодня?',
//    'Компьютер говорит нет',
//];
//console.log(phrases[Math.floor(Math.random() * phrases.length)])

//let randomBodyParts = ['нос', 'глаз', 'ухо'];
//let randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
//let randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];
//
//let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]; //рандом из randomBodyParts = ['нос', 'глаз', 'ухо'];
//let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)]; // рандом из randomAdjectives = ['вонючая', 'унылая', 'дурацкая'];
//let randomWord=randomWords[Math.floor(Math.random() * randomWords.length)]; // рандом из let randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];
//console.log('У тебя',randomBodyPart,'как',randomAdjective,'',randomWord);
//
//console.log(randomBodyParts.join(' '))


/////////////////////////РАЗБЕРЕМ СТРОКУ НА СЛОВА СОЗДАДИМ МАССИВ ИЗ ЭТИХ СЛОВ/////////////////////////
//let thisString;
//thisString = prompt('введи строку', '');
//let a=0;
//let parsedStringArray = [''];
//let j = 0;
//let emptyesPosition = [];
//for (let i = 0; i < thisString.length; i++) {
//    if (thisString[i] != ' ') {
//                parsedStringArray[j] = parsedStringArray[j] + thisString[i]
//    } else {
//        ++j;
//        parsedStringArray[j]=''
//    }

//}
//for (a = 0; a < parsedStringArray.length; ++a) {}
// fsdf
//if (parsedStringArray[a] == '') {
//    parsedStringArray[a-1]=parsedStringArray[a];
//console.log(parsedStringArray)


///////////////////////////////////////////////////    НУ  ЭТО  ВООБЩЕ ЖЕСТЬ ПРИКОЛ     ```````````````````````````````````
//let x=1;
//(x>0) && alert ('Greater than Hero');
//undefined
//typeof null
//'object'
//Boolean(null)
//false
//let age=prompt('Input your age!');
//if (age>=19)&&(age<=90);
//console.log('VSE OK');
//VM693:2 Uncaught SyntaxError: Unexpected token '&&'
//let age=prompt('Input your age!');
//if (age>=19)&&(age<=90);
//console.log('VSE OK');
//VM696:2 Uncaught SyntaxError: Unexpected token '&&'
//let age=prompt('Input your age!');
//let ageInDiapasonTruth=(age>=19)&&(age<=90)
//if ageInDiapasonTruth
//console.log('VSE OK');
//VM764:3 Uncaught SyntaxError: Unexpected identifier
//let age=prompt('Input your age!');
//let ageInDiapasonTruth=(age>=19)&&(age<=90)
//If ageInDiapasonTruth
//console.log('VSE OK');
//VM773:3 Uncaught SyntaxError: Unexpected identifier
//let age=prompt('Input your age!');
//let ageInDiapasonTruth=(age>=19)&&(age<=90)
//if ageInDiapasonTruth
//console.log('VSE OK');
//VM782:3 Uncaught SyntaxError: Unexpected identifier
//let age=prompt('Input your age!','');
//let 
//if ageInDiapasonTruth
//console.log('VSE OK');
//VM818:3 Uncaught SyntaxError: Unexpected identifier
//let age=5;
//let ageBigger19=(age>19);
//console.log(ageBigger19);


//let age=5;
//let ageBigger19=(age>19);
//let ageSmaller90=(age<90)
//let ageInDiapasonTruth=ageBigger19 && ageSmaller90
//console.log(ageInDiapasonTruth)


//let age=5;
//let ageBigger19=(age>19);
//let ageSmaller90=(age<90)
//let ageInDiapasonTruth=ageBigger19 && ageSmaller90
//console.log(ageInDiapasonTruth)


//let age=50;
//let ageBigger19=(age>19);
//let ageSmaller90=(age<90)
//let ageInDiapasonTruth=ageBigger19 && ageSmaller90
//console.log(ageInDiapasonTruth)

//let age=20;```````````````````````````````````
//if (age => 19 && age <= 90) ``````````````````ВОТ ПРАВИЛЬНЫЙ ПРИМЕР ПРОВЕРКА 19<=age<=90;
//console.log('VSE OK')`````````````````````````

//let firstName = null;
//let secondName = null;
//let thirdName;
//let fourthName = 'djfjg';
//alert(firstName || secondName || thirdName || fourthName)
//alert(firstName ?? secondName ?? thirdName ?? fourthName)


//let i = 3
//do {
//    alert(i);
//    --i
//}
//while (i);

//for (i = 3; i > 0; i--)
//    alert(i);
//
//let sum = 0;

//while (true) {

//  let value = +prompt("Введите число", '');

 // if (!value) break; // (*)

 // sum += value;
//alert( 'Сумма: ' + sum );
//}
//alert( 'Сумма: ' + sum );

//for (i = 1; i <= 10; i++) {
//    if (i % 2 == 0)
 //       alert(i)
//}


//let i = 0;
//while (i < 3){
//    alert(`number ${i}!`);
//    i++
//}

//let numberFromUser;
//outer: while (true) {
//    numberFromUser = +prompt('input your number please');
//    if (numberFromUser > 100 || !numberFromUser) break outer;
//    }
//alert(numberFromUser);

//let name = "Oleksii";
//switch (name) {
//    case 'Vitaliy':
//        alert('Vitaliy');
//        break
//    case 'Oleksii':
//        
//          alert('Oleksii');
//        break
//}


//function showMessage(from, text='text dont added') {

 // from = '*' + from + '*'; // немного украсим "from"

 // return (from + ': ' + text) ;
//}

//let from = "Аня";
//showMessage(from); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
//alert(from); // Аня
//let x = showMessage(from,"ffff");
//alert(x);

//function checkAge(age) {
//    if (age > 18)
//        return true;
//    else
//        return false;
//}
//let age = prompt("Input your age", '');

//if (checkAge(age)) 
//    alert('Acces confirm');

//else
//    alert('А родители разрешили');

//let n = 5;/
//function showPrimes(n) {

  //for (let i = 2; i < n; i++) {
    //if (!isPrime(i)) continue;

    //alert(i);  // простое
  //}
//}

//function isPrime(n) {
 // for (let i = 2; i < n; i++) {
  //  if ( n % i == 0) return false;
 // }
 // return true;
//}

//showPrimes(n);

//let a = 5
//let b = 4
//function min(a, b) {
// return (+a < +b) ? console.log(a) : console.log(b)
//}
//min(a, b);
//min(2, 1);

//function pow(x, n) {
// / return console.log(x **= n)
//}
//pow (4,3)

//let sayHi = function () {
//  alert('ПРивет');
//};
//let func = sayHi;
//sayHi();
//func();
//                                                                FUNCTION EXPRESSION
//function ask(question, yes, no) {
  //if (confirm(question)) yes()
  //else no();
//}
//function showOK() {
//  alert("You are accept")
//}
//function showCancel() {
//  alert("you are decline");
//}
//ask("Вы согласны?", showOK, showCancel)

//ask('Вы согласны?',
//    function () { alert('you are accept') },
// function () { alert('you are decline')} 
//)

 

//let sum = (a, b) => a + b;
//alert(sum(4, 5));


//let sayHi = () => alert('Hello');
//sayHi();


//let age = prompt('Input your Age', 18);
//let checkAge = (age < 18) ?
//  () => alert('Your age is less than 18') :
//  () => alert('Your age is more than 18');
//checkAge();


//let sum = (a, b) => {
//  result = a + b;
//  return result;
///};
//alert(sum(1, 2));


//function ask(question, yes, no) {
//  if (confirm(question)) yes()
 // else no();
//}

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function () { alert("Вы согласились.") },
  function () { alert("Вы отменили выполнение.") }
);