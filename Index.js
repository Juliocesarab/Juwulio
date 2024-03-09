console.log("Hola mundo")

const URL = "https://fakestoreapi.com/products";

let titulo = document.getElementById("titulo")
let productos =document.getElementById("productos")
let tabla = "<div class='card'>";



function getData() {
    fetch(URL)
    .then( response => response.json() )
    .then( data => {
        console.log("Datos de la API", data) 
        for(let i = 0; i<data.length; i++ ){
            console.log(data[i].title)
            let bloquehtml = 
             `
             <div class='card-item'>
                <div class='cabecera'></div>
                <img width="80px" src="${(data[i].image)}">
                <p class='titulo'> ${(data[i].title)}</p>
                <p>$ ${(data[i].price)}</p>
                <p> ${(data[i].category)}</label>
             </div>
             `
            
            tabla += bloquehtml;
        }
        tabla += "<div>";
        productos.innerHTML = tabla;
    } )
        
    
}


getData();
