const move = document.querySelectorAll(".scroll").forEach(item => {
    item.addEventListener("click", nextContainer);
});

const toTop = document.querySelector(".totop");
const header = document.getElementById("header");

toTop.addEventListener("click", backToTop);

function nextContainer(event) {
    let nextElement = event.target.parentNode.parentNode.nextElementSibling;
    nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToTop() {
    header.scrollIntoView({ behavior: 'smooth', block: 'start' });
}