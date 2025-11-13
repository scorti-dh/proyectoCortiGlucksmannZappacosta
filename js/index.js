let url = 'https://dummyjson.com/products'

fetch(url)
    .then(function (res) {
        return res.json()
    })

    .then(function (data) {
        let productos = data.products
        console.log(productos);

        let prueba = document.querySelector('.play_station')


        for (let i = 0; i < 1; i++) {
            prueba.innerHTML += ` 
            <img src="${productos[i].images}"></img>
            <h3 class="h3_productos">${productos[i].title}</h3>
            <p>${productos[i].description}</p>
            <p>${productos[i].price}</p>
                <section class="section_ssr">
                    <div class="div_ssr">
                        <h4>Stock</h4>
                        <p class="div_p">${productos[i].stock}</p>
                    </div> 
                    <div class="div_ssr">
                        <h4>Rating</h4>
                        <p class="div_p">${productos[i].rating}</p> 
                    </div>
                    <div class="div_ssr">
                        <h4>Brand:</h4>
                        <p class="div_p">${productos[i].brand}</p> 
                    </div>
                    </section>
            <a class="boton" href="">Ver Detalle</a>
            `;
        }
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })



    //header y alerts al escribir
let form = document.getElementById("search-form")
let input = document.getElementById("search")

form.addEventListener("submit", function(evento){
    let productoBuscado = input.value;

    if (textoBuscado === ""){
        alert("el campo de busqueda no puede estar vacio");
        evento.preventDefault();
    }else if (textoBuscado.length < 3){
        alert("El producto que esta buscando debe tener al menos 3 caracteres")
        evento.preventDefault()
    }
});