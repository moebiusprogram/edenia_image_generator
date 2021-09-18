//import joinImages from 'join-images';
const joinImages = require('join-images').default;


console.log("join",joinImages)




joinImages(['block1.png', 'block2.png']).then((img) => {
  img.toFile('out.png');
});
