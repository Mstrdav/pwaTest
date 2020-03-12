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
            var options = {
                body: 'Here is a notification body!',
                icon: 'icons/icons-128x128.png',
                vibrate: [100, 50, 100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                }
            };
            reg.showNotification('Test !!');
            console.log('Notification sent !');
        });
    }
}
