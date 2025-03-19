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

// 高さ調整
const adjustHeight = () => {
  // カテゴリー
  const category = document.querySelector(".category");
  const categoryMenuHeght = category.querySelector(".category-menu").offsetHeight;
  category.setAttribute("style", `--height: ${categoryMenuHeght}px`);
}

window.addEventListener("DOMContentLoaded", () => {
  adjustHeight();
})