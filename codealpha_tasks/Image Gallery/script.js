// GET ELEMENTS
const galleryItems =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox-img");

const closeBtn =
document.querySelector(".close-btn");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

const filterButtons =
document.querySelectorAll(".filter-buttons button");

const galleryItemBox =
document.querySelectorAll(".gallery-item");

// CURRENT IMAGE INDEX
let currentIndex = 0;

// IMAGE ARRAY
const images =
Array.from(galleryItems);

// OPEN LIGHTBOX
galleryItems.forEach((img,index)=>{

  img.addEventListener("click",()=>{

    currentIndex = index;

    showImage();

    lightbox.style.display = "flex";

  });

});

// SHOW IMAGE
function showImage(){

  lightboxImg.src =
  images[currentIndex].src;

}

// CLOSE LIGHTBOX
closeBtn.addEventListener("click",()=>{

  lightbox.style.display = "none";

});

// NEXT IMAGE
nextBtn.addEventListener("click",()=>{

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  showImage();

});

// PREVIOUS IMAGE
prevBtn.addEventListener("click",()=>{

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  showImage();

});

// FILTER FUNCTION
filterButtons.forEach(button=>{

  button.addEventListener("click",()=>{

    // REMOVE ACTIVE
    filterButtons.forEach(btn=>{
      btn.classList.remove("active");
    });

    // ADD ACTIVE
    button.classList.add("active");

    // FILTER VALUE
    const filter =
    button.getAttribute("data-filter");

    // LOOP ITEMS
    galleryItemBox.forEach(item=>{

      if(
        filter === "all" ||
        item.classList.contains(filter)
      ){

        item.style.display = "block";

      }
      else{

        item.style.display = "none";

      }

    });

  });

});