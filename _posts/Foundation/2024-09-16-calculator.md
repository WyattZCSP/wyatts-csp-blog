---
layout: post
title: Calculator
description: a calculator for slightly simple mathematics
type: issues
comments: True
---



<h2 class="output" id="output">OUTPUT</h2>
<div style="display: grid;">
    <div class="calculator-container">
        <button class="calculator-number">1</button>
        <button class="calculator-number">2</button>
        <button class="calculator-number">3</button>
        <button class="calculator-operation">+</button>
        <button class="calculator-number">4</button>
        <button class="calculator-number">5</button>
        <button class="calculator-number">6</button>
        <button class="calculator-operation">-</button>
        <button class="calculator-number">7</button>
        <button class="calculator-number">8</button>
        <button class="calculator-number">9</button>
        <button class="calculator-operation">*</button>
        <button class="calculator-clear">A/C</button>
        <button class="calculator-number">0</button>
        <button class="calculator-number">.</button>
        <button class="calculator-operation">/</button>
        <button class="calculator-operation">√</button>
        <button class="calculator-operation">^</button>
        <div></div>
        <button class="calculator-equals">=</button>
    </div>
</div>


<script src="{{site.baseurl}}/assets/js/calculator.js"></script>

<style>
    .calculator-container {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;

        button {
            background-color: black;
        color: green !important;
        }
    }
    .output {
        width: 100%;
        border-radius: 5px;
        background-color: black;
        color: green !important;
    }      
</style>