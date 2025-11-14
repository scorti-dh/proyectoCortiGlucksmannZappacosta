let submitForm = document.querySelector('.form_login')
let contra = document.querySelector('#contra')
let mailInput = document.querySelector('#correo')

submitForm.addEventListener('submit', function (e) {
     e.preventDefault()
    let mail = mailInput.value
    let contraValue = contra.value
    console.log(contraValue);
    console.log(mail);

    if (contraValue === '') {
        alert('Tenes que escribir algo')
    } else if (mail === ''){
        alert('Tenes que escribir algo')
    } else if (contraValue.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres')
    } else {
        let jsonUsername = JSON.stringify(mail)
        let guardadoUsername = localStorage.setItem("userName", jsonUsername)

        // let jsonContra = JSON.stringify(contraValue)
        //let guardadoContra = localStorage.setItem("Contralog", jsonContra)

        // console.log(guardadoUsername);
        
       this.submit()
    }
})