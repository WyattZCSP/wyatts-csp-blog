---
layout: post  
title: Study Blog
description: Study Blog everything i've learned
type: issues  
comments: true  
---

# Pilot city api/model
 
## Roads API (**/api/roads**)
 
 - **Create Road** (**POST**): Admins only
 
 - **Read Roads** (**GET**): Public
 
 - **Update Road** (**PUT**): Admins or owners
 
 - **Delete Road** (**DELETE**): Admins or owners
 
## Reviews API (**/api/review**)
 
 - **Create Review** (**POST**): Authenticated users (logged in)
 
 - **Read Reviews** (**GET**): Public
 
 - **Update Review** (**PUT**): Review owners or Admins
 
 - **Delete Review** (**DELETE**): Review owners or Admins
 
 ---
 
## Models
 
 ## **Road**
 
 | Field        | Type       | Description                          |
 |--------------|------------|--------------------------------------|
 | **id**         | Integer    | Primary key                          |
 | **road_name**  | String     | Name of the road                     |
 | **place_id**   | Integer    | ID from Google Maps (to verify)      |
 
 ### **Review**
 
 | Field         | Type       | Description                           |
 |---------------|------------|---------------------------------------|
 | **id**          | Integer    | Primary key                           |
 | **road_id**     | ForeignKey | Linked to **Road**                      |
 | **uid**         | ForeignKey | Linked to **User**                      |
 | **description** | String     | Review content                        |
 | **rating**      | Integer    | Numeric rating                        |
 | **date_posted** | DateTime   | Auto-generated on creation            |
 
 ---
 
 ## Authorization & Roles
 
 - **@token_required** used on all write/update/delete routes.
 
 - Admins have full access to all routes.
 
 - Regular users can modify their own reviews.
 
 # Deployment Tools
 
 - **AWS EC2**: A virtual server used to host the application.
 - **Docker**: Containerizes the Flask app to ensure consistent behavior across environments.
 - **Nginx**: Acts as a reverse proxy to route incoming HTTP requests to the Flask app.

 ---
 layout: post
 title: Personal Learning Blog
 description: Collection of topics
 type: issues
 comments: True
 ---
 
 | Topic | Description |
 | --- | --- |
 | [Using Jekyll](./jekyll.html) | Examples of how Jekyll helps the development process |
 | [Backend Basics](./backend.html) | Examples and explanation of key backend componenets |
 | [MCQ](./mcq.html) | Examples and question analysis for the MCQ |

---
 layout: post
 title: Personal Learning Blog - Jekyll
 description: Collection of topics
 type: issues
 comments: True
 ---
 
  ## Using Jekyll for the header for our Pilot City Project
 
 ![sdafsda]({{site.baseurl}}/images/jekyll_hamburger_menu.png)
 
  ## config.yml
 
 ```yml
 title: Data Mango
 description: "CSP Tri 3 Project"
 owner_name: Trevor Vick
 github_username: Tvick22
 github_repo: "DataMango"
 baseurl: "/DataMango"
 colors:
   primary: "#FF9F1C" # Mango Orange
   primary-hover: "#e88d15"
   secondary: "#015A65" # Deep Teal
   secondary-hover: "#01404a"
   background: "#FAFAF8" # Off-White
   text: "#333333" # Charcoal Gray
   red: "#F25C54" # Coral Red
   accent:
     green: "#007F5F" # Forest Green
     green-hover: "#006b50"
     red: "#F25C54" # Coral Red
     red-hover: "#e04d48"
   neutral: "#F4E8C1" # Soft Beige
 header_pages:
   - browse-documentation.md
   - contact.md
 ```
 
 > - Header pages contains the file paths that will be displayed on our hamburger menu.
 > - We use the colors array to organize our site's "theme".
 
 ## Example page that is in the Header
 
 ```markdown
 ---
 layout: docs
 title: Documentation
 search_exclude: true
 menu: nav/mainHeader.html
 menu_color: secondary
 menu_text_color: white
 ---
 ```
 
 > This page has properties (menu_color and menu_text_color) that contribute to how it is styled on the hamburger menu.
 
  # MCQ Questions Overview
 
  ## 1. **Conceptual Questions**
 These test your understanding of key computing ideas without code.
 
 **Examples:**
 - What is an example of abstraction?
 - How does compression affect file size?
 
 **How to Tackle:**
 - Review vocab from each "Big Idea."
 - Think in real-world examples (e.g., maps, music files, passwords).
 
 ---
 
  ## 2. **Pseudocode Logic**
 You'll be given code-like logic and asked to predict outcomes or identify errors.
 
 **Examples:**
 - What is printed by this loop?
 - Which Boolean expression returns true?
 
 **How to Tackle:**
 - Practice reading College Board pseudocode.
 - Write out the steps or create tables to trace variable changes.
 - Focus on common structures: **IF**, **REPEAT**, **APPEND**, **REMOVE**.
 
 ---
 
  ## 3. **Data & Visual Interpretation**
 These involve reading graphs, tables, or program outputs to draw conclusions.
 
 **Examples:**
 - What conclusion can you draw from this bar chart?
 - Which filter would produce this data result?
 
 **How to Tackle:**
 - Understand how data is collected, filtered, and visualized.
 - Know basic spreadsheet/filter logic.
 
 ---
 
  ## 4. **Cybersecurity & Internet**
 These questions check your knowledge of data transmission, encryption, and risks.
 
 **Examples:**
 - What protocol ensures secure data transfer?
 - Which situation best explains a phishing attack?
 
 **How to Tackle:**
 - Review protocols: HTTP vs HTTPS, TCP/IP, DNS.
 - Know definitions and consequences of cyber threats.
 
 ---
 
  ## 5. **Impact of Computing**
 Focuses on ethics, bias, data privacy, and social effects of computing.
 
 **Examples:**
 - What is a possible negative impact of facial recognition?
 - How does bias enter through training data?
 
 **How to Tackle:**
 - Think critically — there's not always one “right” answer.
 - Ask yourself: Who benefits? Who might be harmed?

![ham menu](https://raw.githubusercontent.com/Tvick22/CSPBlog1/0902c8f919e7c0131e6b766d6141c27784cf7ce0/images/jekyll_hamburger_menu.png)

![ppr backend]({{site.baseurl}/images/pprbackend.png})

[Go to Final Blog: 5 Things](./2025-03-03-final_blog_5things.md){: .btn .btn-primary}