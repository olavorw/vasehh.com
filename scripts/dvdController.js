document.addEventListener("DOMContentLoaded", function () {
    const vasehhDVD = document.getElementById("vasehhDVD");
    const sandyDVD = document.getElementById("sandyDVD");
    const jronesDVD = document.getElementById("jronesDVD");
    const jakeDVD = document.getElementById("jakeDVD");
    const cornerHitSound = document.getElementById("corner-hit-sound");

    // Set initial positions at a random place on the screen for all DVDs
    let x = Math.random() * (window.innerWidth - vasehhDVD.offsetWidth);
    let y = Math.random() * (window.innerHeight - vasehhDVD.offsetHeight);
    let sandyX = Math.random() * (window.innerWidth - sandyDVD.offsetWidth);
    let sandyY = Math.random() * (window.innerHeight - sandyDVD.offsetHeight);
    let jronesX = Math.random() * (window.innerWidth - jronesDVD.offsetWidth);
    let jronesY = Math.random() * (window.innerHeight - jronesDVD.offsetHeight);
    let jakeX = Math.random() * (window.innerWidth - jakeDVD.offsetWidth);
    let jakeY = Math.random() * (window.innerHeight - jakeDVD.offsetHeight);

    // Set speed values
    let xSpeed = 1;
    let ySpeed = 1;
    let sandyXSpeed = 5;
    let sandyYSpeed = 5;
    let jronesXSpeed = 0;
    let jronesYSpeed = 6.9;
    let jakeXSpeed = 15;
    let jakeYSpeed = 15;

    function updatePosition() {
        const vasehhLogoRect = vasehhDVD.getBoundingClientRect();
        const sandyLogoRect = sandyDVD.getBoundingClientRect();
        const jronesLogoRect = jronesDVD.getBoundingClientRect();
        const jakeLogoRect = jakeDVD.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        // Update positions
        x += xSpeed;
        y += ySpeed;
        sandyX += sandyXSpeed;
        sandyY += sandyYSpeed;
        jronesX += jronesXSpeed;
        jronesY += jronesYSpeed;
        jakeX += jakeXSpeed;
        jakeY += jakeYSpeed;

        // Check boundaries and reverse direction if needed for all DVDs
        let hitCorner = false;

        // vasehhDVD
        if (x + vasehhLogoRect.width >= bodyRect.width) {
            xSpeed = -Math.abs(xSpeed);
            x = bodyRect.width - vasehhLogoRect.width;
        } else if (x <= 0) {
            xSpeed = Math.abs(xSpeed);
            x = 0;
        }

        if (y + vasehhLogoRect.height >= bodyRect.height) {
            ySpeed = -Math.abs(ySpeed);
            y = bodyRect.height - vasehhLogoRect.height;
        } else if (y <= 0) {
            ySpeed = Math.abs(ySpeed);
            y = 0;
        }

        if ((x <= 0 || x + vasehhLogoRect.width >= bodyRect.width) && (y <= 0 || y + vasehhLogoRect.height >= bodyRect.height)) {
            hitCorner = true;
        }

        // sandyDVD
        if (sandyX + sandyLogoRect.width >= bodyRect.width) {
            sandyXSpeed = -Math.abs(sandyXSpeed);
            sandyX = bodyRect.width - sandyLogoRect.width;
        } else if (sandyX <= 0) {
            sandyXSpeed = Math.abs(sandyXSpeed);
            sandyX = 0;
        }

        if (sandyY + sandyLogoRect.height >= bodyRect.height) {
            sandyYSpeed = -Math.abs(sandyYSpeed);
            sandyY = bodyRect.height - sandyLogoRect.height;
        } else if (sandyY <= 0) {
            sandyYSpeed = Math.abs(sandyYSpeed);
            sandyY = 0;
        }

        // jronesDVD
        if (jronesX + jronesLogoRect.width >= bodyRect.width) {
            jronesXSpeed = -Math.abs(jronesXSpeed);
            jronesX = bodyRect.width - jronesLogoRect.width;
        } else if (jronesX <= 0) {
            jronesXSpeed = Math.abs(jronesXSpeed);
            jronesX = 0;
        }

        if (jronesY + jronesLogoRect.height >= bodyRect.height) {
            jronesYSpeed = -Math.abs(jronesYSpeed);
            jronesY = bodyRect.height - jronesLogoRect.height;
        } else if (jronesY <= 0) {
            jronesYSpeed = Math.abs(jronesYSpeed);
            jronesY = 0;
        }

        // jakeDVD
        if (jakeX + jakeLogoRect.width >= bodyRect.width) {
            jakeXSpeed = -Math.abs(jakeXSpeed);
            jakeX = bodyRect.width - jakeLogoRect.width;
        } else if (jakeX <= 0) {
            jakeXSpeed = Math.abs(jakeXSpeed);
            jakeX = 0;
        }

        if (jakeY + jakeLogoRect.height >= bodyRect.height) {
            jakeYSpeed = -Math.abs(jakeYSpeed);
            jakeY = bodyRect.height - jakeLogoRect.height;
        } else if (jakeY <= 0) {
            jakeYSpeed = Math.abs(jakeYSpeed);
            jakeY = 0;
        }

        if (hitCorner) {
            cornerHitSound.currentTime = 0;
            cornerHitSound.play();
        }

        // Update positions in the DOM
        vasehhDVD.style.left = `${x}px`;
        vasehhDVD.style.top = `${y}px`;
        sandyDVD.style.left = `${sandyX}px`;
        sandyDVD.style.top = `${sandyY}px`;
        jronesDVD.style.left = `${jronesX}px`;
        jronesDVD.style.top = `${jronesY}px`;
        jakeDVD.style.left = `${jakeX}px`;
        jakeDVD.style.top = `${jakeY}px`;

        requestAnimationFrame(updatePosition);
    }

    updatePosition();
});
