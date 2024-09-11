---
layout: base
title: Student Home 
description: Home Page
hide: true
---

**Wyatt's CSP Blog**


<img id="Mario" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c10ad9cd-c924-41de-932a-c6907774dd62/d8kog6c-2d9c3937-e6b3-42ce-91ad-e7f7417ab4e3.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MxMGFkOWNkLWM5MjQtNDFkZS05MzJhLWM2OTA3Nzc0ZGQ2MlwvZDhrb2c2Yy0yZDljMzkzNy1lNmIzLTQyY2UtOTFhZC1lN2Y3NDE3YWI0ZTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MDRrGSrtH4Cjpd4Jq0Ig54135KbYqx9u28RVPdMn2-s" 
alt="mario" style="width:130px; position:absolute; bottom:0; left:0;">

<script>
  function moveMario() {
    var mario = document.getElementById("Mario");
    var position = 0;
    var speed = 3; 
    var interval = setInterval(function() {
      if (position >= window.innerWidth) {
        position = -130;
      } else {
        position += speed;
        mario.style.left = position + "px";
      }
    }, 10);
  }
  
  moveMario();
</script>
