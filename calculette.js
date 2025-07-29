const afficheur = document.getElementById('afficheur')
const valeur1 = document.getElementById('valeur1')
const valeur2 = document.getElementById('valeur2')
const buttons = document.querySelectorAll('.btn')

function calculer(op) {
    if (isNaN(valeur1.value) || isNaN(valeur2.value)) {
        afficheur.innerHTML = "Les deux champs doivent contenir des valeurs numériques"
    } else {
        switch (op) {
            case '+':
                afficheur.innerHTML = `${valeur1.value} ${op} ${valeur2.value} = ${Number(valeur1.value) + Number(valeur2.value)}`
                break;
            case '-':
                afficheur.innerHTML = `${valeur1.value} ${op} ${valeur2.value} = ${Number(valeur1.value) - Number(valeur2.value)}`
                break;
            case '*':
                afficheur.innerHTML = `${valeur1.value} ${op} ${valeur2.value} = ${Number(valeur1.value) * Number(valeur2.value)}`
                break;
            case '/':
                if (valeur2.value == 0) {
                    afficheur.innerHTML = "Problème de division par zéro"
                } else {
                    afficheur.innerHTML = `${valeur1.value} ${op} ${valeur2.value} = ${Number(valeur1.value) / Number(valeur2.value)}`
                }
                break;

        }
    }
}
[valeur1, valeur2].forEach(input => input.addEventListener('input', (event) => {
    buttons.forEach(button => button.disabled = !(valeur1.value && valeur2.value))
    //    buttons.forEach(button => button.disabled = !valeur1.value || !valeur2.value)


    // if (valeur1.value && valeur2.value) {
    //     buttons.forEach(button => button.disabled = false)
    // } 
    // else {
    //     buttons.forEach(button => button.disabled = true)
    // }
}))



































// const v1 = document.getElementById('valeur1')
// const v2 = document.getElementById('valeur2')

// parseInt(v1.value)
// parseInt(v1.value)
// const btns = document.querySelectorAll('.btn')

// console.log(btns);


// v1.addEventListener('input',() =>{
//     if(isNaN(v1) || isNaN(v2)){
//         for (const btn of btns) {
//             btn.setAttribute('disabled','disabled')       
//         }

//         }else if(!isNaN(v1.data) || !isNaN(v2.data)){
//             btn.setAttribute('disabled','')       

//     }
// }) 