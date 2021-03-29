//******************************* Степень с двух введенных пользователем чисел */   
//let base = prompt('Дай число');
//base = Number(base);
//console.log(base);

//let power = prompt('Дай cтепень');
//power = Number(power);
//console.log(power);

//const result = base ** power;

//console.log(result);



//*******************************Генерируем целые рандомные числа от до */    
//const max = 100;
//const min = 10;

//const result = Math.round(Math.random() * (max - min) + min);

//console.log(result);



//******************************Строка гость х у поселяется в z номере q */    
//const firstName = prompt('Имя');
//console.log(firstName);

//const lastName = prompt('Фамилия');
//console.log(lastName);

//const room = 125;
//const type = 'VIP';

//const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в номер ${room} это ${type}`;

//console.log(welcomeMsg);



//******************************* Выбор стоимости отеля по количеству звезд */    
//const stars = 1;
//let price;

// вариант 1
//if (stars === 1) {
//    price = 20;
//} else if (stars === 2) {
//    price = 30;
//} else if (stars === 3) {
//    price = 50;
//} else if (stars === 4) {
//    price = 70;
//} else if (stars === 5) {
//    price = 120;
//} else {
//    console.log('Такого количества звезд нет');
//}

// вариант 2
//switch (stars) {
//    case 1:
//        price = 20;
 //       console.log('Дешево не значит плохо');
//        break;
//    
//    case 2:
//        price = 30;
//        break;
 //   
//    case 3:
 //       price = 50;
 //       break;
 //   
 //   case 4:
 //       price = 70;
 //       break;
 //   
 //   case 5:
 //       price = 120;
 //       break;
 //   
 //   default:
//        console.log('Такого количества звезд нет');
//}

// условие или вариант 1
//if (stars === 1 || stars === 2) {
//    price = 20;
//} else if (stars === 3 || stars === 4) {
//    price = 50;
//} else if (stars === 5) {
//    price = 120;
//} else {
//    console.log('Такого количества звезд нет');
//}


// условие или вариант 2
//switch (stars) {
//    case 1:
//    case 2:
//        price = 20;
 //       console.log('Дешево не значит плохо');
//        break;
//    
//    case 3:
//    case 4:
 //       price = 50;
 //       break;
 //   
 //   
 //   case 5:
 //       price = 120;
 //       break;
 //   
 //   default:
//        console.log('Такого количества звезд нет');
//}

//console.log(price);



//*********************************** Цикл for */      
//for (let i = 50; i <= 100; i += 2) {
//    console.log(i);
//}

//console.log('fdfs');



//***********************************Посчитать зп работников */ 
//const minSalary = 500;
//const maxSalary = 5000;
//const employees = 9;
//let totalSalary = 0;

//for (let i = 1; i <= employees; i += 1) {
//    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//    console.log(`ЗП работника номер ${i} - ${salary}`);

//    totalSalary += salary;
//}

//console.log('TotalSalary:', totalSalary);



//***********************************Посчитать суму парных чисел от до */  
//const min = 5;
//const max = 20;
//let total = 0;

//for (let i = min; i <= max; i += 1) {
//    console.log(i);
//    if (i % 2 === 0) {
//        console.log('четное:', i);
//        total += i;
//    }
//}

//for (let i = min; i <= max; i += 1) {
//    if (i % 2 !== 0) {
//        console.log('не четное:', i);
 //       continue;
//    }

 //   console.log('четное:', i);
//    total += i;
//}

//console.log('total:', total);



//***********************************Задачки (снять деньги, оплатить покупку) */ 
//const payment = 5000;
//let balance = 8000;

//console.log(`Если заказ ${payment} проверяем кол. доступных средств`);

//if (payment <= balance) {
//    console.log('ok, снимаем деньги');

//    balance -= payment;

//    console.log(`На счету осталось ${balance}`);
//} else {
//    console.log('На счету осталось недостаточно средств');
//}

//console.log('Операция завершена');



//*************************************Динамическая скидка */        
//let totalSpent = 55000;
//let payment = 500;
//let discount = 0;

//if (totalSpent < 100) {
//    console.log('Не партнер, скидка 0%');
//} else if (totalSpent >= 100 && totalSpent < 1000) {
//    console.log('Бронзовый партнер, скидка 2%');
//    discount = 0.02;
//} else if (totalSpent >= 1000 && totalSpent < 5000) {
//    console.log('Серебряный партнер, скидка 5%');
 //   discount = 0.05;
