window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


const images = document.querySelectorAll('.galeria-img');
images.forEach(img => {
    img.addEventListener('mouseover',() => {
        img.classList.add('grow');
    })

    img.addEventListener('mouseout', () => {
        img.classList.remove('grow'); 
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".formulario form") || document.querySelector(".formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = new Date(document.getElementById("fecha").value);
    const personas = parseInt(document.getElementById("personas").value);
    const mensaje = document.getElementById("mensaje").value.trim();

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); 

    // Validaciones básicas
    if (!nombre || !email || !telefono || isNaN(personas)) {
      alert("Por favor, completá todos los campos obligatorios.");
      return;
    }

    if (fecha < hoy) {
      alert("La fecha de reserva no puede ser anterior a hoy.");
      return;
    }

    if (personas < 1) {
      alert("Debe haber al menos una persona en la reserva.");
      return;
    }

    const datosReserva = {
      
    }
    alert("Reserva enviada correctamente:\n\n" +
          `Nombre: ${nombre}\n` +
          `Email: ${email}\n` +
          `Teléfono: ${telefono}\n` +
          `Fecha: ${fecha.toLocaleDateString()}\n` +
          `Personas: ${personas}\n` +
          `Mensaje: ${mensaje || "Sin mensaje adicional"}`);
  console.log(formulario);
  console.log("Formulario válido. Datos listos para enviar.");
  formulario.reset();

  
  });
});
