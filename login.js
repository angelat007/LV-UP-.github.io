const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");

//verificar si hay sesion iniciarda//
if (localStorage.getItem('username')) {
    loginDiv.style.display = 'none';
    contentDiv.style.display = 'block';
};

//sivibilidad de contraseña//
document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        if ($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
});

//boton de iniciar seccion//
document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        if ($password.value !== "" && $username.value !== "") {
            e.preventDefault();
            window.location.href = "index.html";
        }
    }
});

function SeguroQueQuieresIinicar() {
    alert("Seguro que quieres iniciar sesion??")
}