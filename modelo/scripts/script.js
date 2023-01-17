var menuIcon = document.querySelector('.menu-icon')
var menuMobile = document.querySelector('.menu-mobile')
var iconClose = document.querySelector('.menu-mobile .icon-close')
var abreFormulario = document.querySelector('.overlay')

menuIcon.addEventListener('click', function () {
    menuMobile.classList.add('ativo')
})
iconClose.addEventListener('click', function () {
    menuMobile.classList.remove('ativo')
})
abreFormulario.addEventListener('click', function () {
    location.href = "formulario.html"
})