const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('assets/images')
    .filter(file => {
      return file.endsWith('.png');
    })
    .map(file => {
      return file.replace('@2x.png', '').replace('@3x.png', '');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  let properties = imageFileNames()
    .map(name => {
      return `${name.replace('.png', '')}: require('../assets/images/${name}')`;
    })
    .join(',\n  ');

  const string = `const images = {
  ${properties},
};

export default images;
`;

  fs.writeFileSync('src/images.ts', string, 'utf8');
};

generate();
