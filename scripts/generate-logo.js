const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const { JSDOM } = require('jsdom');
const svg2img = require('svg2img');

const svgString = fs.readFileSync('./public/assets/logo.svg', 'utf8');

svg2img(svgString, {
  width: 800,
  height: 800,
}, function(error, buffer) {
  if (error) {
    console.error('Error generating PNG:', error);
    return;
  }
  fs.writeFileSync('./public/assets/logo.png', buffer);
  console.log('Successfully generated logo.png');
}); 