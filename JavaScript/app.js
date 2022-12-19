
// Dark-mode section
var a = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) icon.src = "image/sun.png";
    else {
        icon.src = "image/moon.png";
    }
}