// Dark-mode section
var a = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) icon.src = "image/sun.png";
    else {
        icon.src = "image/moon.png";
    }
}

emailjs.init('1MXNf7pjvlS8_K1nO');
window.onload = () => {
    document.getElementById('contact-form').setAttribute('submit', function (e) {
        e.preventDefault();

        this.contact_number.value = Math.random() * 100000 | 0;

        emailjs.sendForm("service_gps9dtj", "template_vi3y2ql", this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}