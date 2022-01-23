//Задание 1.
function filterNumbersArr(numbers) {
  return numbers.filter(function (number) {
    return number > 0;
  });
}

filterNumbersArr([-1, 0, 2, 34, -2]);


//Задание 2.
function returnFirstPositiveNumber(array) {
  return array.find(function (number) {
    return number > 0;
  });
}

returnFirstPositiveNumber([-1, 0, 2, 34, -2]);


//Задание 3.
function isPalindrome(word) {
  return word.toLowerCase() == word.toLowerCase().split('').reverse().join('');
}

isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false


//Задание 4.
function areAnagrams(word1, word2) {
  return word1.toLowerCase().split('').sort().join('') == word2.toLowerCase().split('').sort().join('');
}

areAnagrams('кот', 'отк'); // true
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false


//Задание 5.
//Способ 1.
function divideArr(arr, n) {
  var result = [],
    i = 0;

  while (i < arr.length) {
    result.push(arr.slice(i, i += n));
  }

  return result;
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//Способ 2.
function divideArr(arr, n) {
  var result = [];

  for (var i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }

  return result;
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//Способ 3.
function divideArr(arr, n) {
  var result = [];

  for (var i = 0; i < (Math.ceil(arr.length / n)); i++) {
    result[i] = arr.slice((i * n), (i * n) + n);
  }

  return result;
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]