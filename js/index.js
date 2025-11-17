let urlBeauty = 'https://dummyjson.com/products/category/beauty'

fetch(urlBeauty)
    .then(function (res) {
        return res.json()
    })

    .then(function (data) {
        let productos = data.products
        console.log(productos);

        let vendidos = document.querySelector('.vendidos')
        let recomendaciones = document.querySelector('.recomendaciones')

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

        for (let i = 12; i < 24; i++) {
            recomendaciones.innerHTML += ` 
            <article class="article_category">
            <img src="${productos[i].thumbnail}"></img>
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

    .catch(function (error) {
        console.log("Error: " + error);
    })


    let urlLaptops = 'https://dummyjson.com/products/category/laptops'

    fetch(urlLaptops)
    .then(function (res) {
        return res.json()
    })

    .then(function (data) {
        let productos = data.products
        console.log(productos);
        let recomendaciones = document.querySelector('.recomendaciones')

        for (let i = 0; i < productos.length; i++) {
            recomendaciones.innerHTML += ` 
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

    .catch(function (error) {
        console.log("Error: " + error);
    })


let urlCategorias = 'https://dummyjson.com/products/categories'

let aside = document.querySelector(".ul_aside")

fetch(urlCategorias)
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

let comprobante = document.querySelector('form')
let busqueda = document.querySelector('input')

comprobante.addEventListener('submit', function (e) {
    let resultadoBusqueda = busqueda.value

    if (resultadoBusqueda === '') {
        e.preventDefault()
        alert('Tenes que escribir algo')
    } else if (resultadoBusqueda.length < 3) {
        alert('Tiene que ser mas 3 caracteres')
        e.preventDefault()
    } else {

    }
})


// bug: cuando pones la pagina x 1era vez, aparece el logout. una vez registrado y hecho el logout ya no mas
