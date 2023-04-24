const email =  document.getElementById('email')
const pass =  document.getElementById('passwoed')
const form =  document.getElementById('form')
const parrafo =  document.getElementById('warnings')

// *******************
form.addEventListener('sumit', e=>{
    e.preventDefault();
    // validar email
    let warnins = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
if(regexEmail.test(email.value)){
    warnins += 'El email no es valido'
    entrar = true
}

})

