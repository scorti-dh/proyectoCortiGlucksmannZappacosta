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


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let idName = queryStringObj.get('id');
console.log(idName);

let urlNueva = 'https://dummyjson.com/products/' + idName;

console.log(urlNueva);


fetch(urlNueva)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);
        let productos = data
        console.log(productos);

        let vendidos = document.querySelector('.vendidos')

        vendidos.innerHTML += ` 
            <img class="img_producto" src="${productos.thumbnail}" alt="${productos.title}"></img>
                <!--Imagen de Producto-->
                <article class="article_producto">
                    <p id="brand_detalle">${productos.brand}</p>
                    <h3 id="titulo_detalle">${productos.title}</h3>
                    <p id="desc_detalle">${productos.description}</p>
                    <p class="p_precio">Price: ${productos.price}</p>
                    <a class="comprar" href="product.html">Comprar</a>
                    <div id="tag_cat_stock">
                    <p id="cat_detalle">Categoría: <a href="./category.html?name=${productos.category}">${productos.category}</a></p>
                    <p>Stock: ${productos.availabilityStatus}</p>
                    <ul id="tags_detalle">
                        <li>Tags:</li>
                    </ul>
                    </div>
                </article>
            `;

        let tags = document.querySelector('#tags_detalle')
        if (productos.tags[0]) {
            tags.innerHTML += `
        <li>${productos.tags[0]}</li>
        `
        }
        if (productos.tags[1]) {
            tags.innerHTML += `
        <li>${productos.tags[1]}</li>
        `
        }
        if (productos.tags[2]) {
            tags.innerHTML += ` 
        <li>${productos.tags[2]}</li>
        `
        }

        let comentarios = document.querySelector('.comentarios_product')
        console.log(productos.reviews);
        let reviews = productos.reviews;


        for (let i = 0; i < reviews.length; i++) {
            comentarios.innerHTML += `
            <div class="div_comentarios">
                    <h3>${reviews[i].reviewerName}</h3>
                    <p>${reviews[i].comment}</p>
                    <div class="rev_p">
                    <p>Date: ${reviews[i].date}</p>
                    <p>Rating: ${reviews[i].rating}</p>
                    </div>
            </div>
            `
        }
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })

