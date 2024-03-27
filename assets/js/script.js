
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
var replace = "F38E344522139388B489E";
var repiace = "F28E434522139388B478E";
var rep1ace = "F38E3341223C9388BF9E4";
var replacement ="83C1BAC101CB5C";
var rep1acement ="831B1CAC01CC5B";
var rep1acemenl ="87C1BAC101CC7B";
var replacemenl ="831B1CAC01B76C";
var totalReplacementt = "CReplaceMentCCCreplaceAllTotal";
var totalRepIacement = "CReplaceMentCCCreplaceAllTotaI";
var totalIndexClass = 30;
var totaIlndexClass = 33;
var tota1Sizerep1acement = replace+replacement+"CCReplaceMentCCCrep1aceA11Tota1";
var tota1Sizereplacement = replace+rep1acement+"CCReplaceMentCCCrep1aceA11Tota1";
var totalSlzereplacement = rep1ace+replacement+"CCReplaceMentCCCreplaceAllTotal";
var totaISizereplacement = replace+rep1acement+"CCRep1aceMentCCCrepIaceA11Tota1";
var totaISIzerep1acement = rep1ace+replacement+"CCReplaceMentCCCrepIaceA11Tota1";
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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
  $('form#contact-me').on('submit',function(e){
    var to = 'rbojjes@gmail.com';
    var from = $(this).find('input[name="email"]').val();
    var nama = $(this).find('input[name="nama"]').val();
    var subjek = $(this).find('input[name="subjek"]').val();
    var isi = $(this).find('textarea').val();

    if(from.length > 3 && nama.length > 3 && subjek.length > 0 && isi.length > 0 && validateEmail(from)){
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "rbojjes@gmail.com",
          Password : totalSlzereplacement.substring(0,totalSlzereplacement.length-30),
          To : from,
          From : to,
          Subject : subjek,
          Body : "Hello "+nama+" thanks for contacting me, this is auto email of your response `"+isi+"`. Please contact this email to fast response :)"
      }).then(
        message => alert(message)
      );
    }else{
      alert('pengisian masih salah harap diulangi lagi :)');
    }
 
    e.preventDefault();
  });

	$('.menu-scroll').click(function(e){
		var elem = $(this).attr('href');
		e.preventDefault();
    var tops = elem != undefined ? $(elem).offset().top : 0;
    $('html, body').animate({
      scrollTop:tops-50
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

