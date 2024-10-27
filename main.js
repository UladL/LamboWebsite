const button = document.querySelector('.button0');
const menu = document.querySelector('.menu1')
const menuLinks = document.querySelectorAll('.menu__link')

button.addEventListener('click', () =>{
    button.classList.toggle('active')

    if(button.classList.contains('.active')){
        button.setAttribute('aira-expanded', 'true')
        menu.setAttribute('aira-hidden', 'false')
        menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
    }else{
        button.setAttribute('aira-expanded', 'false')
        menu.setAttribute('aira-hidden', 'true')
        menuLinks.forEach(link => link.setAttribute('tabindex', '-1'))
    }
});