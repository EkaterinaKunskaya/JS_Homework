var addRow = document.getElementsByClassName('addRow')[0];

addRow.addEventListener('click', function () {
  var firstRow = document.getElementsByTagName('tr')[0];
  firstRow.insertAdjacentHTML('beforebegin', '<tr><td></td><td></td><td></td></tr>');
});


var table = document.getElementById('table');

table.addEventListener('click', function (event) {

  if (event.target.className === 'addRow') {
    event.stopPropagation();

  } else if (event.target.nodeName === 'TD') {
    var target = event.target;

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'edit';
    input.value = target.innerHTML;
    target.innerHTML = '';
    target.appendChild(input);

    input.onkeydown = function (event) {
      if (event.key == 'Enter') {
        this.blur();
      }
    };

    input.onblur = function () {
      target.innerHTML = input.value;
      input.replaceWith(target);
    };

    target.replaceWith(input);
    input.focus();
  }
  
});