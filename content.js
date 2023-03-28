const track = document.querySelector(".card-container");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button");

const slideWidth = slides[0].getBoundingClientRect().width;

const CreateAccBtn = document.querySelector(".show-modal");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");
const toggle = document.getElementById("toggle");

// Create account button when click the form will be active and pop up
//CreateAccBtn.addEventListener("click", () => modalBg.classList.add("bg-active"));

// Form close when click the the BUTTON
//modalClose.addEventListener("click", () => modalBg.classList.remove("bg-active"));

// remove the form when click outside
modalBg.addEventListener("click", (e) => {
  e.target.classList.remove("bg-active");
});

// console.log(slideWidth);

//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide"); //when using query . is a must
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;
  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide"); // when using classlist remove the .
  nextSlide.classList.add("current-slide");
});

function progressbar() {
  for (var i = 0; i <= 14; i += 20) {
    document.getElementById("progressbar").value += 1;
  }
}

function multianswer() {
  var score = 0;

  if (document.getElementById("Iden1answer").value == "PROJECT PLAN") {
    score++;
  }
  if (document.getElementById("Iden2answer").value == "ROOT DIRECTORY") {
    score++;
  }
  if (
    document.getElementById("Iden3answer").value == "HYPERTEXT MARKUP LANGUAGE"
  ) {
    score++;
  }
  if (document.getElementById("Iden4answer").value == ".HTML") {
    score++;
  }
  if (document.getElementById("Iden5answer").value == "<!DOCTYPE HTML>") {
    score++;
  }
  if (document.getElementById("Iden6answer").value == "HEADINGS") {
    score++;
  }
  if (document.getElementById("Iden7answer").value == "ANCHORS") {
    score++;
  }
  if (document.getElementById("Iden8answer").value == "<MARK>") {
    score++;
  }
  if (document.getElementById("Iden9answer").value == "VOID ELEMENTS") {
    score++;
  }

  if (document.getElementById("Iden10answer").value == "MARKUP") {
    score++;
  }

  //Multiple choice JS

  if (document.getElementById("check-ansc1").checked) {
    score++;
  }
  if (document.getElementById("check-ansa2").checked) {
    score++;
  }
  if (document.getElementById("check-ansb3").checked) {
    score++;
  }
  if (document.getElementById("check-ansc4").checked) {
    score++;
  }
  if (document.getElementById("check-ansd5").checked) {
    score++;
  }
  if (document.getElementById("check-ansc6").checked) {
    score++;
  }
  if (document.getElementById("check-ansd7").checked) {
    score++;
  }
  if (document.getElementById("check-ansd8").checked) {
    score++;
  }
  if (document.getElementById("check-ansb9").checked) {
    score++;
  }
  if (document.getElementById("check-ansa10").checked) {
    score++;
  }

  if (score == "") {
    document.getElementById("zero").innerHTML = 0 + " / 20";
  } else {
    document.getElementById("zero").innerHTML = score + " / 20";
  }

  //alert("Your Score is: " + score + "/20");
  const element = document.querySelector(".modal-bg");
  element.classList.remove("modal-bg");
}

function restartBrowser() {
  location.reload();
}
