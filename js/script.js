searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

//funcion para el login
let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
  console.log("Login clicked!");
  loginForm.classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};

//funcion para dejar fijo el menu despues de escrolear/ remover cuadro de búsqueda /
window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

//funcion para el slider de la biblioteca
var swiper = new Swiper(".books-slider", {
  loop: true,
  centerSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centerSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centerSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  loop: true,
  centerSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
