---
layout: page
title: Fun Button!
permalink: /button/
---

## This is my fun button!


<div>
    <p >I am a <span id="affirmation">sigma</span></p>
    <button onClick="changeAffirmation()">Click Me!</button>
</div>

<script>
    const affirmationSpan = document.getElementById("affirmation")
    const adjectives = [
        "cool guy",
        "Im-MORT-al",
        "pro",
        "freak, I'm a weeiirddoooo",
    ]
    function getRandomInt (min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
    function changeAffirmation () {
        const randomNumber = getRandomInt(0, adjectives.length-1)
        const adjective = adjectives[randomNumber]
        affirmationSpan.innerHTML = adjective;
    }
</script>