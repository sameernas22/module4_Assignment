(function (window) {
  var helloSpeaker = new Object();
  var speakWork = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWork + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
