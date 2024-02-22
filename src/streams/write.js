const read = async () => {
  try {
    const filePath = 'fileToRead.txt';
    const readStream = createReadStream(filePath, { encoding: 'utf-8' });

    readStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    readStream.on('end', () => {
      console.log('File reading completed.');
    });
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

await read();
