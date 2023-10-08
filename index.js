// Setting Default Slider View
let slideIndex = 1;
showSlides(slideIndex);

// updating the slide Index
function plusSlides(n) { showSlides(slideIndex += n); }

// Making the dots Functional
function currentSlide(n)
{
  showSlides(slideIndex = n);
  
  // Not using these Functions so it's better to not use them
  /*
  const buttons = document.querySelectorAll(".button");
  buttons[0].style.backgroundColor = "#484b6a";

  const resetBg = () => {
    buttons.forEach((button) => {
      button.style.backgroundColor = "transparent";
    });
  };

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      resetBg();
      slider.style.transform = `translateX(-${i * 800}px)`;
      slideNumber = i + 1;
      button.style.backgroundColor = "#484b6a";
    });
  });

  const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
  };
  const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
  };
  const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  };
  const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
  };

  const changeColor = () => {
    resetBg()
    buttons[slideNumber - 1].style.backgroundColor = "#484b6a";

  }
  */
}

// Showing Slides
function showSlides(n)
{
  let [slides, dots] = [document.getElementsByClassName("mySlides"), document.getElementsByClassName("dot")];

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}