const  input =document.getElementById('input')// selectionne l'input
const select = document.getElementById('select')// selectionne le select
const button = document.querySelector('button')//selectionne le bouton
//on surveille l'input
input.addEventListener("input", ()=>{
    //des que l'evenement ce declenche on active le bouton
    button.disabled = false;
    
})

// a la nouvelle saisie on verifie que la ville n'existe pas dans la liste 
// si elle existe on n'active pas le bouton ajouter
// ajouter un boution supprimer et supprimer plusieur

button.addEventListener("click",(e)=>{
    const option = document.createElement('option')// cree un element option
    //on recupere la value dans l'input et on l'attribue à option   
    option.innerHTML = input.value
    //on cree un nouveau noeud au select avec l'option qu'on vient de creer
    select.appendChild(option)
    // on vide l'input pour la prochaine saisie et on desactive le bouton
    input.value = '';
    //et on desactive le bouton
    button.disabled = true;
    //console.log(document.querySelector('select'));
    //console.log(document.getElementsByTagName('option'));
    
        //input.value.remove()
})