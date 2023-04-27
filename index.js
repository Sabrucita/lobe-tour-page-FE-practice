const hamburgerMenu = document.getElementById('hamburgerMenu')
const closeMenu = document.getElementById('closeMenu')
const navLinks = document.getElementById('navLinks')
closeMenu.classList.toggle('hidden',true)

const openSidebar = hamburgerMenu.addEventListener('click', ()=>{
  if(navLinks.classList.contains('hidden')){
    hamburgerMenu.classList.toggle('hidden',true)
    closeMenu.classList.toggle('hidden',false)
    navLinks.classList.toggle('hidden',false)
  }
})

const closeSidebar = closeMenu.addEventListener('click', ()=>{
  if(!navLinks.classList.contains('hidden')){
    closeMenu.classList.toggle('hidden',true)
    hamburgerMenu.classList.toggle('hidden',false)
    navLinks.classList.toggle('hidden',true)
  }
})