import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  try {
    const sourceFilePath = 'fileToCompress.txt';
    const destinationFilePath = 'archive.gz';

    const readStream = createReadStream(sourceFilePath);
    const gzip = createGzip();
    const writeStream = createWriteStream(destinationFilePath);

    readStream.pipe(gzip).pipe(writeStream);

    console.log('File compression completed.');
  } catch (error) {
    console.error('Error compressing file:', error);
  }
};

await compress();
