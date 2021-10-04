// null, undefined, string, number, object, boolean,symbol   - типы данных
//                                                        всего их 7
// all things without 'object' is - elemmentary type

//console.log(typeof 0)               // вот так парсит только первую строку
//console.lof(typeof true)
//console.log(typeof 'Javascript'); // "", '', ``
//console.log(typeof undefined)
//console.log(typeof Date)
//console.log(typeof Math)



//console.log(typeof 0)               // а вот так все остальное                => number
//console.log(typeof true)                                                      => boolean
//console.log(typeof 'Javascript'); // "", '', ``                               => string
//console.log(typeof undefined)                                                 => undefined
//console.log(typeof Date)            //                                        => function
//console.log(typeof Math)            //                                        => object

//console.log(typeof Symbol(description: 'JS'));    !!!!!!!это не работает :тип данных Symbol
//console.log(typeof null)                //                                      => object   !!!!!!!!!! неточность функции typeof!!!!!!!!!!!!
//console.log(typeof function () { });    //                                      => function
//console.log(typeof NaN);                //                                      => number
                                        //          !!!!!!!!!  NaN - Note a Number          !!!!!!!!!! неточность функции typeof!!!!!!!!!!!!
//console.log(typeof undefined * 1)          //                                     => NaN                 <=!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 



// null от undefined отличается тем, что undefined означает что переменная
//  не определена... т.е. определена словом let но значение не присвоено
// + функции которые не возвращают ничего в консоль имеют тип данных undefined
// null же это обнуленное какое-то значение


// ПРИВЕДЕНИЕ ТИПОВ
//let language = 'JavaScript';
//if (language) {
//    console.log('the best language is:', language)
//}

// '', 0, null, undefined, NaN, false - значение аргумента глобальной функции Boolean = false!!!!!!!! ВАЖНО ЗНАТЬ
//                                                                                                      ПОКА НЕ ПОНЯТНО!!!!!!!!!!!
//console.log(Boolean(''))//                                                          => false
//console.log(Boolean(' '))///                                                        => true
//console.log(Boolean('JS'))//                                                        => true
//console.log(Boolean([]))// !!!!!!!!!!!!!!! однако пусто массив в результате даст    => true         !!!!!!!ВНИМАНИЕ!!!!!!!!
//console.log(Boolean({}))    //!!!!!!!! пустой обьект!!!!!!!                         => true
//console.log(Boolean(function () { }))   //   !!!!!!!!!ПУСТАЯ ФУНКЦИЯ                  => trut