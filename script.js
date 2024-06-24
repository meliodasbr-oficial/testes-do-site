const wrapper = document.querySelector('.wrapper');


iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
}

/* Menu cell */

function clickMenu() {
    if (menucell.style.display == 'flex') {
        menucell.style.display = 'none' 
    }
           
    else (menucell.style.display = 'flex')
}
