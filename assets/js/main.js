(function() {

  var context;
  var bufferLoader;
  var bufferList;

  $(document).ready(init);

  // http://www.html5rocks.com/en/tutorials/webaudio/intro/
  function init() {

    var $pads = $(".sampler .pad");
    var paths = [];
    $pads.each(function(idx, el) {
      var $el = $(el);
      paths.push($el.attr("data-src"));
      $el.on("click touchstart", function(ev) {
        ev.preventDefault();
        playSample(idx);
      });
    });

    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    context = new AudioContext();
    bufferLoader = new BufferLoader(context, paths, function(bl) {
      bufferList = bl;
    });
    bufferLoader.load();
  }

  function playSample(num) {
    // Create two sources and play them both together.
    var source = context.createBufferSource();
    source.buffer = bufferList[num];
    source.connect(context.destination);
    source.start(0);
  }

})();

