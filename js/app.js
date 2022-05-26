const menuToggle = document.getElementById('menuIcon');
const modal = document.querySelector('.modal');
const backModal = document.querySelector('.bi-x');
const buy = document.querySelector('#buy')

menuToggle.addEventListener("click", ()=>{
    menu.classList.toggle('active')
});
buy.addEventListener('click', ()=>{
    modal.classList.add('active')
})
backModal.addEventListener("click", ()=>{
    modal.classList.remove('active')
})