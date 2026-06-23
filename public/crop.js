const fs = require('fs');
const Jimp = require('jimp');

async function splitImage() {
  try {
    const image = await Jimp.read('network wireshark.png');
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    // Crop left half
    const left = image.clone().crop(0, 0, w / 2, h);
    await left.writeAsync('network_scanning.png');
    
    // Crop right half
    const right = image.clone().crop(w / 2, 0, w / 2, h);
    await right.writeAsync('wireshark_analysis.png');
    
    console.log('Images cropped successfully!');
  } catch (err) {
    console.error('Error cropping images:', err);
  }
}

splitImage();
