const button = document.querySelector("#menu-toggle")
const nav = document.querySelector(".nav")
const modeicon = document.querySelector("#mode")
const bookicon = document.querySelector("#book")


button.addEventListener("click", function () {
    nav.classList.toggle('active')


    if (nav.classList.contains('active')) {
        modeicon.style.display = "flex"
        bookicon.style.display = "flex"
    } else {
        modeicon.style.display = "none"
        bookicon.style.display = "none"
    }
})

modeicon.addEventListener("click", function () {
    const body = document.querySelector("body")
    const head = document.querySelector(".header")
    const profile = document.querySelector("#pro")
    const search = document.querySelector("#serch svg")
    const mode = document.querySelector("#mode svg")
    const bell = document.querySelector("#bell svg")
    const book = document.querySelector("#book svg")
    const btn = document.querySelector("#menu-toggle")
    const hero = document.querySelector(".q-box")
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"
        head.style.backgroundColor = "white"
        profile.style.backgroundColor = "black"
        hero.style.background = "linear-gradient(to bottom, lightblue, white)"
        body.style.color = "black"
        btn.style.color = "black"
        search.style.fill = "black"
        bell.style.fill = "black"
        mode.style.fill = "black"
        book.style.fill = "black"
        profile.style.color = "white"
    } else {
        body.style.backgroundColor = "black"
        body.style.color = "white"
        btn.style.color = "white"
        search.style.fill = "white"
        bell.style.fill = "white"
        mode.style.fill = "white"
        book.style.fill = "white"
        profile.style.color = "black"
        head.style.backgroundColor = "black"
        hero.style.background = "linear-gradient(to bottom,  rgb(72, 72, 72),  black)"

        profile.style.backgroundColor = "white"
    }
})  

const placeholderWords = [
    "Explore new courses...",
    "Master JS Pythin C++...",
    "Learn Web Development...",
    "DSA Programming..."
];

const inputField = document.getElementById("bar");
let wordIndex = 0;
let charIndex = 0;   
let currentText = "";

function typePlaceholder() {
    if (charIndex < placeholderWords[wordIndex].length) {
        currentText += placeholderWords[wordIndex][charIndex];
        inputField.setAttribute("placeholder", currentText);
        charIndex++;
        setTimeout(typePlaceholder, 100);
    } else {
        setTimeout(deletePlaceholder, 1000);
    }
}

function deletePlaceholder() {
    if (charIndex > 0) {
        currentText = currentText.slice(0, -1);
        inputField.setAttribute("placeholder", currentText);
        charIndex--;
        setTimeout(deletePlaceholder, 50); 
       } else {
               wordIndex = (wordIndex + 1) % placeholderWords.length;
        setTimeout(typePlaceholder, 500); 
    }
}

 
typePlaceholder();





