# Mettract

Optical Character Recognition made super simple. In Meteor. 

This repo is a demonstration of several techniques used in building Meteor apps, but it can be made better!

Let's figure out how :)

## Quick start

Clone this repo, jump into the project's root directory and `meteor`. 

## What is this thing I don't even

Mettract takes an image containing text and passes it to Tesseract, open souce OCR software. Using Meteor and Futures, we handle the upload, parsing and subsequent rendering of the text parsed.  

## Dependencies

### Tesseract

The software powering the OCR is called Tesseract and is available here: https://github.com/tesseract-ocr. Follow the instructions for installing Tesseract on your machine here: https://github.com/tesseract-ocr/tesseract/wiki

We'll be using a node package to access the functionality provided by Tesseract through our meteor app, which you can grab here: https://github.com/desmondmorris/node-tesseract

You can install this package using `npm install node-tesseract`