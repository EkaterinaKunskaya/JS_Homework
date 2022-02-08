var x = document.getElementById('x'),
    y = document.getElementById('y'),
    button = document.getElementById('button');

var div = document.createElement('div');
document.body.appendChild(div);
    

x.onkeyup = function () {
  toggleButton(x, y);
}
y.onkeyup = function () {
  toggleButton(x, y);
}

function toggleButton(x, y) {
  var x = x.value,
      y = y.value;

  (x && y) ? button.disabled = false : button.disabled = true;
}


button.addEventListener('click', function (event) {
  event.preventDefault();

  var xvalue = x.value;
  var yvalue = y.value;

  if (+xvalue < 1 || +xvalue > 10 || !xvalue || isNaN(+xvalue) || +xvalue % 1 != 0) {
    alert('Значение Х введено некорректно. Введите целое число от 1 до 10.');
    x.value = "";
    button.disabled = true;
    div.innerHTML = "";

  } else if (+yvalue < 1 || +yvalue > 10 || !yvalue || isNaN(+yvalue) || +yvalue % 1 != 0) {
    alert('Значение У введено некорректно. Введите целое число от 1 до 10.');
    y.value = "";
    button.disabled = true;
    div.innerHTML = "";

  } else {
    drawBoard(+xvalue, +yvalue);
  }

});

var div = document.createElement('div');
document.body.appendChild(div);

function drawBoard(x, y) {
  div.innerHTML = "";

  var table = document.createElement("table");

  for (var i = 1; i <= y; i++) {
    var tr = document.createElement('tr');

    for (var j = 1; j <= x; j++) {
      var td = document.createElement('td');
      tr.appendChild(td);
      (i % 2 == j % 2) ? td.className = "white": td.className = "black";
    }

    table.appendChild(tr);
  }

  div.appendChild(table);

  table.addEventListener('click', function (event) {

    if (event.target.nodeName === 'TD') {
      var tds = table.querySelectorAll('td');

      tds.forEach(function (item) {
        item.classList.toggle('white');
        item.classList.toggle('black');
      });

    }

  });
}