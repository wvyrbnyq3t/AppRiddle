const btnSubmit = document.getElementById("btn-submit");
const input = document.querySelectorAll("input[type='text']");
const checkboxConsented = document.querySelectorAll(
  "input[type='checkbox'].checkboxConsented"
);

// すべて確認
const checkValue = () => {
  let flg = true;

  input.forEach((element) => {
    let value = element.value;

    if (value === "") {
      flg = false;
    }
  });
  checkboxConsented.forEach((element) => {
    let checked = element.checked;

    if (!checked) {
      flg = false;
    }
  });

  if (flg) {
    btnSubmit.setAttribute("aria-disabled", false);
  } else {
    btnSubmit.setAttribute("aria-disabled", true);
  }

  return flg;
};

input.forEach((element) => {
  element.addEventListener("input", (e) => {
    const target = e.target;
    const value = target.value;
    checkValue();

    if (value === "") {
      target.classList.add("is-err");
      target.nextElementSibling.classList.add("is-active");
    } else {
      target.classList.remove("is-err");
      target.nextElementSibling.classList.remove("is-active");
    }
  });
});
checkboxConsented.forEach((element) => {
  element.addEventListener("change", () => {
    checkValue();
  });
});

btnSubmit.addEventListener("click", (e) => {
  const target = e.target;
  const disabled = target.getAttribute("aria-disabled");

  if (disabled !== "true") {
    const flg = checkValue();
    target.setAttribute("aria-disabled", true);

    if (flg) {
      // 処理
      const userInfo = localStorage.getItem("user");

      if (userInfo !== null) {
        const modal = document.getElementById("modal");
        const content = modal.querySelector(".modalContent[data-modal='registerErr']");

        modal.classList.add("is-active");
        content.classList.add("is-show");
      } else {
        const userName = document.getElementById("userName").value;
        const data = JSON.stringify({
          userName: userName,
          UUID: "1234567890",
        });
        localStorage.setItem("user", data);
      }
    }
  }
});
