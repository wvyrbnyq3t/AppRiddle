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

// 新しいタブで開く　確認画面
const btnLinkOpenInNew = document.querySelectorAll("a[target='_blank']");
const modalOpenInNew = document.getElementById("openInNew");
btnLinkOpenInNew.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target;
    const link = target.getAttribute("href");

    document.body.classList.add("is-active")
    modal.classList.add("is-active");
    modalOpenInNew.classList.add("is-show");
  })
})

// 新しいタブで開く　実行