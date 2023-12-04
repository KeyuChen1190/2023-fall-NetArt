function createPixelBackground(event) {
    const x = event.clientX;
    const y = event.clientY;

    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.left = `${x}px`;
    pixel.style.top = `${y}px`;

    const shapes = ['net1', 'net2', 'net3'];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    pixel.classList.add(randomShape);

    document.body.appendChild(pixel);

    requestAnimationFrame(() => {
        setTimeout(() => {
            pixel.remove();
        }, 600);
    });
}

document.getElementById('app').addEventListener('mousemove', createPixelBackground);

