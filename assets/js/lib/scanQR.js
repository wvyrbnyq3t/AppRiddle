console.log("load scanQR.js");

const video = document.createElement("video");
const canvasElement = document.getElementById("scanQRCanvas");
const canvas = canvasElement.getContext("2d", {
  desynchronized: true,
  willReadFrequently: true,
});

let isReadQR = false;
let code = null;

// QRコードの読み込み
function scanQR() {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        audio: false,
        facingMode: "environment",
        frameRate: { ideal: 30, max: 60 },
      },
    })
    .then((stream) => {
      video.srcObject = stream;
      video.setAttribute("playsinline", true);
      video.play();
      requestAnimationFrame(tick);
    })
    .catch((err) => {
      const upsell = document.getElementById("upsell");
      const upsellContent = upsell.querySelector(
        ".upsellContent[data-upsell='cameraPermission'"
      );
      const slider = document.getElementById("slider");
      const sliderContent = slider.querySelector(
        ".sliderContent[data-slider='scanQR']"
      );

      upsellContent.classList.add("is-show");
      sliderContent.classList.remove("is-show");
      console.log(err);
    });
}

// QRコードの解析
function tick() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    const imageData = canvas.getImageData(
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    // jsQRのメソッド
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });
    if (code && isReadQR) {
      if (code.data !== "") {
        isReadQR = false;
        video.srcObject = null;

        // 接頭語の確認
        const isPrefix = code.data.startsWith("WR");

        if (isPrefix) {
          alert("成功");
        } else {
          alert("失敗");
        }
      }
    }
  }
  requestAnimationFrame(tick);
}

// 起動
const btnBootScanQR = document.querySelectorAll(".btn-bootScanQR");
btnBootScanQR.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;
    const disabled = target.getAttribute("aria-disabled");

    if (disabled !== "true") {
      isReadQR = true;
      scanQR();
    }
  });
});

// 停止
const btnStopScanQR = document.querySelectorAll(".btn-stopScanQR");
btnStopScanQR.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;
    const disabled = target.getAttribute("aria-disabled");

    if (disabled !== "true") {
      isReadQR = false;
      video.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
      video.srcObject = null;
      canvas.clearRect(0, 0, canvasElement.width, canvasElement.height);
    }
  });
});