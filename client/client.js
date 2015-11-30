Template.mettract.helpers({
  uploadWatcher: function () {
    return {
      finished: function (index, fileInfo, context) {
        console.log(fileInfo);
        Session.set('loading', true);
        Meteor.call('invokeTesseract', fileInfo.path, function (error, result) {
          if (error) {
            console.log(error);
            fs.unlinkSync(fileInfo.url);
          } else {
            if (typeof result === 'object') {
              Session.set("result", 'Error');
            } else {
              Session.set("result", result);
              Session.set('loading', false);
            }
          }
        });
      }
    }
  },
  'getResult': function () {
    return Session.get("result");
  },
  'loading': function () {
    return Session.get('loading');
  }
});

Template.mettract.events({
  'click #reset': function () {
    Session.set('result', '');
    Session.set('loading', false);
  }
});
