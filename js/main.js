const suitch = document.querySelector(".switch");

suitch.addEventListener("click", e => {
    suitch.classList.toggle("active");
    document.body.classList.toggle("active");
})

document.addEventListener('DOMContentLoaded', function() {
    // Verifica si el hash de la URL es "#contacto", lo que indica que se ha redirigido a la sección de contacto
    if (window.location.hash === '#contacto') {
        // Muestra el mensaje de Toastify
        Toastify({
            text: "¡Se envió el mensaje exitosamente!",
            duration: 3500,
            style: {
                background: "linear-gradient(to right, #eee0cd ,#f2f2f2)",
                borderRadius: "1rem",
                color: "#464646"
            },
            gravity: "top", 
            position: "center"
        }).showToast();
    }
});

// function mostrarMensaje () {
//     Toastify({
//         text: "¡Se envió el mensaje exitosamente!",
//         duration: 3500,
//         style: {
//             background: "linear-gradient(to right, #eee0cd ,#f2f2f2)",
//             borderRadius: "1rem",
//             color: "#464646"
//         },
//         gravity: "top", 
//         position: "center"
//     }).showToast();
// }

// mostrarMensaje();