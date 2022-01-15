function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "1234") {
        alert("Welcome Admin");
        window.location.href = "admin.html";

    } else {
        alert("You're not an admin? So why're you here?");
    }


}