const fs = require('fs');
const path = require('path');

const directories = ['Biographer', 'Daydreams', 'Hammer', 'Long Dog', 'Preacher', 'Ground', 'Train', '91 Ford', 'Alright', 'Peacock','Oakwood', 'All Along', 'Behind The Blue', 'Train', 'Im Afraid', 'CloseFar', 'Goin Down Slow', 'New Album',]; // Your folder names here
const imageList = {};

directories.forEach(dir => {
  imageList[dir] = fs.readdirSync(dir).filter(file => {
    return file.match(/\.(jpg|jpeg|png|gif|webp)$/); // Filter to include only images
  }).map(file => path.join(dir, file));
});

fs.writeFileSync('imageList.json', JSON.stringify(imageList, null, 2));
