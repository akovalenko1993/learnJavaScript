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

let i = 3
while (i) {
    alert(i);
    i--
}