//} else {
//    console.log('Золотой партнер, скидка 10%');
//    discount = 0.1;
//}

//payment = payment - payment * discount;
//  payment -= payment * discount;
//console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
//totalSpent += payment;
//console.log(`Общая сумма потраченная в магазине ${totalSpent}`);



//************************************Проверяем на спам */ 
//function checkForSpam(message) {
//  let result;
//  const normalizedToLowerCase = message.toLowerCase();
//  if (normalizedToLowerCase.includes('spam') || normalizedToLowerCase.includes('sale')) {
//    result = true;
//  } else {
//    result = false;
//  }
// result = normalizedToLowerCase.includes('spam') || normalizedToLowerCase.includes('sale') ? true : false;
//  return result;
//}
//console.log(checkForSpam('[SPAM] How to earn fast money?'));



//************************************Подмасивы */ 
//const matrix = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9],
//];
//let total = 0;

//for (let i = 0; i < matrix.length; i += 1) {
//    console.log('Подмассив матрицы matrix[i]: ', matrix[i]);
//    for (let j = 0; j < matrix[i].length; j += 1) {
//        console.log('Элемент подмассива матрицы matrix[i][j]:', matrix[i][j]); 
//        total += matrix[i][j];    
//    }
//}

//console.log(total);

//const clients = ['Mango', 'Poly', 'Ajax'];

//console.log(clients.join(' / '));



//const numbers = [51, 18, 13, 24, 7, 85, 19];
//let smallestNumber = numbers[0];
//for (const number of numbers) {
//    if (number < smallestNumber) {
//        smallestNumber = number;
//    }
//}
//console.log(smallestNumber);



//let bigestNumber = numbers[0];
//for (const number of numbers) {
 //   if (number > bigestNumber) {
//        bigestNumber = number;
//    }
//}
//console.log(bigestNumber);



//function getExtremeElements(array) {
//    const arryLength = array.length - 1;
//    const lastElement = array[arryLength];
 //   const firstElement = array[0];
//  return [firstElement, lastElement];  
 // }
//console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));



//function splitMessage(message, delimeter) {
 // let words;
 // words = message.split(delimeter);
 // return words;
//}
//console.log(splitMessage('Манго спешит на поезд', ' '));



//function calculateEngravingPrice(message, pricePerWord) {
  //const wordsInMessage = message.split(' ');
  //const wordsNumber = wordsInMessage.length;
 // const result = wordsNumber * pricePerWord;
  //return result;
//}
//console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));


//const a = 'JavaScript у меня в крови';
//const b = a.split(' ');
//console.log(b.length);



//************************************соиденить два массива, задать кол. элементов в новом массиве
/* function makeArray(firstArray, secondArray, maxLength) {
  const allArray = firstArray.concat(secondArray);
  if (allArray.length > maxLength) {
    return allArray.slice(0, maxLength);
  }
  return allArray;
}
console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3)); */



//************************************посчитать тотал колличество
/* function calculateTotal(number) {
  let total = 0;
  for (let i = 1; i < number; i += 1) {
    console.log(i);
      total += i;
  }
     return total;
}
console.log(calculateTotal(10)); */


//***********************************убрать из строки слова короче ... букв
/* function removeWords(str, num) {
  const array = str.split(' ');
  const arrayNew = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length <= num) {
      arrayNew.push(array[i]);
    }
  }
  const result = arrayNew.join(' ');
  return result;
}
console.log(removeWords('Манго Поли Аякс Челси', 4)); */



//***********************************найти самое длинное слово
/* function findLongestWord(string) {
  const arrey = string.split(' ');
  let longestWord = '';
  for (let i = 0; i < arrey.length; i += 1) {
    if (arrey[i].length > longestWord.length) {
      longestWord = arrey[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
 */


//***********************************показать целые числа от до заданых парамнтров
/* function getEvenNumbers(start, end) {
  const arrey = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arrey.push(i);
    };
  }
    return arrey;
}
console.log(getEvenNumbers(2, 5)); */



