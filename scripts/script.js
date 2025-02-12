var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      769: {
        spaceBetween: 0,
      }
    }
  });

  var advantageSwiper = new Swiper(".advantageSwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
      observeParents: true,
      dragSize: 32,
    },
    spaceBetween: 32,
    slidesPerView: 1.6,
    freeMode: true,
    
  });

  var rightSwiper = new Swiper(".rightSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1.2,
    spaceBetween: 8,
  });

  document.getElementById('submit-btn').addEventListener('click', function() {
    const name = document.querySelector('.name');
    const lastname = document.querySelector('.lastname');
    const phoneNumber = document.querySelector('.phone-number');

    name.classList.remove('error');
    lastname.classList.remove('error');
    phoneNumber.classList.remove('error');

    let valid = true;

    if (!name.value) {
        name.classList.add('error');
        valid = false;
    }

    if (!lastname.value) {
        lastname.classList.add('error');
        valid = false;
    }

    phoneMask.updateValue();
    
    const cleanPhone = phoneNumber.value.replace(/\D/g, '');
    if (cleanPhone.length !== 11 || cleanPhone[0] !== '7') {
        phoneNumber.classList.add('error');
        valid = false;
    }
});

const phoneInput = document.querySelector('.phone-number');
const phoneMask = IMask(phoneInput, {
    mask: '+{7}(000) 000-00-00' 
});

document.getElementById('toggle-button').addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');

  navMenu.classList.toggle('show');
  overlay.classList.toggle('show');
  overlay.style.display = navMenu.classList.contains('show') ? 'block' : 'none'; // Показать/скрыть затемняющий слой
});

document.getElementById('overlay').addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
  this.style.display = 'none';
});