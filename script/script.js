document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let date = new Date();

    let dataArray = {
        "name": name,
        "pass": pass,
    }


    ajax('core/signup.php', 'POST', signup, dataArray);

    function signup(result) {
        console.log(result);
        if (result == 2) {
            alert('Заполните поля');
        }
        else if (result == 1) {
            alert('Успех. Теперь можно войти!');
        }
        else {
            alert('Ошибка, повторите регистрацию позже!');
        }
    }
}

document.querySelector('#log-submit').onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('#log-name').value;
    let pass = document.querySelector('#log-pass').value;

    let dataArray = {
        "name": name,
        "pass": pass,
    }


    ajax('core/login.php', 'POST', login, dataArray);

    function login(result) {
        if (result == 2) {
            alert('Заполните поля');
        } else if (result == 0){
          alert("Такой пользыватель не найден!")
            
        } else {
           console.log(result);
           result = JSON.parse(result);
           document.cookie = `name=${result.name}; path=/`;
           location.href="cabinet.php"

        }
    }
}