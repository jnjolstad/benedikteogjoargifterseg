var image = document.getElementById("image");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var pageName = location.pathname.split("/").pop().replace('.html', '.jpg');
var images = ["images/" + pageName", "images/benedikteogjoar.jpg"];

var currentImageIndex = 0;

prev-btn.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  image.src = images[currentImageIndex];
});
nex-btn.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  image.src = images[currentImageIndex];
});
