(function() {
    if (sessionStorage.getItem("username")) {
        window.location.href = `./game.html`;
    }
    const userNameForm = document.getElementById("usernameform");
    let userName = "";
    userNameForm.addEventListener("submit", (e) => {
        e.preventDefault();
        userName = userNameForm.elements['username'].value;
        sessionStorage.setItem('username', userName);
        window.location.href = `./game.html`;
    });
})();