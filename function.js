validarEmail = (email) => {
    const changeColor = (valor) => {
        document.getElementById("colorDiferent").innerHTML = valor;
    }


  	if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
  		changeColor(email);
	} 
	else {
	   alert("La dirección de email es incorrecta!.");
	   document.getElementById("email").value = "";
	}
}