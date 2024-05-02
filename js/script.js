const menuIcon = document.querySelector(".header_menu-icon");
const dropdown = document.querySelector(".header_dropdown");
const crossIcon = document.querySelector(".header_cross-icon")
menuIcon.addEventListener('click',()=>{
    dropdown.style.display='block'
    menuIcon.style.display='none'
    crossIcon.style.display='block'
    
})
crossIcon.addEventListener('click',()=>{
    dropdown.style.display='none'
    menuIcon.style.display='block'
    crossIcon.style.display='none'
})