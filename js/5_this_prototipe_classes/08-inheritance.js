/*
 * Наследование
 *  - extends
 *  - super()
 */

// Класс и функция конструктор это одно и тоже.

// Если мы хотим чтобы класс унаследовал свойства родительского класса(к примеру class "Warrior", должен
// унаследовать свойства от своего прототипа(родительского class "Hero" его свойства) мы используем
// extends, вот так:
    
// class Warrior extends Hero {
//         constructor(){}
//     }

// Где Warrior будет являться классом ребенком, а Hero является классом родитель

// Если мы при такой записи при создании новой переменной(экземпляра) сошлемся на класс ребенка:
// const mango = new Warrior({ name: 'mango', xp: 1000 }), то у нас будет ошибка в которой будет указано
// что необходимо объявить super constructor. Чтобы этого не произошло, необходимо в конструкторе класса
// ребенка вызвать конструктор класса родителя это делается просто и первым делом необходимо вызвать super:

// class Warrior extends Hero {
//     constructor() {
//         super();
//         }
// }
    
// Что происходит? Вызов super(); это на самом деле вызов конструктора родителя т.е. строк 20-23:

// class Hero {
//     constructor({ name = 'hero', xp = 0 } = {}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} получает ${amount} опыта`);
//         this.xp += amount;
//     }
// }

// class Warrior extends Hero {
//     constructor(config) {
//         super(config);
//         }
// }

// const mango = new Warrior({ name: 'mango', xp: 1000 });
// console.log(mango)

// Какая цепочка: У const mango вызывается функция Warrior({ name: 'mango', xp: 1000 }); в результате чего
// вызывается конструктор Warrior(строки 45 - 47) куда на место config (стр 45) подставляются
// аргументы: { name: 'mango', xp: 1000 }, далее вызывается super(config); (стр46), что есть вызовом функции
// конструктора родителя(стр.33 - 36) и далее прокидывает super(config) в
// constructor({ name = 'hero', xp = 0 } = {}) на строке 33 и его значения this.name = name; и this.xp = xp;
// на 34-35 строках.

// Упрощенно без объекта и деструктуризации можно записать так:

class Hero {
    constructor(name = 'hero', xp = 0 ) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor(name, xp) {
        super(name, xp);
        }
}

const mango = new Warrior('mango', 1000);
console.log(mango)

// И теперь дообавим новое свойство weapon:

class Hero {
    constructor(name = 'hero', xp = 0 ) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);
        this.weapon = weapon; // добавили новое свойстов не на родителе (т.к. на родителе его не должно быть среди базовых свойств)    
    }
}

const mango = new Warrior('mango', 1000, 'алебарда');
console.log(mango)

mango.gainXp(1000); // добавили новое значение свойства xp через функцию, которая хранится в теле родительского
// класса

// Как это работает ?
    
// console.log(mango.__proto__ === Warrior.prototype); // отсюда видим что эти свойства равны
// console.log('Warrior.prototype', Warrior.prototype); // В Warrior.prototype лежит пустой конструктор, но
// // в его свойстве __proto__ лежит ссылка на Hero.prototype:
// console.log(Warrior.prototype.__proto__ === Hero.prototype); // а уже в нем лежит функция gainXp(amount)

// Опишем цепочку:
// Вызывается через new Warrior('mango', 1000, 'алебарда') строка 104, после чего создается пустой 
// объект const mango, далее из его свойство __proto__ кладется ссылка на Warrior.prototype, а Warrior.prototype
// является тоже объектом у которого тоже есть свойство __proto__ у которого есть ссылка на объект 
// Hero.prototype внутри которого лежит объект конструктор gainXp 
// Наследование происходит 1: 1 объект не может наследовать два одинаковых свойства из разных прототипов(к 
// примеру ребенка и родителя)



class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

// Запись параметров в: constructor({ weapon, ...restProps } - нам необходимо передать только weapon, все
// остальное лежит на родителе, поэтому собераем остальные свойства через rest в ...restProps, передаем на
// строку ниже в super(restProps); и в это restProps собираютс все свойства которые лежат на родителе выше.
// Реальный кейс использования rest

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);

        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

const ajax = new Berserk({
    name: 'ajax',
    xp: 500,
    weapon: 'axe',
    warcry: 'waaaaaaaah',
});

// console.log(ajax);

// ajax.babyRage();
// ajax.attack();
// ajax.gainXp();

class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} что-то там кастует 🧙‍♂️`);
    }
}

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
// // console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );