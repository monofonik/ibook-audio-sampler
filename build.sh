#!/bin/bash

widget_name=WebAudioSampler
build_dir=build

bundle_dir=${build_dir}/${widget_name}.wdgt
audio_data_file=${bundle_dir}/js/audio-data.js

# create build / bundle folders
rm -rf $build_dir
mkdir -p $bundle_dir

# copy html / ibook meta content
cp -rp src/html/* $bundle_dir
cp -rp src/ibook/* $bundle_dir

# encode audio files to base64 / js and add to bundle
echo "window.AUDIO_DATA = [" > $audio_data_file
for file in src/audio/*.wav
do
    echo "  \"`base64 \"$file\"`\", " >> $audio_data_file
done
echo "];" >> $audio_data_file
