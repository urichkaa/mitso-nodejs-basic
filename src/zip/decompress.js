import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
  try {
    const sourceFilePath = 'archive.gz';
    const destinationFilePath = 'fileToCompress.txt';

    const readStream = createReadStream(sourceFilePath);
    const gunzip = createGunzip();
    const writeStream = createWriteStream(destinationFilePath);

    readStream.pipe(gunzip).pipe(writeStream);

    console.log('File decompression completed.');
  } catch (error) {
    console.error('Error decompressing file:', error);
  }
};

await decompress();
