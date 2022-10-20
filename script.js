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

overlay.addEventListener('click', () => {
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

// const dropdownButton = document.querySelectorAll('[data-dropdown-button]')
//     dropdownButton.forEach(myFunction)

//     function myFunction (button) {
//         button.addEventListener('mouseover', () => {
//             let dropdownMenu = button.closest('[data-dropdown-menu]')
//             dropdownMenu.classList.add('active')
//     })
//     }


// document.addEventListener('mouseover', e => {
//     const isDropdownButton = e.target.matches('[data-dropdown-button]')
//     if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

//     let currentDropdown
//     if (isDropdownButton) {
//         currentDropdown = e.target.closest('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//     }
// })



// document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
//     if (dropdown === currentDropdown) return
//     dropdown.classList.remove('active')
// })

const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change', () => {
    const submitBtn = document.getElementById('submit-btn')
    submitBtn.removeAttribute('disabled')
    // submitBtn.style.backgroundColor = '#FA846D'
    submitBtn.classList.toggle('btn-active')
})