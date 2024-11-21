---
layout: post
title: Sprint 3 Blog
description: Sprint 3 Learning Blog Tri 2
type: issues
comments: True
---

# **Wyatt's Sprint 3 Learning Blog**

```js
const pfp = document.getElementById("pfp");
const nameDisplay = document.getElementById("name");
```

Const will define a variable, and make pfp and nameDisplay = their respective elements. getElementById will grab the element from the page, by it's ID. 

```js
async function fetchUserProfilePicture() {
  const URL = pythonURI + "/api/id/pfp"; // Endpoint to fetch user profile data

  try {
    // 1. Fetch the data from the endpoint
    const response = await fetch(URL, fetchOptions);
    // 2. Make sure the response is ok
    if (!response.ok) {
      throw new Error(`Failed to fetch user profile: ${response.status}`);
    }

    // 3. Return the data
    return response.json();
    // 4. If we had an error anywhere in the try (stuff above), we will log an error.
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    return null;
    // Handle error display or fallback mechanism
  }
}
```

Here, the asynchronous function will be running in the background, doing multiple things at once so that the program doesn't shut down completely while fetching one piece of data. This way, it can fetch multiple at a time.

const URL definies the URL that we are going to fetch from, we are addding the api, id, and pfp to the URI which in this case, is "github.com".

Now, we are wrapping our code in try, so that if anything goes wrong it will be caught by our safety net "catch". What catch does is that it catches any errors inside of try so that instead of destroying all of our code, it displays the error "Error fetching user profile:" and it returns null (nothing).

```js
async function fetchUserProfileData() {
  const URL = pythonURI + "/api/user";
  try {
    const response = await fetch(URL, fetchOptions);
    if (!response.ok) {
      throw new Error(`Failed to fetch Name: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Name:", error.message);
    return null;
  }
}
const profilePictureData = await fetchUserProfilePicture();
const profileData = await fetchUserProfileData();
if (profileData.name) {
  nameDisplay.innerHTML = profileData.name;
}
if (profilePictureData.pfp) {
  pfp.src = `data:image/jpeg;base64,${profilePictureData.pfp}`;
  pfp.hidden = false;
}
```

Here, the asynchronous function allows the program to fetch the data from the uploaded profile, such as the username.