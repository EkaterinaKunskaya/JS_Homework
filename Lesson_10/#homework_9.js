//Задание 1.
function arrayTransformation(array) {
  return array.map(function (name) {
    return {
      name: name
    };
  });
}

arrayTransformation(['Vasya', 'Petya', 'Katya']);


//Задание 2.
function showCurrentTime(array) {
  return array.reduce(function (newString, current) {
    return newString + ' : ' + current;
  }, 'Текущее время');
}

showCurrentTime(['00', '13', '24']);

//Задание 3.
function countVowels(text) {
  var arrayLetters = text.toLowerCase().split('');
  var vowels = ['а', 'у', 'о', 'и', 'э', 'ы', 'я', 'ю', 'е', 'ё', 'a', 'e', 'i', 'o', 'u', 'y'];

  return arrayLetters.reduce(function (counter, value) {
    if (vowels.indexOf(value) !== -1) {
      counter++;
    }
    return counter;
  }, 0);
}

countVowels('котик');
countVowels('Буря мглою небо кроет.');
countVowels('Hi!');


//Задание 4.
function countSentencesLetters(text) {
  var result = deleteEmptyValues(text.split(/[!?.]/));

  result.forEach(function (current) {
    console.log(current + ' : Letters quantity is: ' + current.split(' ').join('').split(',').join('').length);
  });

}

function deleteEmptyValues(array) {
  var newArray = [];
  array.forEach(function (current) {
    if (current !== "") {
      newArray.push(current.trim());
    }
  });
  return newArray;
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');


//Задание 5.
function findFirstRepeatedWord(text) {
  var arrayOfWords = deleteEmptyValues(text.split(/[!?.,:;"]/).join(' ').toLowerCase().split(' '));
  var intermediateObject = {};

  arrayOfWords.forEach(function (i) {
    (intermediateObject[i] == undefined) ? intermediateObject[i] = 1 : ++intermediateObject[i];
  });

  var finalObject = Object.keys(intermediateObject).map(function (property) {
    return {
      word: property,
      count: intermediateObject[property]
    };
  });

  finalObject.sort(function (a, b) {
    return b.count - a.count;
  });

  console.log('Максимальное число повторений у слова ' + '"' + finalObject[0].word + '" - ' + finalObject[0].count + '.');

}

function deleteEmptyValues(array) {
  var newArray = [];
  array.forEach(function (current) {
    if (current !== "") {
      newArray.push(current.trim());
    }
  });
  return newArray;
}

findFirstRepeatedWord('Привет, студент! Студент... Как дела, студент? Сказал студент: "Привет; привет! Привет!!!".');