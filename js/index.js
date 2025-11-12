let url = 'https://dummyjson.com/products'

fetch(url)
    .then(function (res) {
        return res.json()
    })

    .then(function (data) {
        let productos = data.products
        console.log(productos);

        let vendidos = document.querySelector('.vendidos')
        let recomendaciones = document.querySelector('.recomendaciones')

    for (let i = 0; i < 12; i++) {
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

        for (let i = 12; i < 24; i++) {
            recomendaciones.innerHTML += ` 
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

    .catch(function (error) {
        console.log("Error: " + error);
    })