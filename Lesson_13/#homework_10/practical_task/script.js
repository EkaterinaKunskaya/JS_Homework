var container = document.getElementById('container');

var newParagraph1 = document.createElement('p'),
    newParagraph2 = document.createElement('p');

newParagraph1.innerHTML = 'Here are <a href="https://learn.javascript.ru/">Link 1</a> and <a href="http://google.by">Link 2</a>.';
newParagraph2.innerHTML = 'Here are <a href="https://www.it-academy.by/">Link 3</a> and <a href="https://developer.mozilla.org/ru/">Link 4</a>.';

container.appendChild(newParagraph1);
container.appendChild(newParagraph2);


var button = document.getElementsByTagName('button');
button[0].onclick = function () {
  var link1 = newParagraph1.children[0],
      link2 = newParagraph1.children[1];

  link1.className = 'links';
  link2.className = 'links';
}

var link3 = newParagraph2.children[0],
    link4 = newParagraph2.children[1];

newParagraph2.addEventListener('click', function (EO) {
  EO.preventDefault();

  if (EO.target == link3) {
    alert(link3.getAttribute('href'));
  }

  if (EO.target == link4) {
    alert(link4.getAttribute('href'));
  }
  
});