var debugMode = false;

window.debug = function(msg) {
  var node = document.create
  debugMode && $(".pad-1").prepend(msg+"<br/>");
};

(function() {

  var context;
  var bufferLoader;
  var bufferList;

  $(document).ready(init);

  // http://www.html5rocks.com/en/tutorials/webaudio/intro/
  function init() {

    var base64List = [];

    debug("init started");

    $(window.AUDIO_DATA).each(function(idx, audio) {

      var $el = $("<div>");
      $el.addClass("pad");
      $el.addClass("pad-"+idx);

      base64List.push(audio);

      $el.on("click touchstart", function(ev) {
        ev.preventDefault();
        playSample(idx);
      });

      $(".sampler").append($el);

    });

    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    context = new AudioContext();

    debug("created AudioContext");

    bufferLoader = new BufferLoader(context, base64List, function(bl) {
      debug("buffer loaded");
      bufferList = bl;
      if (typeof widget !== "undefined") {
        widget.notifyContentIsReady()
      }
    });
    bufferLoader.load();
  }

  function playSample(num) {
    var source = context.createBufferSource();
    source.buffer = bufferList[num];
    source.connect(context.destination);
    source.start(0);
  }

})();

