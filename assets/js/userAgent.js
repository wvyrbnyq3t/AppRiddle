console.log("load userAgent.js");

// 端末の判別
document.addEventListener("DOMContentLoaded", () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const isMobile = /iphone|android/.test(userAgent);

  if (!isMobile) {
    window.location.href = "unsupported.html";
  }
});
