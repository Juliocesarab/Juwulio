const URL = "https://fakestoreapi.com/products";
let productos = document.getElementById("productos")
// let tabla = "<div class='card'>";

function getData(){
    fetch(URL)
    .then( response => response.json() )
    .then( data => {
        console.log(data)
        let productosCardSet = JSON.stringify(data)
        localStorage.setItem('productos', productosCardSet )
        mapearDatos(data);
    })
}

function mapearDatos(data){
    let tabla = "<div class='card'>";
    data.forEach(item => {
        let r = Math.floor( Math.random()*256 ) 
        let g = Math.floor( Math.random()*256 ) 
        let b = Math.floor( Math.random()*256 ) 
        let precio = item.price
         let bloqueHtml = 
         `
         <div class='card-item'>
         <div class='cabecera' style="background: rgb(${r} ${g} ${b} );" ></div>
         <div class='cont-img'>
         <img src="${item.image}" />
         </div>
         <p class='precio'>${item.title}</p>
         <p>$${precio} <span class='precio-sd'> $${ ((precio * 0.1) + precio).toFixed(2)  }</span> </p>
         <label class='categoria'>${item.category}</label>
         <button onclick='modalProduct(${item.id})' id='openProd'> Descripción </button>

         </div>
         `;
         tabla += bloqueHtml;
    });
    tabla +="</div>";
    productos.innerHTML = tabla;

}


function modalProduct( id){
  

    let data = JSON.parse(localStorage.getItem("productos"))

    
    for(let i = 1; i < data.length; i++){
        if(data[i].id == id){

            var bloqueHtml = 
            `
            <div >
              
               <p class='titulo'>Id:${data[i].id}</p>
               <p class='titulo'>Precio:${data[i].price}</p>
               <p class='title'>Título${data[i].title}</p>
               <p class='categoria'>Categoría: ${data[i].category}</p>
               
              
               
            </div>
            `;

            console.log("**", data[i].category)
          
        }
    }
    
   
    let precioModal = document.getElementById("precioModal")
    precioModal.innerHTML = bloqueHtml;

    let modal_container = document.getElementById('modal-container');
    let close = document.getElementById('close');

    modal_container.classList.add('show');
    modal_container.classList.remove('oculto');

    
    close.addEventListener('click', function() {
        console.log("btn cerra")
        modal_container.classList.add('oculto');
        modal_container.classList.remove('show');
    });

}
















getData();