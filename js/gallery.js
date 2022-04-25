function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");

  let mainImage  = document.querySelector("#gallery-photo img");



  thumbnails.forEach(function(thumbnail) {

    thumbnail.addEventListener("click", function() {

      // Preload large images.
    let newImageSrc  = thumbnail.dataset.largeVersion;
    console.log(newImageSrc);
    console.log(thumbnail.dataset.title);
    let largeVersion = new Image();
    console.log(largeVersion);
    largeVersion.src = newImageSrc;
    console.log(largeVersion.src);

    //Set big display image

      mainImage.setAttribute("src", newImageSrc);

    // Change which image is current

      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

    //update image info

      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
