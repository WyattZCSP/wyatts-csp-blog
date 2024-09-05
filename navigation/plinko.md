---
layout: page
title: Plinko
permalink: /plinko/
---

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

// Define the Plinko game function
function plinkoGame() {
    // Initial amount
    let balance = 100;
    console.log(`Starting balance: $${balance.toFixed(2)}`);

    // Define possible multipliers
    const multipliers = [0.2, 2, 1.5, 5, 10, 100];

    function getRandomMultiplier() {
        const index = Math.floor(Math.random() * multipliers.length);
        return multipliers[index];
    }

    function promptBet() {
        const betAmount = parseFloat(prompt(`Enter your bet amount (Your current balance is $${balance.toFixed(2)}): $`));
        
        // Check if the bet is valid
        if (isNaN(betAmount) || betAmount <= 0) {
            alert("Bet amount must be greater than 0.");
            return false;
        }
        if (betAmount > balance) {
            alert("You don't have enough balance.");
            return false;
        }

        return betAmount;
    }

    while (balance > 0) {
        const choice = prompt("Options:\n1. Bet\n2. Quit\nChoose an option:");

        if (choice === '1') {
            const betAmount = promptBet();
            if (betAmount === false) continue;

            // Generate a random multiplier
            const multiplier = getRandomMultiplier();
            alert(`The multiplier is: ${multiplier}x`);

            // Calculate the new balance
            balance -= betAmount;
            balance += betAmount * multiplier;

            alert(`You now have $${balance.toFixed(2)}`);
        } else if (choice === '2') {
            alert(`Thank you for playing! Your final balance is $${balance.toFixed(2)}`);
            break;
        } else {
            alert("Invalid choice. Please select a valid option.");
        }
    }
}

// Run the game
plinkoGame();
