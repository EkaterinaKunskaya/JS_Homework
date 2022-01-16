function Animal(name) {
    this.name = name;
    var self = this;
    var foodAmount = 0;

    this.dailyNorm = function (amount) {
        if (!amount) return formatFoodAmount(foodAmount);

        if (amount < 50) {
            throw new Error("Количество корма не должно быть менее 50 грамм.");
        }
        if (amount > 100) {
            throw new Error("Количество корма не должно быть более 100 грамм.");
        }

        foodAmount = amount;
        formatFoodAmount(foodAmount)
    };

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };

    function formatFoodAmount(foodAmount) {
        return foodAmount + ' гр.';
    }
}

function Cat(name) {
    Animal.call(this);
    var animalFeed = this.feed;

    var self = this;

    self.feed = function () {
        animalFeed();
        console.log('Кот доволен ^_^');
        return self;
    }

    self.stroke = function () {
        console.log('Гладим кота.');
        return self;
    }

}

var barsik = new Cat('Barsik');
barsik.dailyNorm(60);
barsik.stroke().feed();