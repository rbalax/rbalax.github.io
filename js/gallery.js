


function activateGallery() {
let thumbnails = document.querySelector("#gallery-thumbs").
                          querySelectorAll("img");
let mainImage = document.querySelector("#gallery-photo img");

thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener("click", function() {
    // code to set clicked image as main image
    let newImageSrc = thumbnail.dataset.largeVersion;
    mainImage.setAttribute("src", newImageSrc);
    mainImage.setAttribute("alt", thumbnail.alt);
  });
});
}
