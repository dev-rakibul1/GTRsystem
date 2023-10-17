// JavaScript to handle the scrolling effect
window.addEventListener('scroll', () => {
    const scrollingHeading = document.querySelector('.scrolling-heading');

    const scrollY = window.scrollY;

    if (window.scrollY > 0) {
        // Adjust the maximum scroll value (e.g., 500) as needed
        const value = window.innerWidth;

        // Calculate the transform value based on scroll position
        scrollingHeading.style.position = "absolute"
        scrollingHeading.style.left = scrollY * .3 + "px"
        scrollingHeading.style.paddingLeft = 500 + "px"

        // scrollingHeading.style.transform = transformValue;
    }





});



// // JavaScript to handle the scrolling effect
// window.addEventListener('scroll', () => {
//     const scrollingHeading = document.querySelector('.scrolling-heading');

//     const scrollY = window.scrollY;
//     const maxScroll = 500; // Adjust the maximum scroll value as needed

//     if (scrollY > 0 && scrollY <= maxScroll) {
//         // Calculate the transform value based on scroll position
//         const transformValue = `translateX(${scrollY * 0.3}px)`;
//         scrollingHeading.style.transform = transformValue;
//     } else if (scrollY > maxScroll) {
//         // Set a fixed position when the scroll exceeds the maximum
//         scrollingHeading.style.transform = `translateX(${maxScroll * 0.3}px)`;
//     } else {
//         // Handle the initial scroll position (scrollY <= 0)
//         scrollingHeading.style.transform = 'translateX(0)';
//     }
// });
