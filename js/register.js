let submitForm = document.querySelector('.form-register')
let contra = document.querySelector('#contra')
let contraRepeat = document.querySelector('#repetir_contra')
let mailInput = document.querySelector('#correo')

submitForm.addEventListener('submit', function (e) {
     e.preventDefault()
    let mail = mailInput.value
    let contraValue = contra.value
    let contraRepValue = contraRepeat.value
    console.log(contraValue);
    console.log(contraRepeat);

    if (contraValue === '') {
        alert('Tenes que escribir algo')
    } else if (mail === ''){
        alert('Tenes que escribir algo')
    } else if (contraValue.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres')
    } else if (contraRepValue !== contraValue) {
        alert('Las contraseñas deben ser iguales')
    } else {
        let jsonUsername = JSON.stringify(mail)
        let guardadoUsername = localStorage.setItem("userName", jsonUsername)

        // let jsonContra = JSON.stringify(contraValue)
        //let guardadoContra = localStorage.setItem("Contralog", jsonContra)

        // console.log(guardadoUsername);
        
       this.submit()
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