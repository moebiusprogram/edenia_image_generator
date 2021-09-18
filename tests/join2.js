const mergeImages = require('merge-images2');
const { Canvas, Image } = require('canvas');






mergeImages(['block2.png', 'block1.png'], {
  Canvas: Canvas,
  Image: Image
})
  .then(b64 => {
    var base64Data = b64.replace(/^data:image\/png;base64,/, "");

    require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
      console.log(err);
    });    
  });