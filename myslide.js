
var i = 0;
var images = [];
var time = 1000;


images[0] = 'linkedin.jpg';
images[1] = 'github.jpg';


function changeImg(){
  document.mySlides.src = images[i];

  if(i < images.length - i){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}
























//var slideIndex = 0;
//showSlides();

//function showSlides() {
  //var i;
  //var slides = document.getElementsByClassName("mySlides");
 // for (i = 0; i < slides.length; i++) {
   // slides[i].style.display = "none";
 // }
  //slideIndex++;
  //if (slideIndex > slides.length) {slideIndex = 1}
  //slides[slideIndex-1].style.display = "block";
  //setTimeout(showSlides, 2000); // Change image every 2 seconds
//}
