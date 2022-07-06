let nombre, correo, mensaje;

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
console.log('HOLA');
e.preventDefault();
LeerDatos();
})

function LeerDatos() {
    nombre = document.getElementById('Nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.querySelector('textarea').value
   
    ValidarData (nombre,correo,mensaje)
    guardarLocarStorage(nombre,correo,mensaje)
}

function ValidarData(nombre,correo,mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        
        alert('Error de información')

        } 
    }



function guardarLocarStorage(nombre,correo,mensaje) {
    localStorage.setItem('Nombre',nombre);
    localStorage.setItem('Correo', correo);
    localStorage.setItem('Mensaje', mensaje);
}
 function ListaData(){
    let nombreUs = localStorage.getItem('Nombre')
    let correoUs = localStorage.getItem('Correo')
    let mensajeUs = localStorage.getItem('Mensaje')
 }

















