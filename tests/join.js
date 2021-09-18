//import joinImages from 'join-images';
const joinImages = require('join-images').default;


console.log("join",joinImages)




joinImages(['block1.png', 'block2.jpg']).then((img) => {
  img.toFile('out.png');
});
