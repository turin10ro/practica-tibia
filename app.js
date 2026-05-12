document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  const telefono = document.getElementById('telefono').value;
  const correo = document.getElementById('correo').value;

  alert(`Registro exitoso!\nNombre: ${nombre}\nEdad: ${edad}\nTeléfono: ${telefono}\nCorreo: ${correo}`);
  this.reset();
});
