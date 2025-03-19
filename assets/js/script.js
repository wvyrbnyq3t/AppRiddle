// カルーセルの子要素の個数
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    const children = carousel.querySelectorAll(".carousel-item").length;
    if (children !== 1) {
      carousel.setAttribute("style", `--i: ${children}`);
    }
  });
});

// 新しいウィンドウで開く