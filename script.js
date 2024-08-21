const chars = document.querySelectorAll('.char');

chars.forEach((char, index) => {
    char.style.animationDelay = `${index * 0.1}s`;
});