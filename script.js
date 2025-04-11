// manejo de estados para e boton el navegador en el telefono 

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("nav-menu-visible")

    if(navMenu.classList.contains("nav-menu-visible")){
        navToggle.setAttribute("aria-label", "cerrar menu")
    }else{
        navToggle.setAttribute("aria-label", "abrir menu")
    }
} )
// funcionalidad de bajar despacio
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});

/*Carrusel automático*/
let index = 0;
const slides = document.querySelectorAll('.carousel-slide');

function mostrarCarrusel() {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
    });

    index++;
    if (index > slides.length) {
        index = 1;
    }

    slides[index - 1].style.display = 'block';
    setTimeout(mostrarCarrusel, 3000); // Cambiar cada 3 segundos
}

mostrarCarrusel();


// Envío del formulario por EmailJS
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();  // Evita que el formulario se envíe de la manera tradicional

    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const asistencia = document.getElementById('asistencia').value;
    
    console.log("Formulario enviado", { email, nombre, asistencia });

    if (email && nombre && asistencia) {
        // Usamos EmailJS para enviar el correo
        emailjs.sendForm('service_lcuxlrw', 'template_46iooef', '#form')
            .then(function (response) {
                alert('¡Formulario enviado con éxito!');
            }, function (error) {
                alert('Error al enviar el formulario: ' + error.text);
            });
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
