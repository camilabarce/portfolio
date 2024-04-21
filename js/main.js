const suitch = document.querySelector(".switch");

document.addEventListener("DOMContentLoaded", e => {
    cargarDarkMode()
    suitch.addEventListener("click", toggleDarkMode)
})

function toggleDarkMode() {
    suitch.classList.toggle("active");
    document.body.classList.toggle("active");
    guardarDarkMode(suitch.classList.contains("active"))
}

function guardarDarkMode(estado) {
    localStorage.setItem("darkMode", estado)
}

function cargarDarkMode() {
    const darkModeGuardado = localStorage.getItem("darkMode") === "true";
    if (darkModeGuardado) {
        suitch.classList.add("active");
        document.body.classList.add("active");
    }
}
// document.addEventListener('DOMContentLoaded', function() {
//     // Verifica si el hash de la URL es "#contacto", lo que indica que se ha redirigido a la sección de contacto
//     if (window.location.hash === '#contacto') {
//         // Muestra el mensaje de Toastify
//         Toastify({
//             text: "¡Se envió el mensaje exitosamente!",
//             duration: 3500,
//             style: {
//                 background: "linear-gradient(to right, #eee0cd ,#f2f2f2)",
//                 borderRadius: "1rem",
//                 color: "#464646"
//             },
//             gravity: "top",
//             position: "center"
//         }).showToast();
//     }
// });