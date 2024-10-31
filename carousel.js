// let currentSlide = 0;

// function showSlide(index) {
//     const images = document.querySelectorAll(".carousel-image");
//     images.forEach((img, i) => {
//         img.classList.remove("active"); // Hide all images
//         if (i === index) {
//             img.classList.add("active"); // Show the active image
//         }
//     });
// }

// function nextSlide() {
//     const images = document.querySelectorAll(".carousel-image");
//     currentSlide = (currentSlide + 1) % images.length; // Move to the next slide, loop back to the first if needed
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     const images = document.querySelectorAll(".carousel-image");
//     currentSlide = (currentSlide - 1 + images.length) % images.length; // Move to the previous slide, loop to the last if needed
//     showSlide(currentSlide);
// }

// // Show the first slide initially
// document.addEventListener("DOMContentLoaded", () => {
//     showSlide(currentSlide);
// });
