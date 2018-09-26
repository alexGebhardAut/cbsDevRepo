var username;
var password;
var submit = document.getElementById('submit');
var createaccount = document.getElementById('creataccount');
var user1 = "jakub";
var password1 = "cbs";
var users = [
    [user1, password1]
];

function showPwFuncDown() {
    document.getElementById('password').type = "text";
    document.getElementById('repeatPW').type = "text";
}

function showPwFuncUp() {
    document.getElementById('password').type = "password";
    document.getElementById('repeatPW').type = "password";
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

submit.onclick = function () {
    var output;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (username == "" || password == "")
        output = "Please fill out login and password";
    else {
        var tempPos = -1;
        for (i = 0; i < users.length; i++) {
            if (username == users[i][0]) {
                if (password == users[i][1]) {
                    output = "login correct";
                    tempPos = i;
                    if ((document.getElementById("rememberme").checked))
                        output += "<br>we remember you";
                    break;
                } else {
                    output = "password incorrect";
                    tempPos = i;
                    break;
                }
            } else
                console.log("user at index" + i + " is not correct");
        }

        if (tempPos == -1) {
            output = "The given user is not registered";
        }
    }
    document.getElementById("loginResult").innerHTML = output;
};

createaccount.onclick = function () {
    var output;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    repeatPW = document.getElementById("repeatPW").value;

    if (!validateEmail(username)) {
        output = "";
        alert("Mail is not valid");
    } else if ((password.length > 2) && (username != "") && (password != "") && (repeatPW == password)) {
        users.push([username, password]);
        output = "Account created";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
        document.getElementById('repeatPW').value = "";
    } else if ((username != "") && (password != "") && (repeatPW != password)) {
        if (password.length > 2)
            output = "Password does not match";
        else
            output = "Password must be at least 3 characters long"
    } else
        output = "Input invalid";

    document.getElementById("loginResult").innerHTML = output;

    console.log(users);
};