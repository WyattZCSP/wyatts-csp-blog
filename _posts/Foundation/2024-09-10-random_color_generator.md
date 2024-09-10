---
layout: post
title: Random Color Generator
description: Sass Hack for Sprint 1
type: issues
comments: True
---

<div id="color-box">
    <button onClick="changeColor()">Change Color</button>
</div>

<script>
    function getRandomInt (min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    const ColorBox = document.getElementById("color-box")

    const colors = [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple"
    ]

    function changeColor() {
        const colorIndex = getRandomInt(0, colors.length-1)
        const color = colors[colorIndex]

        ColorBox.classList = color
    }
</script>

<style>
    #color-box {
        padding: 1rem;
    }
    .Red {
        background-color: red;
    }
    .Orange {
        background-color: orange;
    }
    .Yellow {
        background-color: yellow;
    }
    .Green {
        background-color: green;
    }
    .Blue {
        background-color: blue;
    }
    .Purple {
        background-color: purple;
    }
</style>