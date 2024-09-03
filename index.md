---
layout: base
title: Student Home 
description: Home Page
hide: true
---

**Wyatt's CSP Blog**

# Animated Race Car

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            position: relative;
            width: 100%;
            height: 100px;
            overflow: hidden;
            border: 2px solid black;
        }
        .car {
            position: absolute;
            width: 50px;
            height: 20px;
            background-color: red;
            transform: rotate(0deg);
        }
        @keyframes move {
            from {
                left: -60px;
            }
            to {
                left: 100%;
            }
        }
        .animate {
            animation: move 5s linear infinite;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="car animate"></div>
    </div>
</body>
</html>