const modal = document.getElementById("modal");
const overlay = modal.querySelector(".overlay");
const btnCloseModal = modal.querySelectorAll(".btn-closeModal");

// 開く
const btnOpenModal = document.querySelectorAll(".btn-openModal[data-modal]");
btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;
    const field = target.getAttribute("data-modal");
    const content = modal.querySelector(`.modalContent[data-modal="${field}"]`);

    if (content) {
      modal.classList.add("is-active");
      content.classList.add("is-show");
    }
  })
})

// 閉じる
btnCloseModal.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parent = e.target.closest(".modalContent");
    parent.classList.remove("is-show");

    const contents = modal.querySelectorAll(".modalContent.is-show").length;
    if (contents === 0) {
      modal.classList.remove("is-active");
    }
  });
});
overlay.addEventListener("click", () => {
  modal.querySelectorAll(".modalContent").forEach((content) => {
    content.classList.remove("is-show");
    modal.classList.remove("is-active");
  });
});

console.log("load modal.js");