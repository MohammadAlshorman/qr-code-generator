// http://api.qrserver.com/v1/create-qr-code/?data=www.google.com&size=100x100 

let text = document.getElementById('TEXT');
let url = document.getElementById('URL');
let radio1 = document.getElementById('flexRadioDefault1');
let radio2 = document.getElementById('flexRadioDefault2');
let QRImage = document.getElementById('QRImage');
let btnDownload = document.getElementById('btnDownload');

text.focus();

function radioChange() {
    if (radio1.checked == true) {
        url.disabled = true;
        text.disabled = false;
        url.value = "";
        text.focus();
        QRImage.removeAttribute('src', " ")
    } else {
        url.disabled = false;
        text.disabled = true;
        text.value = "";
        url.focus();
        QRImage.removeAttribute('src', " ")
    }
}

function showQR() {
    if (text.value == "" && url.value == "") {
        alert("Enter Required Text")
        text.value = "";
        url.value = "";
    }
    else if (radio1.checked == true) {
        QRImage.setAttribute('src', `http://api.qrserver.com/v1/create-qr-code/?data=${text.value}&size=100x100`);
    } else {
        QRImage.setAttribute('src', `http://api.qrserver.com/v1/create-qr-code/?data=${url.value}&size=100x100`);
    }
}
