---
layout: post
title: Error Notebook
description: Explanation of probelms, errors, and challenges that i faced
type: issues
comments: True
---

**Calculator Errors**
While working on my calculator i faced several challenges. These challenges included my buttons not being divided how i wanted them to be. I fixed this by playing around with the divs until I found a configuration that I liked. Another problem I had was getting the calculator to work, this was happening because I referenced the wrong Id, when i changed the Id to the correct one, it instantly fixed and began working. Some other challenges i faced were styling the calculator, I didn't quite know how I wanted it to look, but after changing the color scheme a few times, I settled on a black background with green text.

**Cookie Clicker Errors**
This was by far the most difficult thing for me during Sprint 1, and i had a plethera of errors. My first error was when I initially added my image for the central cookie. When I added the image, there was a black border which I didn't want the image to have. In order to get rid of this border, I used the command "border-style: none;" in my _sass file _cookie-clicker.scss. Another challenge I faced was adding money to the balance whenever the cookie gets clicked. In order to do this, I added cookieButton to my cookie_clicker.js file, and then added and event listener so that i can have addCookie (20*level) this made it so that on the click of the cookie button, 20 "cookies" or money would be added to the balance, multiplied by whatever level the cookie is upgraded to.