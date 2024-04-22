let datos =[
    {password :'1234', email :'andy@gmail.com'},
    {password :'abc', email :'said@gmail.com'}
]

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    let emailUser = document.getElementById('email').value;
    let  contraUser = document.getElementById('password').value;

    validarUsuario(emailUser,contraUser);

});

function validarNoVacio(email , password){
if (email && password ){
    return true;
}else{
    document.getElementById('errorText').textContent = 'llene todos los campos';
    document.getElementById('errorDiv').classList.remove('d-none');
   errorMensajeRestaurar();
}
}

function validarUsuario(email, password) {

    let val= validarNoVacio(email,password);
    console.log(val);
    if(val){
        let usuarioValido = false; // Bandera para verificar si se encontró un usuario válido
        for (let i = 0; i < datos.length; i++) {
            if (email === datos[i].email && password === datos[i].password) {
                usuarioValido = true; // Se encontró un usuario válido
                break; // No es necesario continuar la iteración
            }
        }
        if (usuarioValido) {
            window.location.href='menu.html';
        } else {
            document.getElementById('errorText').textContent = 'correo y/o contraseña incorrectos';
            document.getElementById('errorDiv').classList.remove('d-none');
            errorMensajeRestaurar();

        }
    }

}
function errorMensajeRestaurar(){
    
    setTimeout(function(){
        document.getElementById('errorDiv').classList.add('d-none');
        document.getElementById('email').value='';
        document.getElementById('password').value='';
    },2000);//para trancision seria fade y shown
}

function actualizarFechaHora() {
    // Crear un nuevo objeto de fecha
    var fechaHoraActual = new Date();

    // Obtener la hora, los minutos y los segundos
    var hora = fechaHoraActual.getHours();
    var minutos = fechaHoraActual.getMinutes();
    var segundos = fechaHoraActual.getSeconds();

    // Obtener el día, mes y año
    var dia = fechaHoraActual.getDate();
    var mes = fechaHoraActual.getMonth() + 1; // ¡Recuerda que los meses comienzan desde 0!
    var año = fechaHoraActual.getFullYear();

    // Formatear la salida
    var horaFormateada = hora + ":" + minutos + ":" + segundos;
    var fechaFormateada = dia + "/" + mes + "/" + año;

    // Mostrar la hora y la fecha en el div
    document.getElementById("hora").textContent = "Hora actual: " + horaFormateada;
    document.getElementById("fechaActual").textContent = "Fecha actual: " + fechaFormateada;
}

// Llamar a la función para que se actualice la fecha y la hora al cargar la página
actualizarFechaHora();

// Actualizar la fecha y la hora cada segundo
setInterval(actualizarFechaHora, 1000);
