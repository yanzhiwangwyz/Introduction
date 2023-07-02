let loginCredential = new Map();
loginCredential.set("yanzhiwang", "yanzhiwang");
loginCredential.set("admin", "admin");
loginCredential.set("guest", "guest");

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (loginCredential.has(username) && loginCredential.get(username) === password) {
        window.location.href = "intro.html";
    } else {
        alert("Wrong username or password");
    }
}