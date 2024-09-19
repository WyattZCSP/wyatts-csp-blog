---
layout: post
title: Cookie Clicker
description: Cookie Clicker game
type: issues
comments: True
---

<div id="game-container" class="cookie-clicker-container">
    <div class="top-container">
        <h2 id="money">0</h2>
    </div>
    <div class="top-container-stats">
        <div>level: <span id="level">1</span></div>
        <div style="display: flex;">
            <button style="margin-right: 10px;" id="upgrade-btn">Upgrade</button>
            <div>Cost: <span id="cost">20</span></div>
        </div>  
    </div>
    <div class="cookie-clicker-btn-container">
        <button class="cookie-clicker-btn" id="cookie-clicker-btn"></button>
    </div>

</div>

<script src="{{site.baseurl}}/assets/js/cookie_clicker.js"></script>