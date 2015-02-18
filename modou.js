"use strict"

/**
* AUTO GENERATED BY MODOU.JS
* NO COPY PASTA PLEASE
*/
function ModouJS(demande) {

  if(!demande.contains('Bonjour') || !demande.contains('Merci')) {
    console.log('Reste poli petit con!');
    return;
  }

  document.addEventListener('DOMContentLoaded', function(demande) {

    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = "index.css";
    document.head.appendChild(style);

    var audio = document.createElement("audio");
    audio.src = "modou.mp3";

    var btnWrapper = document.createElement("div");
    btnWrapper.className = "wrapper";

    var btn = document.createElement("button");
    var btnText = document.createTextNode("Je me sens triste");
    btn.appendChild(btnText);
    btn.className = "mainButton";
    btn.addEventListener("click", function() {
      audio.play();
    });
    btnWrapper.appendChild(btn);

    document.body.appendChild(btnWrapper);
  });
}