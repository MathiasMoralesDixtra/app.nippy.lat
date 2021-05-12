document.addEventListener("DOMContentLoaded", async function (event) {
    const redirectToTheStore = () => {
            let url;
    
            if (/Android/.test(navigator.userAgent)) {
                url = 'https://play.google.com/store/apps/details?id=com.dixtra.zenks.nippydelivery';
            } else {
                url = 'https://apps.apple.com/ar/app/nippy-for-delivery/id1509543827';
            }
    
            location.replace(url);
    }
    redirectToTheStore()
})