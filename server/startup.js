Meteor.startup(function () {
  var tmpDir = process.env.PWD + '/.uploads/tmp';
  var uploadDir = process.env.PWD + '/.uploads/';
  UploadServer.init({
    tmpDir: tmpDir,
    uploadDir: uploadDir,
    checkCreateDirectories: true, //create the directories for you
    getFileName: function (fileInfo, formData) {
      var path = 'upload' + Random.id();
      switch (fileInfo.type) {
        case 'image/jpeg':
          return path + '.jpg';
        case 'image/png':
          return path + '.png';
        default:
          return path + '.TIF';
      }
    }
  });
});