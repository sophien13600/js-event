const parent =document.getElementById('parent')
const enfant =document.getElementById('enfant')

parent.addEventListener('click', () => {
    alert('parent')
})

enfant.addEventListener('click', (event) => {
        alert('enfant')
        event.stopPropagation()
})