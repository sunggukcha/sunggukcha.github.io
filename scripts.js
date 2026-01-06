/* ============================================
   Sungguk Cha Personal Website
   Shared Scripts
   ============================================ */

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-7VG8HLWH7D');

// Iframe Navigation (for index.html)
function move(url) {
    const iframe = document.getElementById('myframe');
    if (iframe) {
        iframe.src = url;
        const height = window.innerHeight;
        iframe.style.height = height + 'px';
    }
}

// Resize handler for iframe
window.addEventListener('resize', function() {
    const iframe = document.getElementById('myframe');
    if (iframe) {
        iframe.style.height = window.innerHeight + 'px';
    }
});

// Initialize iframe on load (for index.html)
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('myframe');
    if (iframe) {
        move('pages/home.html');
    }
});
