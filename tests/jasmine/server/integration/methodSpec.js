describe('Async spec', function () {
  it('async passes', function (done) {
    // setTimeout is not running in the Fiber
    setTimeout(Meteor.bindEnvironment(function () {
      expect(true).toBe(true);
      done();
    }), 100);
  });
});