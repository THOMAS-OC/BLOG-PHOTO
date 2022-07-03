// Enregistrement du formulaire

const nameForm = document.querySelector("input[id='nom']")
const firstNameForm = document.querySelector("input[id='prenom']")
const mailForm = document.querySelector("input[type='email']")


nameForm.value = localStorage.getItem('nom')
firstNameForm.value = localStorage.getItem('prenom')
mailForm.value = localStorage.getItem('email')

console.log(nameForm);
console.log(firstNameForm);
console.log(mailForm);

nameForm.addEventListener("keyup", (el) => {
    console.log("Changement du nom");
    window.localStorage.setItem("nom", el.target.value)
})

firstNameForm.addEventListener("keyup", (el) => {
    console.log("Changement du nom");
    window.localStorage.setItem("prenom", el.target.value)
})

mailForm.addEventListener("keyup", (el) => {
    console.log("Changement du mail");
    window.localStorage.setItem("email", el.target.value)
})

// FIN Enregistrement du formulaire

// Désactivation temporaire du bouton
// document.querySelector("input[type='submit']").addEventListener("click",(el)=>{
//     el.preventDefault()
// })