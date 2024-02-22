const read = async () => {
  const fileToRead = 'fileToRead.txt';


  if (!fs.existsSync(fileToRead)) {
    throw new Error('FS operation failed: File to read does not exist');
  }


  const fileContent = fs.readFileSync(fileToRead, 'utf-8');

  console.log('File content:');
  console.log(fileContent);
};

await read();
