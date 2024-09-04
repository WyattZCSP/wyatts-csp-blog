---
layout: page
title: Plinko
permalink: /plinko/
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plinko Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Plinko Game</h1>
        <div class="bet-container">
            <input type="number" id="betAmount" placeholder="Enter bet amount" min="1" />
            <button onclick="startPlinko()">Play</button>
        </div>
        <div class="board" id="plinkoBoard"></div>
        <div class="result">
            <p id="resultMessage"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
