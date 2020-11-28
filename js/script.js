const move = document.querySelectorAll(".scroll").forEach(item => {
    item.addEventListener("click", nextContainer);
});

const toTop = document.querySelector(".totop");
const header = document.querySelector(".header");


toTop.addEventListener("click", backToTop);

function nextContainer(event) {
    setDocHight();
    let nextElement = event.target.parentNode.parentNode.nextElementSibling;
    nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToTop() {
    setDocHight();
    header.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

//Get the viewport height and multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// the value in the --vh custom property to the root of the document
function setDocHight() {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', function () {
    setDocHight();
})



setDocHight();