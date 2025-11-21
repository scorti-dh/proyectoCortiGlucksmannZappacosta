//resultados de busqueda 
let urlCat = 'https://dummyjson.com/products/categories'

let aside = document.querySelector(".ul_aside")

fetch(urlCat)
    .then(function (res) {
        return res.json()
    })

    .then(function (data) {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            aside.innerHTML +=`
                <li> <a href="./category.html?name=${data[i].name}">${data[i].name}</a></li>
                `
        }
    })

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let searchName = queryStringObj.get('Buscar');
console.log(searchName);

let urlNueva = 'https://dummyjson.com/products/search?q=' + searchName;

console.log(urlNueva);

fetch(urlNueva)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let productos = data.products;
        let titulo = document.querySelector('#search_main');
        console.log(productos);

        titulo.innerHTML += ` 
            <h2 class="titulos">Results for: ${searchName}</h2>
            <section class="secciones vendidos"></section>
        `;

        let vendidos = document.querySelector('.vendidos');

        for (let i = 0; i < productos.length; i++) {
            vendidos.innerHTML += ` 
                <article class="article_category">
                    <img src="${productos[i].thumbnail}">
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
                </article>
            `;
        }
    });

  
    
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