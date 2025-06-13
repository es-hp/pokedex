document.addEventListener("DOMContentLoaded", () => {
  function resizeBotPadding() {
    const footerHeight = document.querySelector("footer").offsetHeight;
    const invisibleDiv = document.getElementById("invisible-bottom-padding");

    invisibleDiv.style.height = `${footerHeight}px`;
  }

  resizeBotPadding();
  window.addEventListener("resize", resizeBotPadding);
  window.addEventListener("load", resizeBotPadding);
});
