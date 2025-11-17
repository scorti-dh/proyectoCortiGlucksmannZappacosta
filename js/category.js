let url = 'https://dummyjson.com/products/categories'

let aside = document.querySelector(".ul_aside")

fetch(url)
    .then(function (res) {
        return res.json()
    })

    .then(function (data) {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            aside.innerHTML +=
                `<li> <a href="./category.html?name=${data[i].name}">${data[i].name}</a></li>`
        }
    })

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let catName = queryStringObj.get('name');
let urlNueva = 'https://dummyjson.com/products/category/' + catName; 

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
            <img src="${productos[i].thumbnail}"></img>
            <h3 class="h3_productos">${productos[i].title}</h3>
            <p>${productos[i].description}</p>
            <p>${productos[i].price}</p>
            <a class="boton" href="product.html?id=${productos[i].id}">Ver Detalle</a>
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
