function Code(title, html, css, js) {
    this.title = title;
    this.html = html;
    this.css = css;
    this.js = js;
    this.getTitle = function() {
        return this.title;
    }
    this.getHtml = function() {
        return this.html;
    }
}

//when click on login button////
function login() {
    email = document.getElementById("email2").value;
    password = document.getElementById("password2").value;

    /*
    console.log("inside login");
    if (email == "" || password == "")
        alert("you must enter all fields");
    else {
        var i, email_flag = false,
            password_flag = false;
        for (i = 0; i < users.length; i++) {
            if (email == users[i].email) {
                email_flag = true;
                if (password == users[i].password)

                    password_flag = true;
            }

        }
        if (email_flag) {
            if (password_flag) {
                sessionStorage.setItem("username", document.getElementById("email").value)
                location.href = "CodePlayer.html";
            }
        } else
            alert("you aren't a member you should signup first");


    }
    */
            db.transaction(function (tx) {
            tx.executeSql("SELECT userName FROM tbl_user where email='" + email + "' and passw='" + password + "'", [], function (tx, results) {
                if (results.rows.length == 1) {
                    sessionStorage.setItem("username", results.rows.item(0).userName);
                    sessionStorage.setItem("email", email);

                    document.getElementById('Error_Alert_login').style.display = "none";
                    location.href = "codeplayer.html";
                   }
                else {

                    document.getElementById('Error_msg_login').innerHTML = "Error in email or password";
                    document.getElementById('Error_Alert_login').style.display = "block";

                }
            }, null);
        });
        return false;

}
//when click on signup button
function signup() {
    location.href = "third.html";
}
//when click on login in welcome page
function logWelcome() {
    location.href = "login.html";
}
//when click on start coding
function startCoding() {
    location.href = "CodePlayer.html";
}
//array of objects to store all users
var users = [{
    email: "beshoy@gmail.com",
    password: "1234"
}, {
    email: "sokra",
    password: "1234"
}];