console.log("load userAgent.js");

// 端末の判別
document.addEventListener("DOMContentLoaded", () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const isMobile = /iphone|android/.test(userAgent);

  if (!isMobile) {
    window.location.href = "unsupported.html";
  }
  const pathName = window.location.pathname;
  if (pathName != "/register.html") {
    // ユーザー情報の確認
    const userInfo = localStorage.getItem("user");

    if (userInfo === null) {
      window.location.href = "register.html";
    }
    if (userInfo.userName == "" && userInfo.UUID == "") {
      window.location.href = "register.html";
    }
  }
});
