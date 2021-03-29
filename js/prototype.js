// Это класс, конструктор, чертеж. Пишем с бльшой буквы
const Car = function (brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};
// Функция Car вызывается в контексте ниже созданого обьекта (myCar, myCar2), this ссылается на етот объект

// Создаем новый экземпляр. Оператор NEW ответственный за создание экземпляра. В результате вызова функции myCar 
// console.log(myCar) под капотом создается пустой обьект, который является экземпляром класса Car
const myCar = new Car('Audi', 'Q3', 35000);
console.log(myCar);



//Лучше передавать объект 
const Car2 = function (config) {
   /*  console.log(config);
    this.brand = config.brand;
    this.model = config.model;
    this.price = config.price; */

    //Лучше деструктуризировать 
    const { brand, model, price } = config;
    this.brand = brand;
    this.model = model;
    this.price = price;

    //Лучше деструктуризировать в самом параметре
    // const Car2 = function ({ brand, model, price } = {}) { - важно указать пустой объект (дефолт.зн.)
    
    //Две копии функции (на каждый экземпляр ниже)
    this.changePrice = function (newPrice) {
        this.price = newPrice;
    };
};

const myCar2 = new Car2({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});
console.log(myCar2);

const myCar3 = new Car2({
    brand: 'BMW',
    model: 'X6',
    price: 50000,
});
console.log(myCar3);

//Вместо копий функций в Car2 можно создавать одну в Car2.prototype (prototype свойство есть только у функции)
//Так мы получаем переиспользование даной функции в прототипе
//Методы хранят в прототипе
Car2.prototype.sayHi = function () {
    console.log('Car2.prototype.sayHi -> this', this);
    console.log('Hello :)');
};
/* Car2.prototype.changePrice = function (newPrice) {
        this.price = newPrice;
    }; */


//Еще пример

const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
};

console.log(User.prototype);

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
};

const Mango = new User({ email: 'oujuiuuuhkjh@gmail.com', password: 1111111 });
Mango.changeEmail('oksanavvisotska@gmail.com');
console.log(Mango);