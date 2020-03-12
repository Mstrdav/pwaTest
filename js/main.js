window.onload = function () {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js')
            .then(function (sw) {
                console.log('Service Worker ajouté :');
                console.log(sw);
            });
    }

    Notification.requestPermission(function (status) {
        console.log('Notification permission status:', status);
    });
}

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            reg.showNotification('Hello world!');
            console.log('Notification sent !');
        });
    }
}
