
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/main-sw.js')
    .then(function () {
        console.log('service worker registered.')
    });
}