/* function includes(array, value) {
let result;
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
    if (array[i] === value) {
      result = true;
      break;
    }
    if (array[i] !== value) { 
     result = false;
    }
  }
return result;
  
}
console.log(includes([5, 10, 20, 30], 25));
const sss = [3];
const aaa = sss.join('');
console.log(aaa); */



//****************************вывести цвета из объектов */
/* const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  console.log(color);
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
};
console.log(hexColors); */



//*******************************вывести цену продукта */
//const products = [
//  { name: 'Радар', price: 1300, quantity: 4 },
//  { name: 'Сканер', price: 2700, quantity: 3 },
//  { name: 'Дроид', price: 400, quantity: 7 },
//  { name: 'Захват', price: 1200, quantity: 9 },
//];
//function getProductPrice(productName) {
//  for (const product of products) {
 //   if (product.name === productName) {
//      return product.price;
 //   }
//  }
//  return null;
//}
//console.log(getProductPrice('Дроид'));



//********************** вернуть массив значений свойства объекта */
/* const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const valuesArray = [];
  for (const product of Object.values(products)) {
    if (propName === 'name') {
      valuesArray.push(product.name);
    } else if (propName === 'price') {
      valuesArray.push(product.price);
    } else if (propName === 'quantity') {
      valuesArray.push(product.quantity);
    } 
  }
  return valuesArray;
}
console.log(getAllPropValues('price')); */



//*******************вернуть сумму цена товара на его колличество с массива выше* /
/* function calculateTotalPrice(productName) {
  let result = 0;
  for (const product of products) {
    if (productName === product.name) {
       result = product.price * product.quantity;
    }
  }
return result;
}
console.log(calculateTotalPrice('Радар')); */



//*******************вернуть данные из двух объектов в виде одного объекта */
/* function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  const thisFunction = {
    category,
    priority,
    completed,
  }
  return { ...thisFunction, ...data, };
}
console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' })); */



//*******************сумма всех случайных аргументов */
/* function add(...args) {
  let total = 0;
  for (const argument of args) {
    total += argument;
  }
  return total;
}
console.log(add(15, 30));

const summ = (...args) => {
  let total = 0;
  for (const argument of args) {
    total += argument;
  }
  return total;
}
console.log(summ(20, 30, 30)); */



//*******************заменить название книги в массиве элементов */
/* const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    const oldBookIndex = this.books.indexOf(oldName);
	  this.books.splice(oldBookIndex, 1, newName);
    return this.books;
  },
};
console.log(bookShelf.updateBook('Страж снов', 'Хроники подземелий')); */



//*******************добавить, удалить, заменить зелье в массиве объектов */
/* const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    this.potions.push(potionName);
    return this.potions
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
      };
    };
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const element of this.potions) {
      if (oldName === element.name) {
        element.name = newName;
      };
    };
     return this.potions;
  },
};
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')); */



//***************************callback  функция 1*/
/* const filter = (array, test) => {
  const arrayNew = [];
  for (const el of array) {
    const passed = test(el);
    if (passed) {
      arrayNew.push(el);
    }
  }
  return arrayNew;
};
const callback1 = array => filter(array, value => value > 10);
//const callback2 = value => value < 10;

console.log(callback1([10, 8, 15, 16, 4, 22, 7, 36, 2]));
//console.log(filter([10, 8, 15, 16, 4, 22, 7, 36, 2], callback2)); */



//***************************callback  функция 2*/
/* const filter2 = (array, test2) => {
  const newArray = [];
  for (const element of array) {
    if (test2(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const filterMin = (value, array) => filter2(array, element => element <= value);
console.log(filterMin(5, [7, 3, 1, 10, 8, 5]));

const filterMax = (value, array) => filter2(array, element => element > value);
console.log(filterMax(5, [7, 3, 1, 10, 8, 5])); */



//**********************************************************замыкание */
//Имя повара не меняется(но может), блюда постоянно
/* const makeSheff = name => {
  const makeDish = dish => {
    console.log(`${name} готовит ${dish}`);
  }
  return makeDish;
};
const Oksana = makeSheff('Oksana');
Oksana('котлеты');
Oksana('салаты');
const Pasha = makeSheff('Pasha');
Pasha('шашлык');
Pasha('корзинки с тунцом'); */



