const colorInputs = document.querySelectorAll(".colors");
const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".direction");
const textarea = document.getElementById("result");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

function getRandomColor() {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
}

function generateGradient(isRandom) {
  if (isRandom) {
    colorInputs[0].value = getRandomColor();
    colorInputs[1].value = getRandomColor();
  }
  const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value},${colorInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
}

function copyCode() {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Code Copied";
}

colorInputs.forEach((inp) => {
  inp.addEventListener("input", function () {
    generateGradient(false);
  });
});

//Every time when you change among list of options
selectMenu.addEventListener("change", function () {
  generateGradient(false);
});
refreshBtn.addEventListener("click", function () {
  generateGradient(true);
});
copyBtn.addEventListener("click", function () {
  copyCode();
});
