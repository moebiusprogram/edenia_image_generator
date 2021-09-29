const express = require('express');
const mergeImages = require('merge-images2');
const { Canvas, Image } = require('canvas');
const router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/nft/generate', function(req, res, next) {
  console.log("query",req.query)

  const hat = 'public/images/art/sombrero' + req.query.hat + '.png'
  const sword = 'public/images/art/espada' + req.query.sword + '.png'
  const shoes = 'public/images/art/zapatos' + req.query.shoes + '.png'
  const body = 'public/images/art/cuerpo' + req.query.body + '.png'
  const eyes = 'public/images/art/ojos' + req.query.eyes + '.png'
  const mouth = 'public/images/art/boca' + req.query.mouth + '.png'

  mergeImages([hat,sword,shoes,body,eyes,mouth], {
    Canvas: Canvas,
    Image: Image
  })
  .then(b64 => {
    var base64Data = b64.replace(/^data:image\/png;base64,/, "");

    const result = 'nft/out.png'

    require("fs").writeFile("public/" + result, base64Data, 'base64', function(err) {
      console.log(err)
      return res.json({ message: "Successfully generated", result })
    });    
  });

});


module.exports = router;
