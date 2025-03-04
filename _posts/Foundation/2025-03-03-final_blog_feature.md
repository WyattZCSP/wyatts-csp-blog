---
layout: post  
title: Final Blog Feature Write Up
description: Explanation of my feature
type: issues  
comments: true  
---

UserCars Feature (Simple Overview)
The UserCars feature was created so that users could share descriptions of their cars to collaborate and share their love for cars with each other. The main intended features for Posts are…

Garage page to view all cars 
Car Info page to create cars and submit them to your personal garage
Technical Overview of UserCars
From a technical view, the cars should be stored in a database table titled “userCars” and each car should have the corresponding information:

Unique Id,
Make,
Model,
Car Creator’s UID,
Year,
Color,
Vin,
Trim

In the database, I created a schema to store each car entry similarly to the structure I mentioned above. An API is used to query the database and send requested data to the client.

Running the backend on the AWS EC2 Server
A big learning point for me was the use of an API on an actual running server with muliple occupied routes. So I decided to write about the following:

The EC2 Server
Routing (Reverse Proxy/nginx)
DNS
Docker + Docker-Compose