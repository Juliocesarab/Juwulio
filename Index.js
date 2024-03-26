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
            <p class='titulo'>${item.title}</p>
            <p>$${precio} <span class='precio-sd'> $${ ((precio * 0.1) + precio).toFixed(2)  }</span> </p>
            <label class='categoria'>${item.category}</label>
            <button onclick='modalProduct(${item.price})' id='openProd'> Descripción </button>
            
         </div>
         `;
         tabla += bloqueHtml;
    });
    tabla +="</div>";
    productos.innerHTML = tabla;

}


function modalProduct(precio ){
    console.log(precio)
    let precioModal = document.getElementById("precioModal")

    let bloqueHtml = 
         `
         <div >
           
            <p class='titulo'>${precio}</p>
           
            
         </div>
         `;

    precioModal.innerHTML = bloqueHtml;

    // item.forEach(producto => {
    //     console.log(item.title)
    // })



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
// function modalProduct(precio ){
//     console.log(precio)
//     let precioModal = document.getElementById("precioModal")

//     let bloqueHtml = 
//          `
//          <div >
           
//             <p class='titulo'>${precio}</p>
           
            
//          </div>
//          `;

//     precioModal.innerHTML = bloqueHtml;

//     // item.forEach(producto => {
//     //     console.log(item.title)
//     // })



//     let modal_container = document.getElementById('modal-container');
//     let close = document.getElementById('close');

//     modal_container.classList.add('show');
//     modal_container.classList.remove('oculto');

    
//     close.addEventListener('click', function() {
//         console.log("btn cerra")
//         modal_container.classList.add('oculto');
//         modal_container.classList.remove('show');
//     });

// }















getData();