const URL = "https://fakestoreapi.com/products";
let productos = document.getElementById("productos");

function getData() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('productos', JSON.stringify(data));
        mapearDatos(data);
    });
}

function mapearDatos(data) {
    let tabla = "<div class='card'>";
    data.forEach(item => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let precio = item.price;
        let bloqueHtml = 
        `
        <div class='card-item'>
            <div class='cabecera' style="background: rgb(${r}, ${g}, ${b});"></div>
            <div class='cont-img'>
                <img src="${item.image}" />
            </div>
            <p class='titulo'>${item.title}</p>
            <p>$${precio} <span class='precio-sd'>$${((precio * 0.1) + precio).toFixed(2)}</span></p>
            <label class='categoria'>${item.category}</label>
            <button onclick='modalProduct(${item.id})'>Descripción</button>
        </div>
        `;
        tabla += bloqueHtml;
    });
    tabla += "</div>";
    productos.innerHTML = tabla;
}

function modalProduct(id) {
    let data = JSON.parse(localStorage.getItem("productos"));

    let product = data.find(item => item.id == id);

    let productDetails = `  

        
        <p class='title'>Título: ${product.title}</p>
        <p class='categoria'>Categoría: ${product.category}</p>
        <p class='descripcion'>Descripcion: ${product.description}</p>
        <p class='precio'>Precio: $${product.price}</p>
        <p >Metodo de pago: Solo Transferencia</p>

    `;

    let productDetailsContainer = document.getElementById("product-details");
    productDetailsContainer.innerHTML = productDetails;

    let modalContainer = document.getElementById('modal-container');
    modalContainer.classList.add('show');

    let closeButton = document.getElementById('close');
    closeButton.addEventListener('click', function() {
        modalContainer.classList.remove('show');
    });
}

getData();