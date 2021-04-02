 const menuBtn = document.querySelector(".menu-icon span");
      const searchBtn = document.querySelector(".search-icon");
      const cancelBtn = document.querySelector(".cancel-icon");
      const items = document.querySelector(".nav-items");
      const form = document.querySelector("form");
      menuBtn.onclick = ()=>{
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      }
      cancelBtn.onclick = ()=>{
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active"); 
      }
      searchBtn.onclick = ()=>{
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      }
///////////////////////////this is nav bar//////////////////////////////////////
function getin() {
	window.location.href="index.html";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
////////////////////////////////////////////////////////////
function openfile() {
	let x=document.getElementById('search').value;
	if (x === "chudidar" || x === "lahanga" || x === "sarees") {
		window.open("/Users/ELCOT/Documents/affiliate%20website/women.html");
	}
	if (x === "t shirt" || x === "jeans" || x === "shirt") {
		window.open("/Users/ELCOT/Documents/affiliate%20website/men.html");
	}
	if (x === "kid clothes" || x === "toys" || x === "kids toys") {
		window.open("/Users/ELCOT/Documents/affiliate%20website/kids.html");
	}
	if (x === "iphone" || x === "vivo" || x === "galaxy") {
		window.open("/Users/ELCOT/Documents/affiliate%20website/mobile.html");
	}
	if (x === "tawa" || x === "grinder" || x === "frige") {
		window.open("/Users/ELCOT/Documents/affiliate%20website/kitchen.html");
	}
	if (x === "face wash" || x === "body losion" || x === "aleo vera cream") {
		window.open("/Users/ELCOT/Documents/affiliate%20website/beauty.html");
	}
	if (x === "wall hanging" || x === "hexagon shelf" || x === "wall sticker") {
		window.open("/Users/ELCOT/Documents/affiliate%20website/decorate.html");
	}
	if (x === "bed cover" || x === "beds" || x === "sofa") {
		window.open("/Users/ELCOT/Documents/affiliate%20website/house.html");
	}
}