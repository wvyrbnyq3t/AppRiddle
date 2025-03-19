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
const btnLinkConfirmOpenInNew = document.getElementById("btnLinkConfirmOpenInNew");
const modalOpenInNew = document.getElementById("openInNew");

btnLinkOpenInNew.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target;
    const link = target.getAttribute("href");

    document.body.classList.add("is-active")
    modal.classList.add("is-active");
    modalOpenInNew.classList.add("is-show");
    btnLinkConfirmOpenInNew.setAttribute("href", link);
  })
})

// 新しいタブで開く　実行
btnLinkConfirmOpenInNew.addEventListener("click", (e) => {
  e.preventDefault();
  const link = btnLinkConfirmOpenInNew.getAttribute("href");
  window.open(link, "_blank");

  modalOpenInNew.classList.remove("is-show");

  getCountModalWindows();
})