
var db = openDatabase('ZaltaDB', '1.0', 'Project DataBase', 10 * 1024 * 1024);

function User(name, pass, mail) {
    this.name = name;
    this.password = pass;
    this.mail = mail;
    this.getDataAsArray = function () {
        var array = new Array();
        array.push(this.name);
        array.push(this.password);
        array.push(this.mail);
        return array;
    };
}
function UserManipulation() {
    this.addUser = function () {
        //validateing Data
        var userName = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var pass = document.getElementById("password").value;
        //alert(validatemail());
        if (usr.validatePassword()) {
            //Create User Object
            usr.addObjectToDB(new User(userName, pass, email));
        }

        //Check New || Update
        //ChangeView
        return false;
    };
    this.validatePassword = function () {
        if (document.getElementById("password").value == document.getElementById("repassword").value) {
            document.getElementById('errors').innerHTML = "";

            return true;
        } document.getElementById('errors').innerHTML = "*Password Not match!";
        //alert("ss");///handle al blue
        return false;
    }
    var i = 0;
    function getVAR(tx, results) {
        varlen = results.rows.length;
        document.getElementById('test').innerHTML = varlen;

    }
    this.deleteUser = function (key) {
        // delete contact from the localstorage based on this key
        // and then call contactService.removeContactFromDOM(key);
        // then change the view to the list view.

    };
    this.init = function () {
        //initialize the form and link the buttons with the actions for 
        //add_button,add_contact_button,cancel_contact_button,back_button,clear_button
        // then get the list of contacts from localstorage and add it to the list view 
        document.getElementById("form").onsubmit = usr.addUser;
        document.getElementById("loginform").onsubmit = login;


        usr.estblishData();
        if (sessionStorage.getItem("username"))
        {
            location.href = "profile.html";
            
        }

       

    };
    this.estblishData = function () {
        db.transaction(function (tx) {
            //  tx.executeSql("Drop table tbl_user");

            tx.executeSql("CREATE TABLE IF NOT EXISTS tbl_user(Email TEXT  unique,userName TEXT,passw TEXT )");
            tx.executeSql("CREATE TABLE IF NOT EXISTS tbl_Codes(EMAIL TEXT, title TEXT,html TEXT ,js TEXT,css TEXT)");
        });
    };
    this.addObjectToDB = function (user) {
        db.transaction(function (tx) {
            var arr = user.getDataAsArray();
            tx.executeSql("Insert Into tbl_user(userName,passw,Email) VALUES (?,?,?)", arr);
        },filledLogin,SuccedLogin);
    };
    var booleanreg="new";
    var SuccedLogin = function () {
        $("#modal-registerd").modal();
        $("#modal-register").modal("hide");
        sessionStorage.setItem("username",document.getElementById("username").value);
        sessionStorage.setItem("email", document.getElementById("email").value);
        document.getElementById('Error_Alert_reg').style.display = "none";

        setTimeout(function () { location.href = "CodePlayer.html" }, 2000);


    };
    var filledLogin = function () {
        document.getElementById('Error_msg_Reg').innerHTML = "*Email Exists!";
        document.getElementById('Error_Alert_reg').style.display = "block";
    };

}
var usr = new UserManipulation();
window.onload = usr.init;

