const hamburger = document.querySelector(".hamburger");
const content = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    content.classList.toggle("active");
})


function download() {
    let iframe = document.getElementById('download');
    iframe.src = "https://www.youtube.com/watch?v=Jk1CEXwwrt8";
}


// let slideIndex = 0;
// showSlides();

// function showSlides() {

// let i;
// let slides = document.querySelector(".mark")
// for (i = 0; i > slides.length; i++){
//     slides[i].style.display = "none";
// }
// slideIndex++;
// if (slideIndex < slides.length) {slideIndex = 1}
// slides[slideIndex-1].style.display = "block";
// setTimeout(showSlides, 2000); 


// }