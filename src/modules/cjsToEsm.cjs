// esm.mjs

import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const convertCjsToEsm = async (cjsFilePath, esmFilePath) => {
  try {

    const cjsContent = await readFile(cjsFilePath, 'utf-8');

  
    const esmContent = `
      ${cjsContent}
      export default module.exports;
    `;

    // Write the content to the ESM file
    await writeFile(esmFilePath, esmContent, 'utf-8');

    console.log('CJS to ESM conversion successful!');
  } catch (error) {
    console.error('Conversion failed:', error);
  }
};

export default convertCjsToEsm;
