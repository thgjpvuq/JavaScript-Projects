var slideIndex = 1;
showSlides(slideIndex); // gives showSlides function the value of slideIndex

// Next/previous controls
function plusSlides(n)  {
    showSlides(slideIndex += n); // adds and assigns n to slideIndex
}

// Thumbnail image controls
function currentSlide(n)    {
    showSlides(slideIndex = n) // assigns n to current slide
}

function showSlides(n)  {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} // when on last slide, clicking the next slide button will go to the first slide
    if (n < 1) {slideIndex = slides.length} // when on first slide, clicking the previous slide button will return it to the last slide
    for (i = 0; i < slides.length; i++) { //increases slide by 1 if less than 3
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++)   {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}