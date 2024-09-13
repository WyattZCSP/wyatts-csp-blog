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

    const ColorBox = document.getElementsByClassName("page-header")[0]

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

        ColorBox.classList = ""
        ColorBox.classList.add("page-header")
        ColorBox.classList.add(color)

        // clear classList expect for page-header, add the color
    }
</script>

<style>
    #color-box {
        padding: 1rem;
    }
    .Red {
        background-color: red;
        background-image: linear-gradient(120deg, #155799, red);
    }
    .Orange {
        background-color: orange;
        background-image: linear-gradient(120deg, #155799, orange)
    }
    .Yellow {
        background-color: yellow;
        background-image: linear-gradient(120deg, #155799, yellow)
    }
    .Green {
        background-color: green;
        background-image: linear-gradient(120deg, #155799, green)
    }
    .Blue {
        background-color: blue;
        background-image: linear-gradient(120deg, #155799, blue)
    }
    .Purple {
        background-color: purple;
        background-image: linear-gradient(120deg, #155799, purple)
    }
</style>