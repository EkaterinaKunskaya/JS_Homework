function Animal(name) {
    this.name = name;
    var self = this;
    var foodAmount = 0;

    this.dailyNorm = function (amount) {
        if (!amount) return formatFoodAmount();

        if (amount < 50) {
            throw new Error("Количество корма не должно быть менее 50 грамм.");
        }
        if (amount > 100) {
            throw new Error("Количество корма не должно быть более 100 грамм.");
        }

        foodAmount = amount;
    };

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }
}

function Cat(name) {
    Animal.apply(this, arguments);
    var animalFeed = this.feed;

    this.feed = function () {
        animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    }

    this.stroke = function () {
        console.log('Гладим кота.');
        return this;
    }

}

var barsik = new Cat('Barsik');
barsik.dailyNorm(60);
barsik.stroke().feed();