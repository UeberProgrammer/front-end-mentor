let burgerBtn = document.querySelector('.burger_btn'),
    closedBurger = document.querySelector('.closed_burger'),
    openBurger = document.querySelector('.open_burger'),
    burgerWindow = document.querySelector('.burger_window');

burgerBtn.addEventListener('click', () => {
    closedBurger.classList.toggle('hidden');
    openBurger.classList.toggle('hidden')

    if(!openBurger.classList.contains('hidden')) {
        burgerWindow.classList.add('active')
    } else {
        burgerWindow.classList.remove('active')
    }
})

if(window.innerWidth >= 1440) {
    let navLinks = document.querySelectorAll('.link');
    for(let i = 0; i < 4; i++) {
        let content = navLinks[i].innerText
        navLinks[i].innerHTML = `<span class='number'>0${i}</span> ${content}`;
    }
}
