// Toggle dark mode button
const btn = document.createElement("button");
btn.textContent = "Toggle Dark Mode";
btn.style.position = "fixed";
btn.style.top = "10px";
btn.style.right = "10px";
btn.style.padding = "10px";
btn.style.cursor = "pointer";

document.body.appendChild(btn);

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});