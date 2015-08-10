var tesseract = Meteor.npmRequire('node-tesseract');
var Future = Npm.require('fibers/future');
var fs = Npm.require('fs');

Meteor.methods({
  invokeTesseract: function (imgfilename) {

    check(imgfilename, String);

    var base = process.env.PWD

    var image = base + '/.uploads' + imgfilename;
    console.log('Running ' + image);
    var promise = new Future();

    tesseract.process(image, function (err, text) {
      if (err) {
        console.error(err);
        promise.return(err);
      } else {
        console.log(text);

        // Remove the uploaded photo
        console.log('Removing ' + image);
        fs.unlinkSync(image);
        promise.return(text);
      }
    });
    Meteor._sleepForMs(2500);
    return promise.wait();
  }
});