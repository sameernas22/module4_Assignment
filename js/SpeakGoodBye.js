(function (window) {
  var byeSpeaker = new Object();
  var speakWork = "GoodBye";

  byeSpeaker.speak = function (name) {
    console.log(speakWork + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
