const write = async () => {
  try {
    const filePath = 'fileToWrite.txt';
    const writeStream = createWriteStream(filePath, { encoding: 'utf-8' });

    process.stdin.pipe(writeStream);

    console.log('Enter data to write (Press Ctrl+D to finish):');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};

await write();
