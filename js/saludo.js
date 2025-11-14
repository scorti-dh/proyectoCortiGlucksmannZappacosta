let UsuarioGuardado = localStorage.getItem("userName");
let username = JSON.parse(UsuarioGuardado)
let logout = document.querySelector(".link_logout")


console.log(username);

logout.addEventListener('click', function (e) {
    localStorage.clear()
    location.reload()
}   )

if (username !== ' ') {
    let bienvenida = document.querySelector(".bienvenido");
    let linkLogin = document.querySelector(".link-login");
    let linkRegister = document.querySelector(".link-register");

    bienvenida.textContent = "Bienvenido: " + username;
    linkLogin.style.display = "none";
    linkRegister.style.display = "none";
    logout.style.display = "display"
} else { // que condicion hay que poner aca?
    logout.style.display = "none"
    linkLogin.style.display = "display";
    linkRegister.style.display = "display";
    bienvenida.style.display = "none"
}


