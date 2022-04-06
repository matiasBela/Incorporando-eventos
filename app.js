class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = Number(precio);
        this.cantidad = Number(cantidad);
    }
}

const productos = [];
productos.push(new Producto("FIDEOS", 1100, 20, false));
productos.push(new Producto("LECHE", 1700, 24, false));
productos.push(new Producto("GALLETITAS", 1800, 40, false));
productos.push(new Producto("ACEITE", 2500, 24, true));
productos.push(new Producto("SAL", 2300, 50, false));
productos.push(new Producto("SALSA", 1400, 10, false));
productos.push(new Producto("CAFE", 3100, 16, false));
console.log(productos);


// Eventos


let boton = document.getElementById("btn");
let boton2 = document.getElementById("btn2")
let boton3 = document.getElementById("btn3")
 console.log(boton)
 console.log(boton2)
 console.log(boton3)
 

boton.addEventListener("click",agregar)

function agregar(){
   productos.push(prompt("Agrega algun nuevo producto"))
  }

  boton2.addEventListener("click", whats);
     function whats(){
     alert("23726482")
  }
  
   boton3.addEventListener("click",insta);

  function insta(){
     alert("Distribuidora_JS")
 }

 




// let formulario = document.getElementById("formulario")
// console.log(formulario)
// formulario.addEventListener("submit", enviarDatos);

// function enviarDatos(e){
//     e.preventDefault();
//     console.log("form enviado")




// console.log(dato.children[0],value);
// console.log(dato.children[1],value);

// }






// Funcion

// function buscarProducto(marca, producto) {
//     return marca.find(obj => obj.nombre === producto.toUpperCase())
// }

// for(let i = 0; i < 3; i++){
//     let busqueda = buscarProducto(productos, prompt("Ingresa el nombre del producto en mayusculas"))
//     if(busqueda != undefined){
//         alert("El producto es " + busqueda.nombre + " su precio es " + busqueda.precio + " y trae " + busqueda.cantidad)
//     } else {
//         alert("No existe ese producto")
//     }
// }

// // Reduce

// const total = productos.reduce(
//    (acc, actual) => acc + actual.precio,0 );
// console.log(total);

