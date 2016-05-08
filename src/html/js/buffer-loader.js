function BufferLoader(context, base64List, callback) {
  this.context = context;
  this.base64List = base64List;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(base64, index) {

  var loader = this;
  var data = base64ToArrayBuffer(base64);

  debug("loadBuffer");

  loader.context.decodeAudioData(
    data,
    function(buffer) {
      if (!buffer) {
        debug('error decoding file data: ' + url);
        return;
      }
      loader.bufferList[index] = buffer;
      if (++loader.loadCount == loader.base64List.length)
        loader.onload(loader.bufferList);
    },
    function(error) {
      debug('decodeAudioData error'+error);
    }
  );
}

BufferLoader.prototype.load = function() {
  debug("BufferLoader.prototype.load");
  for (var i = 0; i < this.base64List.length; ++i)
  this.loadBuffer(this.base64List[i], i);
}

function base64ToArrayBuffer(base64) {
  var binary_string =  window.atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array( len );
  for (var i = 0; i < len; i++)        {
      bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

