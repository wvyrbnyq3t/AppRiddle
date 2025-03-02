console.log("load script.js");

// カルーセルの子要素の個数
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    // 子要素(.carousel-item)の個数
    const children = carousel.querySelectorAll(".carousel-item").length;
    if (children !== 1) {
      carousel.setAttribute("style", `--i: ${children}`);
    }
  });
});

// 外部サイトにアクセスするかを確認
const links = document.querySelectorAll(
  "a[target='_blank']:not(.link-confirm)"
);
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const url = link.getAttribute("href");

    // modalを開く
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(
      ".modalContent[data-modal='openInNew']"
    );
    const mondalContentLink = modalContent.querySelector("a");

    modal.classList.add("is-active");
    modalContent.classList.add("is-show");
    mondalContentLink.setAttribute("href", url);
  });
});

// 外部サイトにアクセス
const linkConfirm = document.querySelectorAll(".link-confirm");

linkConfirm.forEach((link) => {
  link.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(
      ".modalContent[data-modal='openInNew']"
    );

    modal.classList.remove("is-active");
    modalContent.classList.remove("is-show");
  });
});
