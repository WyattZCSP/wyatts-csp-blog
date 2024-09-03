---
layout: base
title: Student Home 
description: Home Page
hide: true
---

Wyatt's CSP Blog

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name+"viewpoint" content="width=device-width, initial-scale+1.0">

<title>Race Car Animation</title>

<link rel="stylesheet" href="styles.css">

</head>

<body>

<div class="container">

<div class="race-car"></div>

</div>

<script src="script.js"></script>

</body>

</html>

body {

    margin: 0;

    overflow: hidden;

    background-color: #87CEEB; /* Light sky blue background */
}

.container {

    position: relative;

    width: 100vw;

    height: 100vh;

    overflow: hidden;
}

.race-car {

    position: absolute;

    width: 100px;

    height: 50px;

    background-color: #FF0000; /* Red race car */

    border-radius: 10px;

    transform: rotate(15deg);
}

document.addEvenListener('DOMContentLoaded', () => {

    const raceCar = document.querySelector('.race-car');

    const containerWidth = window.innerWidth;

    const raceCarWidth = raceCar.offsetWidth;

    let startTime;

    function animate(time) {

        if (!startTime) startTime = time;

        const elapsed = time - startTime;

        const speed = 0.2; // Pixels per millisecond

        let position = (elapsed * speed) % (containerWidth + raceCarWidth);

        raceCar.style.left = position + 'px';

        requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);
});