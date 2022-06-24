

let inputUsuario = prompt("ingrese su nombre de Usuario")
let inputContrasena = prompt("ingrese su contraseña de Usuario")





let pantalla = document.getElementById("mostrardato")



const cuentas = [
    { nombre: "mali", contrasena: "1515", saldo: 200 },
    { nombre: "gera", contrasena: "1218", saldo: 290 },
    { nombre: "maui", contrasena: "1234", saldo: 67 }
]






let buscarUsuario = (nombre, contrasenaUsuario, listaUsuarios) => {
    
    
    for (let i = 0; i <= listaUsuarios.length; i++) {
        if (nombre == listaUsuarios[i].nombre && contrasenaUsuario == listaUsuarios[i].contrasena) {
            alert(" TERMINOS Y CONDICIONES\n\n 1°TU CUENTA NO DEBE DE TENER MAS $990 \n 2°TU CUENTA NO DEBE DE TENER MENOS DE $10")
            return listaUsuarios[i]
            
        }

         else if(nombre != listaUsuarios[i].nombre || contrasenaUsuario != listaUsuarios[i].contrasena) { 
           
} pantalla.innerHTML = `<h2>ERROR, FAVOR DE REFRESCAR LA PAGINA E INTENTE DE NUEVO</h2>`

    }

}


let usuarioActivo = buscarUsuario(inputUsuario, inputContrasena, cuentas)

window.addEventListener('DOMContentLoaded', () => {
    if (inputUsuario != "" && inputContrasena != "") {
        consultarSaldo()
    }

})



let consultarSaldo = () => {
    
    pantalla.innerHTML = `<h2>Bienvenido ${usuarioActivo.nombre} </h2>
                        <h3>Tu saldo es de: $${usuarioActivo.saldo} </h3>`
}



// // // *****FUNCIONES DE SUMA Y RESTA********


// *****SUMA*****
let suma = () => {
    let ingresar = parseInt(prompt("ingresa el monto a añadir"))

    let saldoSuma = usuarioActivo.saldo + ingresar

    if (saldoSuma < 10 || saldoSuma > 990) { alert("Tu operacion no puede ser realizada (*TyC*)") }
    else {
        usuarioActivo.saldo = usuarioActivo.saldo + ingresar
        pantalla.innerHTML = `<h2 class="Bienvenido__pantalla">Bienvenido ${usuarioActivo.nombre} </h2>
    <h3>Tu saldo es de: $${usuarioActivo.saldo} </h3>`
    }
}




// *******RESTA******

let resta = () => {

    let retirar = parseInt(prompt("ingresa el monto a retirar"))

    let saldoResta = usuarioActivo.saldo - retirar
    if (saldoResta < 10 || saldoResta > 990) { alert("Tu operacion no puede ser realizada (*TyC*)") }
    else {
        usuarioActivo.saldo = usuarioActivo.saldo - retirar
        pantalla.innerHTML = `<h2 class="Bienvenido__pantalla">Bienvenido ${usuarioActivo.nombre} </h2>
    <h3>Tu saldo es de: ${usuarioActivo.saldo} </h3>`
    }





}





































// var nombre= prompt("ingrese")
// console.log(input.value)

// // if valor ==""

// const input= document.getElementById("name")

// let form= document.getElementById("form")
// form.addEventListener("submit", function (event)
// {
// console.log(input.value)
// })
