
const navIcon = document.querySelector('.icon-nav'),
    nav = document.querySelector('.nav-list'),
    navItems = document.querySelectorAll('.nav-list a'),
    buttonNav = document.querySelector('.nav-list button')


navIcon.onclick = function () {
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }else{
        nav.classList.add('active')
    }
} 
navItems.forEach(item => {
    item.onclick = () => {
        nav.classList.remove('active')
    }
})
buttonNav.onclick = () => {
  nav.classList.remove('active')
}


//Swiper JS
  var swiper = new Swiper(".slide-container", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//===============MODAL================

const links = document.querySelectorAll('.don'),
      close = document.querySelector('.modal-content .close'),
      modal = document.querySelector('.modal-container');

links.forEach(item => {
  item.addEventListener('click', () => {
    modal.classList.add('active')
  })
})
  
close.addEventListener('click', () => {
  modal.classList.remove('active')
})