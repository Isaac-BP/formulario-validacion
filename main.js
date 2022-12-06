const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const btnAgregar = document.getElementById('btnAgregar');




const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    matricula: /^\d{4}-\d{4}$/,
    nota: /^[0-9][0-9]?$|^100$/
}

const campos = {
	apellido: false,
	nombre: false,
	matricula: false,
	nota: false
}

const validarForm = (e) =>{
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');

        break;
        case "apellido":
            validarCampo(expresiones.nombre, e.target, 'apellido');

        break;
        case "matricula":
            validarCampo(expresiones.matricula, e.target, 'matricula');

        break;
        case "nota":
            validarCampo(expresiones.nota, e.target, 'nota');

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

inputs.forEach( (input) =>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})

class Estudiante {
    constructor (nombre, apellido, matricula, nota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.nota = nota;
    }
}

function estudianteRegistrado(){
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let matricula = document.querySelector('#matricula').value;
    let nota = document.querySelector('#nota').value;


    let nuevoEstudiante = new Estudiante(nombre, apellido, matricula, nota);
    let listadoEstudiante = [];
    listadoEstudiante.push(nuevoEstudiante);

    console.log(listadoEstudiante);
    
}

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(campos.nombre && campos.apellido && campos.matricula && campos.nota){
        formulario.reset();
        estudianteRegistrado();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
    }
    else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');    
    }
});