//Порядковый номер меняется(каждый новый список с №1), что в списке передаем при вызове
/* let a = 1;
const incrementFirstName = () => {
  a++;
  return a - 1;
  // Потому что let a = 1, если с 0, былобы ок
};
let b = 1;
const incrementLasttName = () => {
  b++;
  return b - 1;
}; */
//Результат предыдущей функции - операция, функции ниже - сама фцнкция. 
/* const getIncrement = () => {
  let a = 1;
   const increment = () => {
    a++;
    return a - 1;
  }
  return increment
};
const counter1 = getIncrement();
const counter2 = getIncrement();
console.log(`${counter1()}. Оксана`);
console.log(`${counter1()}. Диана`);
console.log(`${counter1()}. Ира`);

console.log(`${counter2()}. Мики`);
console.log(`${counter2()}. Дики`);
console.log(`${counter2()}. Ики`); */



//Пуш своими руками<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/* Array.prototype.mypush = function (element) {
  }
const arr = [1, 2];
arr.mypush(3); //Этот пуш написаный мной
console.log(arr); // [1, 2, 3]
arr.mypush(4);
console.log(arr);
//this[this.length] = element;
//  return this; */

//Исправить ошибки<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/* const product = {
  price: 500,
  showPrice() {
    console.log(this.price);
  }
};
function callAction(action) {
  action();
};
callAction(product.showPrice); */


//Проверить пароль<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/* function makePasswordCheacker(password) {
  
};
const PasswordCheacker = makePasswordCheacker('ooooo');
console.log(PasswordCheacker('ooooo'));
console.log(PasswordCheacker('jhkjjl'));
 */


//Хранение скидки<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/* function applyDiscount(discount) {
  return price => price - price * discount;
};
const withBaseDiscount = applyDiscount(0);
const withSilverDiscount = applyDiscount(0.05);
const withGoldDiscount = applyDiscount(0.1);
console.log(withBaseDiscount(100));
console.log(withSilverDiscount(100));
console.log(withGoldDiscount(100)); */




//***************************callback function */
//function deliverPizza(pizzaName) {
//  return `Доставляем пиццу ${pizzaName}.`;
//}

//function makePizza(pizzaName) {
//  return `Пицца ${pizzaName} готовится, ожидайте...`;
//}

//function makeMessage(pizzaName, callback) {
//  return callback(pizzaName);
//}

//console.log(makeMessage('Роял гранд', makePizza));



//***************************callback function результат на основе случайных чисел*/
//function processCall(recipient) {
//  const isRecipientAvailable = Math.random() > 0.5;
//  if (!isRecipientAvailable) {
//    console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//  } else {
//    console.log(`Соединяем с ${recipient}, ожидайте...`);
//  }
//}
//processCall('Манго');

/* function processCall(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступеность абонента случайным числом, отправляя результатом первую либо вторую функцию
  const isRecipientAvailable = Math.random() > 0.5;
  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }
  onAvailable(recipient);
}
function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}
function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}
function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
  // Логика записи голограммы
}
processCall('Манго', takeCall, activateAnsweringMachine);
processCall('Поли', takeCall, leaveHoloMessage); */



//***************************callback function если в массиве есть, выводим ф1, нет - ф2*/
/* const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`); 
    }
    return onSuccess(pizzaName);
  },
};
function makePizza(pizzaName) {
  console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
}
function onOrderError(error) {
  console.log(`Ошибка! ${error}`);
}
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);
 */


//***************************массив**************************/
//***************************массив**************************/

