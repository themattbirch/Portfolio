// fix-entry.js
import fs from 'fs';

const filePath = './dist/server/entry.mjs';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  const updatedData = data.replace(
    /start\(\{/,
    start({   hostname: process.env.HOST || '0.0.0.0',
  );
  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) throw err;
    console.log('entry.mjs has been updated to listen on 0.0.0.0');
  });
});
