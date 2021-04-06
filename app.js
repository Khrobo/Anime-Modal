// Variables
let imageClick = document.querySelectorAll(".image");
let imageSelect = document.getElementsByClassName("image");
let imageSwitch = document.querySelector(".img-modal");
let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");
let xButton = document.querySelector(".x-out");
let containVisible = document.querySelector(".contain");
let animeList = document.querySelectorAll(".anime");
let index = 0;


// Functions
function imageModal(e) {
    containVisible.style.visibility = "visible";
    console.log("Unclickable")
    for (let i=0; i<animeList.length; i++) {
        animeList[i].style.pointerEvents = "none"; // Switches it to unclickable
    }
    if (containVisible.style.visibility === "hidden") {
        containVisible.style.visibility = "visible";
    }
    console.log(e.target); // Finds the target of the clicks
    console.log(imageSelect[0].src); // Gets the image of the classes
    imageSwitch.src = `${e.target.src}`
    
    
}
function left() {
    index--;
    if (index == -1) {
        index = 18;
    } else {
        console.log(imageSelect[index].src, index)
        imageSwitch.src = `${imageSelect[index].src}`;
    }
}
function right() {
    index++;
    if (index >= imageSelect.length) {
        index = -1;
    } else {
        console.log(imageSelect[index].src, index);
        imageSwitch.src = `${imageSelect[index].src}`;
    }
}
 

// Events
imageClick.forEach(item => {
    item.addEventListener("click", imageModal)
});
xButton.addEventListener("click", () => {
    console.log("Disappear");
    containVisible.style.visibility = "hidden";
    console.log("Clickable")
    for (let i=0; i<animeList.length; i++) {
        animeList[i].style.pointerEvents = "auto";
    }
});
leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);


