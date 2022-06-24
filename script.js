const btn_mobile = window.document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = window.document.getElementById('nav')
    nav.classList.toggle('active')

}

btn_mobile.addEventListener('click', toggleMenu)