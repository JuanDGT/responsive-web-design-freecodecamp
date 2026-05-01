const mediaElements = document.querySelectorAll("video, audio");

mediaElements.forEach(media => {
  media.addEventListener("play", () => {
    console.log("▶ Media playing");
  });

  media.addEventListener("pause", () => {
    console.log("⏸ Media paused");
  });
});