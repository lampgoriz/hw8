var login = prompt("Введите логин");

if(login == "Админ"){
    var password = prompt("Введите пароль");
    if(password == "admin"){
        console.log("Добро пожаловать!");   
    }else if(password == "Отмена"){
        console.log("Вход отменен");
    }else{
        console.log("Пароль неверен");
    }   
}else if(login == "Отмена"){
    console.log("Вход отменен");
}else{
    console.log("Я вас не знаю");
}

