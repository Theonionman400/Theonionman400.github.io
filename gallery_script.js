const imageGallery =[
    "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/670003/pexels-photo-670003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImgIndex];
}

nextButton.addEventListener("click", function(){
    currentImgIndex = (currentImgIndex + 1) % imageGallery.length 
    updateImage()
});

prevButton.addEventListener("click", function(){
    currentImgIndex = (currentImgIndex - 1 + imageGallery.length) % imageGallery.length 
    updateImage()
});

updateImage();