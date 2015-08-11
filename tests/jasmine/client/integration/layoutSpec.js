describe("Header ", function(){
  describe("template", function(){
    it("shows 'Mettract' heading", function(){
      expect($('h1').text()).toEqual('Mettract');
    });
  });
});

describe("Header ", function(){
  describe("template", function(){
    it("shows the Mettract Logo", function(){
      expect($("img").attr("src")).toBe('/img/box.png');
    });
  });
});

describe("Body ", function(){
  describe("template", function(){
    it("does not show a result yet", function(){
      expect($('.result').length > 0).toBe(false);
    });
  });
});

