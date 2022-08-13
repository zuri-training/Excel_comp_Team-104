// Function to go to the top of the page. Button at the end (Footer) arrow inside a circle
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const onboardingContainer = document.querySelector(".onboarding-container");
const onboardingOverlay = document.querySelector(".onboarding-overlay");
const skipBtn = document.querySelector(".onboarding-container .skip-btn");
const steps = document.querySelectorAll(".onboarding-container .bottom-div");
const stepsContainer = document.querySelector(".onboarding-container .bottom-divs");
const nextBtn = document.querySelector(".next-btn");

let stepPosition = 0;
let currentStep = 0;


const init = () => {
  stepsContainer.style.transition = "unset";
  onboardingContainer.classList.add("active");
  onboardingOverlay.classList.add("active");
  nextBtn.classList.add("active");
  currentStep = 0;
  stepPosition = 0;
  stepsContainer.style.transform = `translateX(-${stepPosition}px)`;


};

if (onboardingContainer) {
  init();
}

skipBtn.addEventListener("click", () => {
  onboardingContainer.classList.remove("active");
  onboardingOverlay.classList.remove("active");
    nextBtn.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
  stepsContainer.style.transition = "all 400ms ease";
  currentStep++;

  if (currentStep >= steps.length) {
    stepsContainer.style.transition = "unset";
    onboardingContainer.classList.remove("active");
    onboardingOverlay.classList.remove("active");
    nextBtn.classList.remove("active");
    currentStep = 0;
  }

  stepPosition += steps[0].offsetWidth;

  stepsContainer.style.transform = `translateX(-${stepPosition * 1.61}px)`;

});

