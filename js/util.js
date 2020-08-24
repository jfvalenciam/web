//Desarrollado Por Juan Felipe Valencia Murillo.

function abrirModal(modalId){
	modal = document.getElementById(modalId);
	modal.style.display = 'block';
	window.onclick = (event) => {
		if(event.target == modal){
			modal.style.display = 'none';
		}
	}
}

function cerrarModal(modalId){
	modal = document.getElementById(modalId);
	modal.style.display = 'none';
}