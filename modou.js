"use strict"

/**
* AUTO GENERATED BY MODOU.JS
* NO COPY PASTA PLEASE
*/
function ModouJS() {
  document.addEventListener('DOMContentLoaded', function() {

    //if svp and merci sinon "petit con"

    var root = document.getElementById('monSite');

    var audio = document.createElement("audio");
    audio.src = "modou.mp3";

    var btn = document.createElement("button");
    var text = document.createTextNode("Turn the swag on");
    btn.appendChild(text);
    btn.className = "mainButton";
    btn.addEventListener("click", function() {
      audio.play();
    });

    root.appendChild(btn);
  });
}