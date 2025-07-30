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

button.addEventListener("click",()=>{
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


/**
 * 
 *Correction 

 let villes = []
let villesSelect = document.querySelector('select')
let ville = document.querySelector('#ville')
let boutonAjouter = document.querySelector('.btn-dark')
function ajouter() {
    console.log(ville.value);

    villes.push(ville.value.toUpperCase())
    let option = document.createElement('option')
    option.innerHTML = ville.value

    villesSelect.appendChild(option)
    ville.value = ""
    boutonAjouter.disabled = true
    ville.focus()
}

function verifierEtat() {
    boutonAjouter.disabled = !ville.value || ville.value.trim().length == 0 || villes.includes(ville.value.trim().toUpperCase())
}

function supprimerPlusieurs() {
    let options = villesSelect.options
    for (let i = options.length - 1; i >= 0; i--) {
        if (options[i].selected) {
            villesSelect.remove(i)
            villes.splice(i, 1)
        }
    }
    // let selectedOptions = [...villesSelect.selectedOptions]
    // console.log(villes);

    // selectedOptions.forEach(opt => villes.splice(villes.indexOf(opt.value), 1))

    // selectedOptions.forEach(opt => opt.remove())
    // console.log(villes);

}
}
  */