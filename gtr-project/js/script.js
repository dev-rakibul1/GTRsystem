try {
    const navBarTogglerIcons = document.querySelector(".navbar-toggler-icons")
    const offcanvasMenu = document.querySelector(".offcanvas-menu")
    const navbarMain = document.querySelector(".navbar-main")
    const offcanvasClose = document.querySelector(".offcanvas-close")

    const offCanvasMenuClick = document.querySelector(".navbar-off-canvas-menu")
    const offCanvasMenu = document.querySelector(".off-canvas-menu")
    const menuOverly = document.querySelector(".menu-overly")


    function pageScroll() {
        window.scrollTo(0, 0);
    }



    //Menu active
    // let scrollBar = document.querySelector('.navigation-bar');
    // window.addEventListener('scroll', () => {

    //     if (window.pageYOffset < 100) {
    //         //scrollBar.classList.add('rakibul')
    //         scrollBar.classList.remove('nav-action');

    //         scrollBar.style.transition = '5s';

    //         scrollBar.style.opacity = '1';
    //     } else {
    //         scrollBar.classList.add('nav-action')
    //         // scrollBar.style.opacity = '0';
    //     }

    //     if (this.window.scrollBy) {

    //     }
    // })

    // e-shop menu sticky effects
    window.addEventListener('scroll', () => {
        var navigation = document.querySelector('.navigation-bar');
        navigation.classList.toggle('navbar-sticky', window.scrollY > 0);
    })




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
    // $(".gtr-slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     fade: true,
    //     cssEase: 'linear',
    //     arrows: false,
    // });

    $(document).ready(function () {
        var slider = $(".gtr-slider");

        slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            cssEase: 'linear',
            arrows: false,
        });

        slider.on('mouseenter', function () {
            slider.slick('slickPlay');
        });

        slider.on('mouseleave', function () {
            slider.slick('slickPlay');
        });
    });




    // $(".gtr-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    //     // Loop through each ".text-animation" element
    //     $(".text-animation").each(function (index, element) {
    //         const textAnimation = element;
    //         const newTextContent = textAnimation.textContent.replace(/./g, "<span>$&</span>");

    //         textAnimation.innerHTML = newTextContent;

    //         let spans = textAnimation.querySelectorAll("span");
    //         for (let i = 0; i < spans.length; i++) {
    //             let left = 10 * Math.random();
    //             let top = 10 * Math.random();

    //             if (Math.random() < 0.5) {
    //                 spans[i].style.left = "-" + left + "px";
    //             } else {
    //                 spans[i].style.left = left + "px";
    //             }
    //             if (Math.random() < 0.5) {
    //                 spans[i].style.top = "-" + top + "px";
    //             } else {
    //                 spans[i].style.top = top + "px";
    //             }
    //         }



    //     });

    // });


    // $(".gtr-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    //     // Reset text animation for ".text-animation" elements
    //     $(".text-animation").each(function (index, element) {
    //         const textAnimation = element;
    //         const newTextContent = textAnimation.textContent.replace(/./g, "<span>$&</span>");

    //         textAnimation.innerHTML = newTextContent;

    //         let spans = textAnimation.querySelectorAll("span");
    //         for (let i = 0; i < spans.length; i++) {
    //             let left = 50 * Math.random();
    //             let top = 50 * Math.random();

    //             if (Math.random() < 0.5) {
    //                 spans[i].style.left = "-" + left + "px";
    //             } else {
    //                 spans[i].style.left = left + "px";
    //             }
    //             if (Math.random() < 0.5) {
    //                 spans[i].style.top = "-" + top + "px";
    //             } else {
    //                 spans[i].style.top = top + "px";
    //             }
    //         }
    //     });

    //     $(".hero-thumb img").removeClass("zoomed-in");
    //     $(".hero-thumb img").removeClass("zoomed-out");
    // });


    $(".gtr-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".hero-thumb img").removeClass("zoomed-in");
        $(".hero-thumb img").addClass("zoomed-out");
    });

    $(".gtr-slider").on("afterChange", function (event, slick, currentSlide) {
        $(".hero-thumb").eq(currentSlide).find("img").removeClass("zoomed-out");
        $(".hero-thumb").eq(currentSlide).find("img").addClass("zoomed-in");
    });

    // text animation
    $(".gtr-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".hero-article").removeClass("text-zoom-in");
        $(".hero-article").addClass("text-zoom-out");
    });

    $(".gtr-slider").on("afterChange", function (event, slick, currentSlide) {
        $(".slide-content").eq(currentSlide).find(".hero-article").removeClass("text-zoom-out");
        $(".slide-content").eq(currentSlide).find(".hero-article").addClass("text-zoom-in");
    });



    // blobs
    // const scene = document.getElementById('scene');
    // const parallaxInstance = new Parallax(scene, {
    //     relativeInput: true
    // });




    // const shapes = document.querySelectorAll('.shape');

    // function randomDirection() {
    //     const directions = ['top', 'bottom', 'left', 'right'];
    //     return directions[Math.floor(Math.random() * directions.length)];
    // }

    // function randomPositionAndOpacity(shape) {
    //     const direction = randomDirection();
    //     let top, left;

    //     if (direction === 'top') {
    //         top = Math.random() * (1000 - 150) + 'px';
    //         left = Math.random() * 600 + 'px';
    //     } else if (direction === 'bottom') {
    //         top = Math.random() * 1000 + 'px';
    //         left = Math.random() * 600 + 'px';
    //     } else if (direction === 'left') {
    //         top = Math.random() * 1000 + 'px';
    //         left = Math.random() * (600 - 150) + 'px';
    //     } else if (direction === 'right') {
    //         top = Math.random() * 1000 + 'px';
    //         left = Math.random() * 600 + 'px';
    //     }

    //     shape.style.transition = 'opacity 0.5s ease';
    //     shape.style.opacity = '0';

    //     setTimeout(() => {
    //         shape.style.top = top;
    //         shape.style.left = left;
    //         shape.style.opacity = '0.5';
    //     }, 500); // 500ms matches the transition duration

    //     setTimeout(() => {
    //         shape.style.transition = 'top 0.5s ease, left 0.5s ease, opacity 0.5s ease';
    //     }, 600); // Reset transition after changing position and opacity
    // }

    // function animateShapes() {
    //     shapes.forEach((shape, index) => {
    //         setTimeout(() => {
    //             randomPositionAndOpacity(shape);
    //         }, index * 6000); // Change position and opacity every 6 seconds, staggered by index
    //     });
    // }

    // animateShapes(); // Start initial animation

    // setInterval(animateShapes, shapes.length * 6000); // Repeat the animation cycle for all shapes



    $(".ota-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerPadding: '60px',
        margin: 20, // Add margin between slides
        infinite: true, // Infinite looping of slides
        speed: 2500, // Adjust slide transition speed (in milliseconds)
        easing: 'ease-in-out', // Apply easing for smoother transitions
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev ota-slider-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next ota-slider-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Comment blockquote slider active
    $(".gtr-comment-blockquote").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerPadding: '60px',
        margin: 20,
        infinite: true,
        speed: 2500,
        easing: 'ease-in-out',
        arrows: false,
        dots: true
    });



    // gtr-testimonial-slider
    $(".gtr-testimonial-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 2500,
        easing: 'ease-in-out',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev gtr-testimonial-slider-left"><i class="fa-solid fa-arrow-left-long"></i></button>',
        nextArrow: '<button type="button" class="slick-next gtr-testimonial-slider-right"><i class="fa-solid fa-arrow-right-long"></i></button>',
    });

    // gtr-Team-slider
    $(".gtr-team-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 2500,
        easing: 'ease-in-out',
        arrows: false,

    });

    // JavaScript to toggle the modal
    const modalOverlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-modal');
    const openModalButton = document.getElementById('open-modal');

    const openModal = () => {
        modalOverlay.style.pointerEvents = 'auto';
        modalOverlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    };

    const closeModal = () => {
        modalOverlay.style.pointerEvents = 'none';
        modalOverlay.classList.add('hidden');
        modal.classList.add('hidden');
    };

    closeModalButton.addEventListener('click', closeModal);
    openModalButton.addEventListener('click', openModal);

    // Close the modal when clicking on the overlay
    modalOverlay.addEventListener('click', () => {
        closeModal();
    });






} catch (error) {
    console.log(error.message);
}



