const parallaxContainers = document.querySelectorAll('.ImgBack');
document.addEventListener("mousemove", parallax);

function parallax(e) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    parallaxContainers.forEach(container => {
        container.style.backgroundPosition = `${x}% ${y}%`;
    });
}