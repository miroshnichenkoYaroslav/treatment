const openModalButtons = document.getElementById('header-btn')
const closeButtons = document.getElementById('close-button')
const overlay = document.getElementById('overlay')

openModalButtons.addEventListener('click', () => {
    const modal = document.getElementById('modal')
    openModal(modal)
})

closeButtons.addEventListener('click', () => {
    const modal = document.getElementById('modal')
    closeModal(modal)
})

function openModal(modal) {
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    modal.classList.remove('active')
    overlay.classList.remove('active')

    
}