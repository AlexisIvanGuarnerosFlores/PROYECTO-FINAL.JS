let inputUsuario=prompt("ingrese su nombre de Usuario")
let inputContraseña=prompt("ingresa tu contraseña")



const cuentas=[
    {nombre:"mali",  contraseña: "1515", saldo:"200"},
    {nombre:"gera",  contraseña: "1218", saldo:"290"},
    {nombre:"maui", contraseña: "1234", saldo:"67"}
]



    // if (inputUsuario== cuentas[0].nombre && inputContraseña== cuentas[0].contraseña){
    //     alert("!!!")  
    // }
    // else {
    //     alert("usuario invalido")
    // }
 validarUsuario= (a,b)=>{
    if(a==b){alert(`Bienvenido, ${inputUsuario}` )}
    else(alert("Usuario invalido"))
}



validarContraseña= (a,b)=>{
    if(a==b){alert("correct")}
    else(alert("sorry")) }
    
    
    // validarUsuario(inputUsuario,cuentas.forEach.nombre)
    // validarUsuario(inputContraseña,cuentas.forEach.contraseña)













// // *****FUNCIONES DE SUMA Y RESTA********
// let saldo= 0
// let ingresar= parseInt( prompt("ingresa el monto a añadir"))
// let retirar= parseInt( prompt("ingresa el monto a retirar"))

// // *****SUMA*****
// suma= (añadir)=>{
// return saldo += añadir;}


// // *******RESTA******
// resta =(restar)=>{
//     return saldo -=restar;
// }

// totalSuma= suma(ingresar)
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
