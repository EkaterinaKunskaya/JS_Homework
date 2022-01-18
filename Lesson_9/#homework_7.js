//Задание 1.
function Animal(name) {
    this._name = name;
    this._self = this;
    this._foodAmount = 0;
}

Animal.prototype.dailyNorm = function (amount) {
    if (!amount) return this._formatFoodAmount();

    if (amount < 50) {
        throw new Error("Количество корма не должно быть менее 50 грамм.");
    }
    if (amount > 100) {
        throw new Error("Количество корма не должно быть более 100 грамм.");
    }

    this._foodAmount = amount;
}

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
}

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
}

var barsik = new Cat('Barsik');
barsik.dailyNorm(60);
barsik.stroke().feed();


//Задание 2.
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var clone = {};

function deepClone(object, clone) {

    for (var key in object) {

        if (typeof object[key] !== "object" || !object[key]) {
            clone[key] = object[key];
        } else if (typeof object[key] === "object" && !Array.isArray(object[key])) {
            clone[key] = {};
            deepClone(object[key], clone[key]);
        } else {
            clone[key] = [];
            deepClone(object[key], clone[key]);
        }

    }

    return clone;
}

var clonedObj = deepClone(initialObj, clone);
clonedObj.number = 50;
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);
initialObj.method();
clonedObj.method();

console.log(initialObj);
console.log(clonedObj);


//Задание 3.
function deepEqual(obj1, obj2) {
    
    if (obj1 === obj2) {
        return true;
    }

    if (!obj1 || !obj2) {
        return false;
    }

    if (typeof (obj1) === "object" && !Array.isArray(obj1) &&
        typeof (obj2) === "object" && !Array.isArray(obj2)) {
        
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }

        for (var key in obj1) {
            
            if (typeof obj1[key] !== 'object' && typeof obj2[key] !== 'object' &&
                typeof (obj1[key]) !== 'function' && typeof (obj2[key]) !== 'function') {
               
                if (obj1[key] !== obj2[key]) {
                    return false;
                }

            } else if (typeof(obj1[key]) === 'function' && typeof(obj2[key]) === 'function') {

                if (String(obj1[key]) !== String(obj2[key])) {
                    return false;
                }

            }

            if (!deepEqual(obj1[key], obj2[key]) && typeof (obj1[key]) !== 'function' && typeof (obj2[key]) !== 'function') {
                return false;
            }
        }

        return true;
    }

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        
        if (obj1.length !== obj2.length) {
            return false;
        }

        for (var key in obj1) {
           
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    return false;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var comparedObject = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

console.log(deepEqual(initialObj, comparedObject));