function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo-popup");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
$(document ).ready(function(){
	$('.menu-scroll').click(function(e){
		var elem = $(this).attr('href');
		e.preventDefault();
		$('html, body').animate({
			scrollTop:$(elem).offset().top-50
		},1000);
	});
	$( window ).on('scroll',function(){
		var pscroll = $(this).scrollTop();
		if(pscroll > 90){
			$('#jf-nav').addClass('fixed');
		}else{
			$('#jf-nav').removeClass('fixed');
		}
	});


});
