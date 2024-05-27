// ==================(navbar)==================(01)

const menu_hamburger = document.querySelector(".menu_hamburger");
const navbar = document.querySelector(".navbar");

{
    menu_hamburger.addEventListener("click", function () {
        console.log("open burger")

        if (menu_hamburger.classList.contains("open")) {
            // ==================


            // ((hamburger) => (remove("open")))
            menu_hamburger.classList.remove("open")

            // ((navbar) => (remove("active")))
            navbar.classList.remove("active")




        } else {
            // ==================

            // ((hamburger) => (add("open")))
            menu_hamburger.classList.add("open")

            // ((navbar) => (add("active")))
            navbar.classList.add("active")

            // ================(remove)====================
            search_container.classList.remove("active")
            shopping_container.classList.remove("active")
        }

    })
}

// ==================(search_container)==================(02)

const search_btn = document.querySelector("#search_btn")
const search_container = document.querySelector(".search_container")
{

    // ((search_btn) => (click("search_container")))
    search_btn.onclick = () => {

        // ((search_container) => (toggle("active")))
        search_container.classList.toggle("active")

        // ================(remove)====================
        menu_hamburger.classList.remove("open")
        navbar.classList.remove("active")
        shopping_container.classList.remove("active")
    }
}

// ==================(shopping_container)==================(03)

const shopping_btn = document.querySelector("#shopping_btn")
const shopping_container = document.querySelector(".shopping_container")
{
    // ((shopping_btn) => (click("shopping_container")))
    shopping_btn.onclick = () => {

        // ((shopping_container) => (toggle("active")))
        shopping_container.classList.toggle("active")


        // ================(remove)====================
        menu_hamburger.classList.remove("open")
        navbar.classList.remove("active")
        search_container.classList.remove("active")
    }
}

// ==================(login_container)==================(04)

const login_btn = document.querySelector("#login_btn");
const login_container = document.querySelector(".login_container");
const close_icon = document.querySelector("#close_icon");
{

    // ((login_btn) => (click = (opacity)("login_container")))
    login_btn.onclick = () => {

        // ((login_container) => (toggle("active")))
        login_container.classList.toggle("active")

        // ================(remove)====================
        menu_hamburger.classList.remove("open")
        navbar.classList.remove("active")
        search_container.classList.remove("active")
        shopping_container.classList.remove("active")
    }

    // ((close_icon) => (click("login_container")))
    close_icon.onclick = () => {

        // ((login_container) => (remove("active")))
        login_container.classList.remove("active")
    }
}

// ==================(scroll)==================(05)
{
    // (container(toggle("active"))) == شادو
    window.onscroll = () => {

        // scroll_top
        if (window.scrollY > 60) {
            document.querySelector("#scroll_top").classList.add("active")
        } else {
            document.querySelector("#scroll_top").classList.remove("active")
        }

        // header_sticky
        if (window.scrollY > 80) {
            document.querySelector(".header_sticky").classList.add("active")
        } else {
            document.querySelector(".header_sticky").classList.remove("active")
        }

        // ================(remove)====================
        menu_hamburger.classList.remove("open")
        navbar.classList.remove("active")
        search_container.classList.remove("active")
        shopping_container.classList.remove("active")
    }
}

// ==================(home)==================(06)
{
    var swiper = new Swiper(".home .box_slider", {
        loop: true,
        centeredSlides: true,

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
}

// ==================(featured)==================(07)
{
    var swiper = new Swiper(".featured .container_slider", {
        spaceBetween: 20,

        loop: true,
        centeredSlides: true,

        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
}

// ==================(arrivals)==================(08)
{
    var swiper = new Swiper(".arrivals .container_slider", {
        spaceBetween: 20,

        loop: true,
        centeredSlides: true,

        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
}

// ==================(testimonials)==================(09)
{
    var swiper = new Swiper(".testimonials .container_slider", {
        spaceBetween: 20,

        grabCursor: true,

        loop: true,
        centeredSlides: true,

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
}

// ==================(blogs)==================(10)
{
    var swiper = new Swiper(".blogs .container_slider", {
        spaceBetween: 20,

        grabCursor: true,

        loop: true,
        centeredSlides: true,

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
}