document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        setTimeout(() => {
            slide.style.transform = 'translateX(0)';
            slide.style.opacity = '1';
        }, index * 500);
    });
});
