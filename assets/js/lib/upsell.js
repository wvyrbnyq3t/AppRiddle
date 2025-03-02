console.log("load upsell.js");
const upsell = document.getElementById("upsell");
const btnCloseUpsell = document.querySelectorAll(".btn-closeUpsell");

// 閉じる
btnCloseUpsell.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;
    const disabled = target.getAttribute("aria-disabled");

    if (disabled !== "true") {
      target.closest(".upsellContent").classList.remove("is-show");
    }
  });
});
