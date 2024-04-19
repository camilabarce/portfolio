const suitch = document.querySelector(".switch");

suitch.addEventListener("click", e => {
    suitch.classList.toggle("active");
    document.body.classList.toggle("active");
})