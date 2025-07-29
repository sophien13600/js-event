const input = document.querySelector('input')

input.addEventListener('keypress',(event) =>{
    console.log(event);
    if (event.key < 'A' || event.key >'Z')
        alert("Seules les lettres en majuscules autorisées")
        event.preventDefault()
})

/**
 * 
 * const input = document.querySelector('input')

input.addEventListener('input', (event) => {
    console.log(event.data);
    console.log(event.target.value);
    if (event.data < 'A' || event.data > 'Z') {
        alert("Seules les lettres en majuscules autorisées")
        event.preventDefault()
    }
})
// input.addEventListener('keypress', (event) => {
//     console.log(event.key);
//     console.log(event.value);
//     if (event.key < 'A' || event.key > 'Z') {
//         alert("Seules les lettres en majuscules autorisées")
//         event.preventDefault()
//     }
// })
 * */ 