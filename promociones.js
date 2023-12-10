function validarFormulario() {
    var abrir = document.getElementById("abrir").value;
    if (abrir === "onclick") {
        abrirModal();
    } else {
        
    }
  }
  
  function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  