window.addEventListener("load", function() {

    let qrInfo = document.querySelector(".qr-wrapper").dataset.qr;

    console.log(qrInfo);

    /* $("#qr1").ClassyQR({
        type: 'url',
        url: qrInfo,
        size: 264,
    }); */

    $("#qr2").ClassyQR({
        create: true,
        type: 'url',
        url: qrInfo,
        size: 340
    });

    
});