const navBarTogglerIcons = document.querySelector(".navbar-toggler-icons")
const offcanvasMenu = document.querySelector(".offcanvas-menu")
const navbarMain = document.querySelector(".navbar-main")
const offcanvasClose = document.querySelector(".offcanvas-close")

const offCanvasMenuClick = document.querySelector(".navbar-off-canvas-menu")
const offCanvasMenu = document.querySelector(".off-canvas-menu")
const menuOverly = document.querySelector(".menu-overly")


// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});





navBarTogglerIcons.addEventListener("click", function () {
    if (offcanvasMenu.classList.contains("offcanvas-trigger", "menu-overly-add")) {
        offcanvasMenu.classList.remove("offcanvas-trigger");
        menuOverly.classList.remove("menu-overly-add");
    } else {
        offcanvasMenu.classList.add("offcanvas-trigger");
        menuOverly.classList.add("menu-overly-add");
    }
});


//hamburger menu active
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
    } else {
        hamburger.classList.add('active');
    }
})

// menu overly remove
menuOverly.addEventListener('click', () => {
    if (menuOverly.classList.contains('menu-overly-add')) {
        menuOverly.classList.remove('menu-overly-add');
        offCanvasMenu.classList.remove("hamburger-trigger");
    }
})

menuOverly.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        offcanvasMenu.classList.remove("offcanvas-trigger");
        hamburger.classList.remove('active');
    }
})


// menu overly remove
offcanvasClose.addEventListener('click', () => {
    if (menuOverly.classList.contains('menu-overly-add', 'hamburger-trigger')) {
        menuOverly.classList.remove('menu-overly-add');
        offcanvasMenu.classList.remove("offcanvas-trigger");
        hamburger.classList.remove('active');
    }
})


// slick slider active
$(".gtr-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
});

$(".gtr-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    // Loop through each ".text-animation" element
    $(".text-animation").each(function (index, element) {
        const textAnimation = element;
        const newTextContent = textAnimation.textContent.replace(/./g, "<span>$&</span>");

        textAnimation.innerHTML = newTextContent;

        let spans = textAnimation.querySelectorAll("span");
        for (let i = 0; i < spans.length; i++) {
            let left = innerWidth * Math.random();
            let top = innerHeight * Math.random();

            if (Math.random() < 0.5) {
                spans[i].style.left = "-" + left + "px";
            } else {
                spans[i].style.left = left + "px";
            }
            if (Math.random() < 0.5) {
                spans[i].style.top = "-" + top + "px";
            } else {
                spans[i].style.top = top + "px";
            }
        }



    });

});


$(".gtr-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    // Reset text animation for ".text-animation" elements
    $(".text-animation").each(function (index, element) {
        const textAnimation = element;
        const newTextContent = textAnimation.textContent.replace(/./g, "<span>$&</span>");

        textAnimation.innerHTML = newTextContent;

        let spans = textAnimation.querySelectorAll("span");
        for (let i = 0; i < spans.length; i++) {
            let left = innerWidth * Math.random();
            let top = innerHeight * Math.random();

            if (Math.random() < 0.5) {
                spans[i].style.left = "-" + left + "px";
            } else {
                spans[i].style.left = left + "px";
            }
            if (Math.random() < 0.5) {
                spans[i].style.top = "-" + top + "px";
            } else {
                spans[i].style.top = top + "px";
            }
        }
    });

    $(".hero-thumb img").removeClass("zoomed-in");
    $(".hero-thumb img").removeClass("zoomed-out");
});


$(".gtr-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".hero-thumb img").removeClass("zoomed-in");
    $(".hero-thumb img").addClass("zoomed-out");
});

$(".gtr-slider").on("afterChange", function (event, slick, currentSlide) {
    $(".hero-thumb").eq(currentSlide).find("img").removeClass("zoomed-out");
    $(".hero-thumb").eq(currentSlide).find("img").addClass("zoomed-in");
});


// blobs
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene, {
    relativeInput: true
});