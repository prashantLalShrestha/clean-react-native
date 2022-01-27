const fs = require('fs');

const fontFileNames = () => {
  const array = fs.readdirSync('assets/fonts').map(file => {
    return file.replace('.ttf', '');
  });

  return Array.from(new Set(array));
};

const generate = () => {
  const properties = fontFileNames()
    .map(name => {
      const key = name.replace(/\s/g, '');
      return `${key}: '${name}'`;
    })
    .join(',\n  ');

  const string = `const fonts = {
  ${properties},
};

export default fonts;
`;

  fs.writeFileSync('src/fonts.ts', string, 'utf8');
};

generate();
