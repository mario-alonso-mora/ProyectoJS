
function listener(){
    document.querySelector("#btnHome").addEventListener("click",viewHome);
    document.querySelector("#btnDJ").addEventListener("click",viewDJ);
    document.querySelector("#btnBreak").addEventListener("click",viewBreak);
    document.querySelector("#btnGraffiti").addEventListener("click",viewGraffiti);
    document.querySelector("#btnMc").addEventListener("click",viewMc);
    document.querySelector("#btnPoems").addEventListener("click",viewPoems);
    document.querySelector("#btnaboutme").addEventListener("click",viewaboutme);
    document.querySelector("#btnalbums").addEventListener("click",viewAlbums);
    document.querySelector("#btnsignup").addEventListener("click",viewSignup);


}

window.onload = function(){
    listener();

}

viewHome = ()=>{
    document.querySelector("#Home").classList.remove("hidden");
    document.querySelector("#DJ").classList.add("hidden");
    document.querySelector("#Breakdance").classList.add("hidden");
    document.querySelector("#Graffers").classList.add("hidden");
    document.querySelector("#Mcs").classList.add("hidden");
    document.querySelector("#Poems").classList.add("hidden");
    document.querySelector("#aboutme").classList.add("hidden");
    document.querySelector("#albums").classList.add("hidden");
    document.querySelector("#signup").classList.add("hidden");
}  


viewDJ = ()=>{
    document.querySelector("#Home").classList.add("hidden");
    document.querySelector("#DJ").classList.remove("hidden");
    document.querySelector("#Breakdance").classList.add("hidden");
    document.querySelector("#Graffers").classList.add("hidden");
    document.querySelector("#Mcs").classList.add("hidden");
    document.querySelector("#Poems").classList.add("hidden");
    document.querySelector("#aboutme").classList.add("hidden");
    document.querySelector("#albums").classList.add("hidden");
    document.querySelector("#signup").classList.add("hidden");
}



viewBreak = ()=>{
    document.querySelector("#Home").classList.add("hidden");
    document.querySelector("#DJ").classList.add("hidden");
    document.querySelector("#Breakdance").classList.remove("hidden");
    document.querySelector("#Graffers").classList.add("hidden");
    document.querySelector("#Mcs").classList.add("hidden");
    document.querySelector("#Poems").classList.add("hidden");
    document.querySelector("#aboutme").classList.add("hidden");
    document.querySelector("#albums").classList.add("hidden");
    document.querySelector("#signup").classList.add("hidden");
}


viewGraffiti = ()=>{
    document.querySelector("#Home").classList.add("hidden");
    document.querySelector("#DJ").classList.add("hidden");
    document.querySelector("#Breakdance").classList.add("hidden");
    document.querySelector("#Graffers").classList.remove("hidden");
    document.querySelector("#Mcs").classList.add("hidden");
    document.querySelector("#Poems").classList.add("hidden");
    document.querySelector("#aboutme").classList.add("hidden");
    document.querySelector("#albums").classList.add("hidden");
    document.querySelector("#signup").classList.add("hidden");
}



viewMc = ()=>{
    document.querySelector("#Home").classList.add("hidden");
    document.querySelector("#DJ").classList.add("hidden");
    document.querySelector("#Breakdance").classList.add("hidden");
    document.querySelector("#Graffers").classList.add("hidden");
    document.querySelector("#Mcs").classList.remove("hidden");
    document.querySelector("#Poems").classList.add("hidden");
    document.querySelector("#aboutme").classList.add("hidden");
    document.querySelector("#albums").classList.add("hidden");
    document.querySelector("#signup").classList.add("hidden");
}





viewPoems = ()=>{
    document.querySelector("#Home").classList.add("hidden");
    document.querySelector("#DJ").classList.add("hidden");
    document.querySelector("#Breakdance").classList.add("hidden");
    document.querySelector("#Graffers").classList.add("hidden");
    document.querySelector("#Mcs").classList.add("hidden");
    document.querySelector("#Poems").classList.remove("hidden");
    document.querySelector("#aboutme").classList.add("hidden");
    document.querySelector("#albums").classList.add("hidden");
    document.querySelector("#signup").classList.add("hidden");
}

viewaboutme = ()=>{
    document.querySelector("#Home").classList.add("hidden");
    document.querySelector("#DJ").classList.add("hidden");
    document.querySelector("#Breakdance").classList.add("hidden");
    document.querySelector("#Graffers").classList.add("hidden");
    document.querySelector("#Mcs").classList.add("hidden");
    document.querySelector("#Poems").classList.add("hidden");
    document.querySelector("#aboutme").classList.remove("hidden");
    document.querySelector("#albums").classList.add("hidden");
    document.querySelector("#signup").classList.add("hidden");
}

viewAlbums = ()=>{
    document.querySelector("#Home").classList.add("hidden");
    document.querySelector("#DJ").classList.add("hidden");
    document.querySelector("#Breakdance").classList.add("hidden");
    document.querySelector("#Graffers").classList.add("hidden");
    document.querySelector("#Mcs").classList.add("hidden");
    document.querySelector("#Poems").classList.add("hidden");
    document.querySelector("#aboutme").classList.add("hidden");
    document.querySelector("#albums").classList.remove("hidden");
    document.querySelector("#signup").classList.add("hidden");
}

viewSignup = ()=>{
    document.querySelector("#Home").classList.add("hidden");
    document.querySelector("#DJ").classList.add("hidden");
    document.querySelector("#Breakdance").classList.add("hidden");
    document.querySelector("#Graffers").classList.add("hidden");
    document.querySelector("#Mcs").classList.add("hidden");
    document.querySelector("#Poems").classList.add("hidden");
    document.querySelector("#aboutme").classList.add("hidden");
    document.querySelector("#albums").classList.add("hidden");
    document.querySelector("#signup").classList.remove("hidden");
} 


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});


var timeoutID;
function saludoLento() {
    timeoutID = setTimeout(slowAlert, 2000); 
}

function slowAlert() {
   alert("WELCOME TO THE HIP HOP OLD SCHOOL!!");
}

saludoLento();



