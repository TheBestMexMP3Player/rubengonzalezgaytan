/*cuando alguien hace click aqui es para abrir el menu desplegable*/
function openNav() {
    document.getElementById("myNav").style.width = "25%"; /*Asigna cuanto abarcara horizontalmente el menu*/
}
  
/* se cierra cuando alguien hace click en "x"*/
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/*SLIDER DE IMAGENES*/


/*LOGIN inicio de sesion*/
// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}