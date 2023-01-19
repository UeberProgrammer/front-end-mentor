let burgerBtn = document.querySelector('.burger_btn');
let windowContainer = document.querySelector('.window_container');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    windowContainer.style.display = 'block'
    if(windowContainer.classList.contains('disabled')) {
        windowContainer.classList.add('active')
        windowContainer.classList.remove('disabled')
    } else {
        windowContainer.classList.remove('active')
        windowContainer.classList.add('disabled')
    }
})