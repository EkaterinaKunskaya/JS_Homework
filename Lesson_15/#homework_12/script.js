var button = document.getElementById('button');    

button.addEventListener('click', GETrequest);

function GETrequest() {

  if (localStorage.getItem('usersData') === null) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    //xhr.open('GET', 'https://reqres.in/api2/users?page=2'); // Для проверки. Неуспешный запрос - несуществующая страница (код 404).

    xhr.send();

    xhr.onload = function () {
      var statusType = Math.round(this.status / 100);
      var users = JSON.parse(this.response).data;
      localStorage.setItem('usersData', JSON.stringify(users));
      (statusType === 2) ? drawInfo(users): this.status;
    };

    xhr.onloadend = function () {
      if ((Math.round(this.status / 100)) !== 2) {
        var body = document.getElementsByTagName('body')[0];
        body.innerHTML = "";
        var div = document.createElement("div"),
            p = document.createElement("p");

        body.appendChild(div);
        div.appendChild(p);
        p.className = "textError";
        p.innerHTML = "Грусть-печаль...<br>Неуспешный запрос!";
      }
    };

  } else {
    var users = JSON.parse(localStorage.getItem('usersData'));
    drawInfo(users);
  }

  function drawInfo(users) {
    var tabs = document.getElementsByClassName('tabs')[0];
    var info = document.getElementsByClassName('info')[0];

    tabs.innerHTML = "";
    info.innerHTML = "";

    var ul = document.createElement("ul"),
        div = document.createElement("div");

    tabs.appendChild(ul);
    ul.className = "tabs";
    info.appendChild(div);
    div.className = "output";

    for (var i = 0; i < users.length; i++) {
      var li = document.createElement("li"),
          section = document.createElement("section");

      ul.appendChild(li);
      li.className = "tab";
      li.setAttribute('data-id', [i + 1]);
      li.innerHTML = 'User ' + [i + 1];

      var userObject = users[i];

      div.appendChild(section);
      section.className = "section";
      section.innerHTML = 'First name: ' + userObject.first_name + '<br>' + 'Last name: ' + userObject.last_name;

      var img = document.createElement("img");
      section.appendChild(img);
      img.setAttribute('src', userObject.avatar);

    }

    var tabs = document.getElementsByClassName('tab');
    var sections = document.getElementsByClassName('section');

    tabs[0].classList.add('active');
    sections[0].classList.add('active');

    for (var j = 0; j < tabs.length; j++) {
      tabs[j].onclick = tabclick;
    }

    function tabclick(event) {
      var tab = event.target;
      var tabId = tab.dataset.id;

      for (var k = 0; k < tabs.length; k++) {
        tabs[k].classList.remove('active');
        tabs[tabId - 1].classList.add('active');

        sections[k].classList.remove('active');
        sections[tabId - 1].classList.add('active');
      }

    }

  }
}