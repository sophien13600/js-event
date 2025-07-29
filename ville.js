//quand l'input est activer on recupere la ville et on active le bouton
//on recupere l'input et on l'ajoute dans le select
// on vide l'input pour la prochiane saisie et on desactive le bouton
// a la nouvelle saisie on verifie que la ville n'existe pas dans la liste 
// si elle existe on n'active pas le bouton ajouter
// ajouter un boution supprimer et supprimer plusieur


const  input =document.getElementById('input')
const select = document.getElementById('select')
const button = document.querySelector('button')
const option = document.createElement('option')
input.addEventListener('input',(event)=>{
if(event){
    button.removeAttribute('disabled')
    return event.target.value
    console.log(event.target.value);
}
})

button.addEventListener('click',(event) =>{
    option.innerHTML = input.value
    select.appendChild(option)

} )