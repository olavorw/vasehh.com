document.addEventListener("DOMContentLoaded", function () {
    const dvdLogo = document.getElementById("dvd-logo");
    let x = 0; // Start position away from the edges
    let y = 0; // Start position away from the edges
    let xSpeed = 2;
    let ySpeed = 2;

    function updatePosition() {
        const logoRect = dvdLogo.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        x += xSpeed;
        y += ySpeed;

        // Check boundaries and reverse direction if needed
        if (x + logoRect.width >= bodyRect.width || x <= 0) {
            xSpeed *= -1;
            x += xSpeed; // Move back into bounds
        }

        if (y + logoRect.height >= bodyRect.height || y <= 0) {
            ySpeed *= -1;
            y += ySpeed; // Move back into bounds
        }

        dvdLogo.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(updatePosition);
    }

    updatePosition();
});
