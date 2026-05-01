const video = document.querySelector("video");

video.addEventListener("play", () => {
  console.log("▶ Video playing");
});

video.addEventListener("pause", () => {
  console.log("⏸ Video paused");
});