const startBtn = document.querySelector('.start');
const menu = document.querySelector('.title-screen')
const gamePage = document.querySelector('.gamePage')


startBtn.addEventListener("click", ()=>{
  menu.style.display = "none"
  gamePage.style.display = "block"
})
