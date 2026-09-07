const menuButton = document.querySelector('.manu-button');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector(".container-content");

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    content.classList.toggle("full-width");
});