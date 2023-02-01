const sectionTwoHeding = document.querySelector('.section_two .left_part .heading2');
const sectionTwoP = document.querySelector('.section_two .left_part .paragraph');
const sectionTwoButton = document.querySelector('.section_two .left_part .button_container');
const sectionThreeHeading = document.querySelector('.section_three .heading2');
const sectionThreeColumns = document.querySelectorAll('.section_three .how_it_works_component');
const sectionFourP = document.querySelector('.section_four .paragraph');
const sectionFourButton = document.querySelector('.section_four .button_container');
const faqHeading = document.querySelector('.section_five .heading2');
const faqColumns = document.querySelectorAll('.section_five .accordion li');

const hiddenElArr = [sectionTwoHeding, sectionTwoP, sectionTwoButton, sectionThreeHeading, sectionThreeColumns, sectionFourP, sectionFourButton, faqHeading, faqColumns];

hiddenElArr.forEach(el => el.length >= 1 ? el.forEach(el => el.classList.add('hidden')) : el.classList.add('hidden'));

function showScroll() {
    const elements = document.querySelectorAll('.hidden')
    for(let el = 0; el < elements.length; el++) {
        let h = window.innerHeight;
        let revealTop = elements[el].getBoundingClientRect().top;
        let revealStop = 300;

        if(revealTop < h - revealStop) {
            elements[el].classList.add('showed');
        }
    }
}
window.addEventListener('scroll', showScroll);

document.querySelector('.section_one').addEventListener('mousemove', moveImg)
document.querySelector('.section_one').addEventListener('mouseleave', () => {
    document.querySelectorAll('.move_images').forEach(el => {
        el.style.transition = '.5s ease'
        el.style.transform = `translateX(0px) translateY(0px)`
    })
})
function moveImg(e) {
    document.querySelectorAll('.move_images').forEach(el => {
        const moving_value = el.getAttribute('data-value');
        let x = (e.clientX * moving_value) / 250; 
        let y = (e.clientY * moving_value) / 250;
        el.style.transition = `transform .1s ease`
        el.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}