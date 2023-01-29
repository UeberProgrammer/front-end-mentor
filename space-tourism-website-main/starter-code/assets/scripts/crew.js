window.onload = () => {
    document.querySelector(`input#first`).checked = `true`;
}

document.body.addEventListener(`click`, (e) => {
    let imgLine = document.querySelector(`.image_line`);
    let imgWidth = document.querySelector(`.image_line img`).width;
    let infoLine = document.querySelector(`.crewmates_line`);
    let infoWidth = document.querySelector(`.crewmates_line .crewmate`).offsetWidth;
    if(e.target.classList.contains(`first`)) {
        imgLine.style.transform = `translateX(0)`;
        infoLine.style.transform = `translateX(0)`;
    } else if(e.target.classList.contains(`second`)) {
        imgLine.style.transform = `translateX(-${imgWidth}px)`;
        setTimeout(() => {
            infoLine.style.transform = `translateX(-${infoWidth}px)`;
        }, 100)
    }  else if(e.target.classList.contains(`third`)) {
        imgLine.style.transform = `translateX(-${imgWidth * 2}px)`;
        setTimeout(() => {
            infoLine.style.transform = `translateX(-${infoWidth * 2}px)`;
        }, 100)
    }  else if(e.target.classList.contains(`fourth`)) {
        imgLine.style.transform = `translateX(-${imgWidth * 3}px)`;
        setTimeout(() => {
            infoLine.style.transform = `translateX(-${infoWidth * 3}px)`;
        }, 100);
    }
})