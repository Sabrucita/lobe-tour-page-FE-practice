const hamburgerMenu = document.getElementById('hamburgerMenu')
const closeMenu = document.getElementById('closeMenu')
const navLinks = document.getElementById('navLinks')
const navBtn = document.getElementById('menuDownloadBtn')

hamburgerMenu.classList.toggle('hidden',false)
closeMenu.classList.toggle('hidden',true)
navLinks.classList.toggle('hidden',false)

const openSidebar = hamburgerMenu.addEventListener('click', ()=>{
  hamburgerMenu.classList.toggle('hidden',true)
  closeMenu.classList.toggle('hidden',false)
  navLinks.classList.toggle('hidden',false)
  navBtn.classList.toggle('hidden',false)
})

const closeSidebar = closeMenu.addEventListener('click', ()=>{
  closeMenu.classList.toggle('hidden',true)
  hamburgerMenu.classList.toggle('hidden',false)
  navLinks.classList.toggle('hidden',true)
  navBtn.classList.toggle('hidden',true)
})