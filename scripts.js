
let inputUsuario=prompt("ingrese su nombre de Usuario")
let inputContrasena=prompt("ingrese su contraseña de Usuario")




const cuentas=[
    {nombre:"mali",  contrasena: "1515", saldo:200},
    {nombre:"gera",  contrasena: "1218", saldo:290},
    {nombre:"maui", contrasena: "1234", saldo:67}
]



    // if (inputUsuario== cuentas[0].nombre && inputContraseña== cuentas[0].contraseña){
    //     alert("!!!")  
    // }
    // else {
    //     alert("usuario invalido")
    // }


// console.log(mapeo__nombres) 

//  validarUsuario= (nombre,ma)=>{
//     if(a==b){alert(`Bienvenido, ${inputUsuario}` )}
//     else(alert("Usuario invalido"))
// }
// let mapeo__nombres= cuentas.map(cuenta=>cuenta.nombre)

// validarUsuario(inputUsuario,cuentas[0].nombre)

let buscarUsuario=(nombre,contrasenaUsuario,listaUsuarios)=>{
for (let i=0; i<=listaUsuarios.length; i++){
    if(nombre==listaUsuarios[i].nombre && contrasenaUsuario== listaUsuarios[i].contrasena){
          
        return listaUsuarios[i]
    }
}

}
let usuarioActivo= buscarUsuario(inputUsuario, inputContrasena,cuentas)














// validarContraseña= (a,b)=>{
//     if(a==b){alert("correct")}
//     else(alert("sorry")) }
    
    
    // validarUsuario()
    // validarUsuario()













// // // *****FUNCIONES DE SUMA Y RESTA********

let ingresar= parseInt(prompt("ingresa el monto a añadir"))
// let retirar= parseInt( prompt("ingresa el monto a retirar"))

// *****SUMA*****
let suma= (cuenta,añadir)=>{
let cuentaModificada= cuenta
cuentaModificada.saldo= cuenta.saldo + añadir
return cuentaModificada
}
console.log(suma(usuarioActivo,ingresar))

// *******RESTA******
let resta =(restar)=>{
    return saldo -=restar;
}

totalSuma= suma(ingresar)
// totalResta=resta(retirar)



























// if(inputUsuario==="mali"|| inputUsuario==="gera"||inputUsuario=== "maui"){
    //     document.write(`Bienvenido ${inputUsuario}`)}

    // else  
    // {alert("ingrese un usuario valido")} 
    




// var nombre= prompt("ingrese")
// console.log(input.value)

// // if valor ==""

// const input= document.getElementById("name")

// let form= document.getElementById("form")
// form.addEventListener("submit", function (event)
// {
// console.log(input.value)
// })
