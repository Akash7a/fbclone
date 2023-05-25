let inputField = document.getElementById("inputField");
let popContaier = document.querySelector(".pop-parent-container");
let closeBtn = document.getElementById("close-btn");
let profile = document.getElementById("profile");
let profileContainer = document.querySelector(".profile-container");

// pop up
inputField.addEventListener("click", () => {
    popContaier.style.display = "block";
});
closeBtn.addEventListener("click", () => {
    popContaier.style.display = "none";
});

// profile account
profile.addEventListener("click", () => {
    profileContainer.classList.toggle("show-profile");
});

//close the images
const closeImage = () => {
    let img = document.querySelector(".main-content");
    img.parentNode.removeChild(img);
}
// image carousel
const slides = document.querySelectorAll(".img-container");

let counter = 0;
let maxSlies = slides.length;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${slide * 100}%`;
    }
)
slides.forEach(
    (value, index) => {
        const closeProfileBtn = document.createElement("i");
        closeProfileBtn.setAttribute("class", "bi bi-x-lg close-profile");
        value.append(closeProfileBtn);

        closeProfileBtn.addEventListener("click", () => {
            let image = document.querySelector(".img-container");
            image.parentNode.removeChild(image);
        });
    }
)

const goPrev = () => {
    counter--;
    if (counter <= 0) {
        counter = maxSlies - 1;
    }
    slideImage();
}

const goNext = () => {
    counter++;
    if (counter > maxSlies) {
        counter = 0;
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 70}%)`;
        }
    )
};

// like option
let likeBtn = document.getElementById("like-btn");
let feedbackOptions = document.querySelector(".feedback-options");
let allFeedBackOptions = document.querySelectorAll(".like-options");
let likeDisplay = document.querySelector(".likeDisplay");
let likeCounter = 0;

likeBtn.addEventListener("mouseover", () => {
    feedbackOptions.style.bottom = "15px";
});
feedbackOptions.addEventListener("mouseleave", () => {
    feedbackOptions.style.bottom = "-60px"
})

allFeedBackOptions.forEach((value, index) => {
    value.addEventListener("click", () => {
        likeCounter++;
        likeBtn.innerHTML = value.innerHTML;
        likeDisplay.innerText = likeCounter;
    });
});
