try {
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
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
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
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
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
        arrows: false
    });





} catch (error) {
    console.log(error.message);
}



