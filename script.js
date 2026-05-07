// script.js - AUTO YEAR + SECURITY
// Security
['contextmenu', 'selectstart', 'dragstart'].forEach(e => {
    document.addEventListener(e, ev => ev.preventDefault());
});

document.addEventListener('keydown', e => {
    if (e.key === 'F12' || 
        (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's')) ||
        (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-9K1X97CD5B');

// Auto year
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Smooth link hover
    document.querySelectorAll('.link').forEach(link => {
        link.addEventListener('click', () => {
            link.style.transform = 'scale(0.98)';
            setTimeout(() => link.style.transform = '', 150);
        });
    });
});