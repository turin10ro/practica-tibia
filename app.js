document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;

  alert(`Registro exitoso!\nNombre: ${nombre}`);
  this.reset();
});
