const myInput = document.getElementById("username");
const myHeader = document.querySelector(".valentine-header");
myInput.addEventListener("input", (event) => {
  myHeader.textContent = `חג אהבה שמח ל`;
  myHeader.textContent += event.target.value;
});
