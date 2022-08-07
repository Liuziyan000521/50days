const panels = document.querySelectorAll('.panel');

panels.forEach(element => {
    element.addEventListener('click', () => {
        removeDefault();
        element.classList.add('active')
    })
})

function removeDefault() {
    panels.forEach(element => element.classList.remove('active'))
}