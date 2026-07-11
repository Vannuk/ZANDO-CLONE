// Get all small images once and store them in an array
const smallImages = document.querySelectorAll(".sm-img-preview img"); 
const mainImg = document.getElementById("lg-img");
//Change Image
function changeImg(clickedImage) {
    mainImg.src = clickedImage.src;
    smallImages.forEach(img => {
        img.style.border = "2px solid transparent";
    });
    clickedImage.style.border = "2px solid black";
}