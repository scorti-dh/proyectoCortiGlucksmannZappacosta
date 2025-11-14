
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let buscaName = queryStringObj.get('Buscar').toLowerCase();
let urlNueva = 'https://dummyjson.com/products/search?q=' + buscaName; 

console.log(urlNueva);

fetch(urlNueva)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        let productos = data.products
        let vendidos = document.querySelector('.vendidos')

        for (let i = 0; i < productos.length; i++) {
            vendidos.innerHTML += ` 
            <article class="article_category">
            <img src="${productos[i].images}"></img>
            <h3 class="h3_productos">${productos[i].title}</h3>
            <p>${productos[i].description}</p>
            <p>${productos[i].price}</p>
            <a class="boton" href="">Ver Detalle</a>
                <section class="section_ssr">
                    <div class="div_ssr">
                        <h4>Stock</h4>
                        <p class="div_p ssr_p">${productos[i].stock}</p>
                    </div> 
                    <div class="div_ssr">
                        <h4>Rating</h4>
                        <p class="div_p ssr_p">${productos[i].rating}</p> 
                    </div>
                    <div class="div_ssr">
                        <h4>Brand:</h4>
                        <p class="div_p ssr_p">${productos[i].brand}</p> 
                    </div>
                    </section>
            </article
            `;
        }
    })
