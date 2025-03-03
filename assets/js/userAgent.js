console.log("load userAgent.js");

// 端末の判別
document.addEventListener("DOMContentLoaded", () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  let isMobile = /iphone|android/.test(userAgent);

  if (!isMobile) {
    localStorage.setItem("isMobile", false);
    window.location.href = "unsupported.html";
  } else {
    isMobile = localStorage.getItem("isMobile");

    if (isMobile) {
      window.location.href = "unsupported.html";
    }
  }
});
