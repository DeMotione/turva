let mediaBreakpointSize = 960; /* Change this size and test outcome */

let scriptTag = '';

let html5QrCode = null;

async function requestCameraPermissions() {
  try {
    await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById("reader-container").style.display = "block";
    document.getElementById("registration-form-container").style.display = "none";
    startScanner();
    document.getElementById("close-scanner").style.display = "block";
  } catch (e) {
    console.error("Camera permission denied", e);
  }
}

function startScanner() {
  html5QrCode = new Html5Qrcode("reader");
  html5QrCode
    .start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: 650,
      },
      (qrCodeMessage) => {
        console.log(qrCodeMessage);
        document.getElementById("device-address").value = qrCodeMessage;
        closeScanner();
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    )
    .then(() => {
      console.log("QR code scanner started.");
    });
}

function scanDeviceAddress() {
  html5QrCode = new Html5Qrcode("reader");
  html5QrCode
    .start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: 250,
      },
      (qrCodeMessage) => {
        console.log(qrCodeMessage);
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    )
    .then(() => {
      console.log("QR code scanner started.");
    });
}

function closeScanner() {
  html5QrCode
    .stop()
    .then(() => {
      document.getElementById("registration-form-container").style.display = "block";
      document.getElementById("reader-container").style.display = "none";
      document.getElementById("close-scanner").style.display = "none";
    })
    .catch((err) => {
      console.error(err);
    });
}

function passwords()
{
    document.getElementById("passwords").value= "";
    document.getElementById('passwords').type = 'password';

}


function confirms()
{
    document.getElementById("confirm").value= "";
     document.getElementById('confirm').type = 'password';

    }