/* const arrayTest = [2, 'hello', 4, 8, 'London'];
//получить массив
console.log(arrayTest);
//получить элемент
console.log(arrayTest[0]);
//получить 2 элемента
console.log(arrayTest[0], arrayTest[3]);
//элемент под индексом 4 и еще один массив
console.log(arrayTest[0, 4], [2]);
//переопределение
arrayTest[2] = 10;
console.log(arrayTest);
//Длина массива
console.log(arrayTest.length);
//сократить
arrayTest.length = 3;
console.log(arrayTest);

const arrayTest1 = [5, 'world', 20, 80, 'is a capital'];
//соиденить
//const arrayTwo = arrayTest.concat(arrayTest1);
const arrayTwo = [...arrayTest, ...arrayTest1];
console.log(arrayTwo);
//Итерация по массиву  !!!!!!!!!!!!!!!!! (обрати внимание на второй пример)
for (const element of arrayTwo) {
  console.log(element);
};
console.log('');
for (let i = 0; i < arrayTwo.length; i += 1) {
     console.log(arrayTwo[i]);
};
for (let i = 0; i < arrayTwo.length; i += 1) {
  const validNumb = Number(arrayTwo[i]);
  if (Number.isNaN(validNumb)) {
    continue;
  }
  console.log(arrayTwo[i]);
};

arrayTest1.push('Mammy', 'Poly');
arrayTest1.pop();
console.log(arrayTest1.indexOf('world'));
arrayTest1.unshift('Mammy', 'Loly');
arrayTest1.shift();
console.log(arrayTest1);
const arrayTestJoin = arrayTest1.join(', /');
console.log(arrayTestJoin);
const arrayTestSplit = arrayTestJoin.split(' ');
console.log(arrayTestSplit);
const arrayTestSlice = arrayTestSplit.slice(5, 9);
console.log(arrayTestSlice);
arrayTestSlice.splice(3, 1, 'of');
console.log(arrayTestSlice); */


/* const potionsF = [
  { name: 'Зелье скорости', price: 460 },
  { name: 'Дыхание дракона', price: 780 },
  { name: 'Каменная кожа', price: 520 },
];

function value(name) {
  return potionsF.indexOf(name) + 1;
};

console.log(value('Дыхание дракона')); */




//************************************************ */
/* const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];
// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${ position }-й в очереди.`;
};
//const messages = orders.map(function(item) {
//  return composeMessage.call(item, orders.indexOf(item) + 1);
//});
// Правильная запись 
const messages = orders.map((order, index) => composeMessage.call(order, index + 1));
console.log(messages);

const messagesS = orders.map(item => `Готовим ${item.dish} для ${item.email}. Ваш заказ ${ orders.indexOf(item) + 1 }-й в очереди.`
);
console.log(messagesS); */





//***************************************Рекурсия  https://learn.javascript.ru/recursion*/
/* const number = value => {
  console.log(value);
  if (value < 10) {
    return number(value + 1) //обрати внимание на запись
  }
}
number(0) */
/* const recurtion = a => {
  console.log(a);
  if (a < 10) {
    recurtion(a + 1)
  }
};
recurtion(8); */

//***************************************bind метод*/
/* const pizzaPalace = {
  company: 'Pizza Palace',
};
const burgerShack = {
  company: 'Burger Shack',
};

function composeMessageBind(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}

const pizzaPalaceComposer = composeMessageBind.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
console.log(pizzaPalaceMessage);
const burgerShackComposer = composeMessageBind.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');
console.log(burgerShackMessage); */

//***************************************Пример использования bind метода*/
/* const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList); */
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
/* const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk'] */

/* function Storage (array) {
  this.items = array;
};
Storage.prototype.getItems = function getItems() {
  return this.items;
};
Storage.prototype.addItem = function addItem(newItem) {
   this.items.push(newItem);
};
Storage.prototype.removeItem = function removeItem(item) {
  const index = this.items.indexOf(item);
  this.items.splice(index, 1);
};
// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"] */


/* function StringBuilder (baseValue) {
  this.value = baseValue;
};
StringBuilder.prototype.getValue = function getValue() {
  return this.value;
};
StringBuilder.prototype.padStart = function padStart(str) {
  this.value = str + this.value;
};
StringBuilder.prototype.padEnd = function padEnd(str) {
  this.value += str;
};
StringBuilder.prototype.padBoth = function padBoth(str) {
  this.value = str + this.value + str;
};

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^=' */


/* class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;
  constructor({ price }) {
    this.#price = price;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    if(newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
  }
  // Пиши код выше этой строки
}
const audi = new Car({price: 35000});
console.log(audi.price); // 35000
audi.price = 49000;
console.log(audi.price); // 49000
audi.price = 51000;
console.log(audi.price); // 49000 */


//Разобрать синтаксис<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  accessLevel;
  
  constructor ({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser */


class User {
  email;
  constructor(email) {
    this.email = email;
  }
  get email() {
    return this.email;
  }
  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
  blacklistedEmails = []; 
  
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  
   isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
  
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 
