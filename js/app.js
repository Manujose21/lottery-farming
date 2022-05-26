const changeIcon =()=>{
    if(theme.textContent == moon){
        theme.textContent = sun;
    }else{
        theme.textContent = moon;
    }
}


const menuToggle = document.getElementById('menuIcon');
const modal = document.querySelector('.modal');
const backModal = document.querySelector('.bi-x');
const buy = document.querySelector('#buy')
const theme = document.getElementById('theme');

let moon ="🌙";
let sun = "🌞";

menuToggle.addEventListener("click", ()=>{
    menu.classList.toggle('active')
});
buy.addEventListener('click', ()=>{
    modal.classList.add('active')
})
backModal.addEventListener("click", ()=>{
    modal.classList.remove('active')
})
theme.addEventListener("click",()=>{
    document.body.classList.toggle('dark');
    changeIcon();
    
})