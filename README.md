# iBook Audio Sampler

A HTML5 widget for iBooks that provides an interactive audio sample pad. The implementation uses
[https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer](Audio Buffers) to ensure low
latency and a responsive user experience.

Audio files and converted by the build script to base64 data, ensuring iOS / iBooks quirks with 
loading audio content via XMLHttpRequest are avoided.

## Run the demo in browser

- Run `build.sh`
- Open `build/html/index.html` in your browser


## Run the demo in iBooks

- Run `build.sh`
- Drag / drop `build/SamplePad.wdgt` into your iBook (using iBook Author)
- Preview on your device


## Developing 

Experimenting with different audio files and CSS layouts can be done directly in the browser, i.e.
without building the iBook widget itself.

### Audio files

Modifying the audio files that are loaded onto the generated pads is as simple as editing the
contents of the `src/audio` folder. One sample pad will be created per audio file.

### Style

Changing the style / layout of the widget can be achieved by editing `src/html/css/styles.css`. 
The container element has the class name `sampler`. All pads will have the class name `pad` and 
e.g. `pad-0`, `pad-1`, `pad-2`...


## License

MIT








