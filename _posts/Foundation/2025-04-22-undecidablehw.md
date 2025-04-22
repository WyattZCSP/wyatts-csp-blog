---
layout: post  
title: Undecidable Problems/ Graphs and Heuristics 
description: Popcorn and Homework Hacks from Graphs/heuristics and Undecidable Problems Lesson
type: issues  
comments: true  
---

# Undecidable Problems

## Popcorn Hack 1 

An algorithm can be used to solve an undecidable problem. (True/False)

Answer: False

## Popcorn Hack 2

If a programmer encounters an undecidable problem, they can just use an alogirhtm that works most of the time. (True/False)

Answer: True

## Popcorn Hack 3

Which of the following options is not an example of an undecidable problem?

A. Halting Problem

B. The Collatz Conjecture

C. Rice’s Theorem

D. Bubble sorting

Answer: D

## Homework Hack 

Investigate and describe how modern operating systems and browsers handle infinite loops or excessively long-running scripts. What mechanisms are in place to detect and mitigate such issues? Provide real-world examples of these mechanisms in action, such as specific error messages, timeouts, or automated recovery processes. 

Answer: Modern operating systems and browsers use several mechanisms to detect and handle infinite loops or long-running scripts to maintain system performance and user experience. Browsers like Chrome and Firefox use script execution timeouts. If a script runs too long, they display a message such as "Page Unresponsive" or "A script on this page may be busy, or it may have stopped responding." These warnings give users the option to stop the script or close the page. Operating systems may also step in if an application consumes too much CPU or memory by offering to force-quit the program. Modern browsers also run each tab in a separate process so one problematic tab does not crash the entire browser.

# Graphs and Heuristics

## Popcorn Hack 1

True or False: In a directed graph, an edge from node A to node B implies that there is always a corresponding edge from node B to node A.

Answer: False

## Popcorn Hack 2

True or False: Heuristics always provide faster solutions than exact algorithms, but they may sacrifice accuracy for speed.

Answer: True

## Popcorn Hack 3

True or False: While heuristic algorithms like the Nearest Neighbor algorithm can significantly reduce the computational time for TSP, they can never guarantee an optimal solution, and the gap between the heuristic solution and the optimal solution can grow exponentially as the number of cities increases.

Answer: True

## Homework Hack 

Explore the concept of “Social Network Analysis” and explain how graphs are used in analyzing social media platforms. Specifically, focus on:

How are users (nodes) and relationships (edges) represented in social networks?

Provide one example of a real-world social media platform where graph theory plays a crucial role.

Answer: Social Network Analysis uses graph theory to study relationships and interactions among individuals or groups in a network. In social networks, users are represented as nodes and their relationships, such as friendships, followers, or messages, are represented as edges connecting those nodes. These graphs can be directed or undirected depending on the type of relationship. For example, on Twitter, users are nodes and following relationships are shown as directed edges, meaning if one user follows another, the connection goes in only one direction. Graph theory helps platforms like Twitter identify communities, find influential users, and understand how information spreads.