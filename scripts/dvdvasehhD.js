document.addEventListener("DOMContentLoaded", function () {
    const dvdLogo = document.getElementById("dvd-logo");
    const cornerHitSound = document.getElementById("corner-hit-sound");

    // Set initial position at a random place on the screen
    let x = Math.random() * (window.innerWidth - dvdLogo.offsetWidth);
    let y = Math.random() * (window.innerHeight - dvdLogo.offsetHeight);

    // Set speed values
    let xSpeed = 5;
    let ySpeed = 5;

    function updatePosition() {
        const logoRect = dvdLogo.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        x += xSpeed;
        y += ySpeed;

        // Check boundaries and reverse direction if needed
        let hitCorner = false;
        if (x + logoRect.width >= bodyRect.width) {
            xSpeed = -Math.abs(xSpeed); // Ensure it moves left
            x = bodyRect.width - logoRect.width;
        } else if (x <= 0) {
            xSpeed = Math.abs(xSpeed); // Ensure it moves right
            x = 0;
        }

        if (y + logoRect.height >= bodyRect.height) {
            ySpeed = -Math.abs(ySpeed); // Ensure it moves up
            y = bodyRect.height - logoRect.height;
        } else if (y <= 0) {
            ySpeed = Math.abs(ySpeed); // Ensure it moves down
            y = 0;
        }

        if ((x <= 0 || x + logoRect.width >= bodyRect.width) && (y <= 0 || y + logoRect.height >= bodyRect.height)) {
            hitCorner = true;
        }

        if (hitCorner) {
            cornerHitSound.currentTime = 0; // Rewind to the start
            cornerHitSound.play();
        }

        dvdLogo.style.left = `${x}px`;
        dvdLogo.style.top = `${y}px`;
        requestAnimationFrame(updatePosition);
    }

    updatePosition();
});
