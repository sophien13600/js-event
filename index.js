const bouton = document.querySelector('button')

bouton.addEventListener('click', () => {
    const nom = document.getElementById('nom')
    alert(`Bonjour ${nom.value}`)
     bouton.removeEventListener('click', afficherMessage)
})
// bouton.addEventListener('click', function () {
//     const nom = document.getElementById('nom')
//     alert(`Bonjour ${nom.value}`)
// })



// bouton.addEventListener('click', afficherMessage)


// function afficherMessage() {
//     const nom = document.getElementById('nom')
//     alert(`Bonjour ${nom.value}`)
// }