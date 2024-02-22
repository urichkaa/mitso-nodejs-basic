const rename = async () => {
  const sourceFile = 'wrongFilename.txt';
  const destinationFile = 'properFilename.md';


  if (!fs.existsSync(sourceFile)) {
    throw new Error('FS operation failed: Source file does not exist');
  }


  if (fs.existsSync(destinationFile)) {
    throw new Error('FS operation failed: Destination file already exists');
  }


  fs.renameSync(sourceFile, destinationFile);

  console.log('File renamed successfully!');
};

await rename();
