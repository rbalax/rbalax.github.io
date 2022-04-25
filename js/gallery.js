function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo img");
  let galleryInfo = document.querySelector("#gallery-info");
  let title       = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}

// function activateGallery() {
//   let thumbnails = document.querySelector("#gallery-thumbs").
//                             querySelectorAll("img");
//   let mainImage = document.querySelector("#gallery-photo img");

//   thumbnails.forEach(function(thumbnail) {
//     thumbnail.addEventListener("click", function() {
//       // Set clicked image as main image.
//       let newImageSrc = thumbnail.dataset.largeVersion;
//       mainImage.setAttribute("src", newImageSrc);
//     });
//   });
// }
