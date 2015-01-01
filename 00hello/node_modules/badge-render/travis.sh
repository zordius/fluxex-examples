#!/bin/sh

BIN=bin/badge-render

echo Test simple generation...
$BIN examples/one_browser_pass.json 1.html
if [ ! -f "1.html" ]; then
  echo Did not generate 1.html, failed.
  exit 1
fi

if [ ! -f "1.html.png" ]; then
  echo Did not generate 1.html.png, failed.
  exit 1
fi

echo Test png file name...
$BIN examples/one_browser_pass.json 1.html --png 2.png
if [ ! -f "2.png" ]; then
  echo Did not generate 2.png, failed.
  exit 1
fi

echo Test extra css...
$BIN examples/one_browser_pass.json 2.html --css examples/extra.css
if [ ! -f "2.html" ]; then
  echo Did not generate 2.html, failed.
  exit 1
fi

echo Test file not found...
$BIN examples/one_browser_pass.json 3.html --css not_found
if [ -f "3.html" ]; then
  echo Should not work, failed.
  exit 1
fi

echo 'Done!'
