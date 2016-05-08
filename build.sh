#!/bin/bash

widget_name=SamplePad
build_dir=build

bundle_html_dir=${build_dir}/html
bundle_widget_dir=${build_dir}/${widget_name}.wdgt

audio_data_file=${bundle_html_dir}/js/audio-data.js

# create build / bundle folders
rm -rf $build_dir
mkdir -p $bundle_widget_dir $bundle_html_dir

# copy html content
cp -rp src/html/* $bundle_html_dir

# encode audio files to base64 / js and add to bundle
echo "window.AUDIO_DATA = [" > $audio_data_file
for file in src/audio/*.wav
do
    echo "  \"`base64 \"$file\"`\", " >> $audio_data_file
done
echo "];" >> $audio_data_file

# copy ibook meta content
cp -rp src/ibook/* $bundle_widget_dir
cp -rp build/html/* $bundle_widget_dir
