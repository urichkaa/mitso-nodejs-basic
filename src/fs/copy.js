const copy = async () => {
    const sourceFolder = 'files';
  const destinationFolder = 'files_copy';

  
  if (!fs.existsSync(sourceFolder)) {
    throw new Error('FS operation failed: Source folder does not exist');
  }

  
  if (fs.existsSync(destinationFolder)) {
    throw new Error('FS operation failed: Destination folder already exists');
  }

 
  fs.mkdirSync(destinationFolder);


  const files = fs.readdirSync(sourceFolder);


  files.forEach((file) => {
    const sourcePath = path.join(sourceFolder, file);
    const destinationPath = path.join(destinationFolder, file);

   
    fs.copyFileSync(sourcePath, destinationPath);
  });

  console.log('Files copied successfully!');
};

await copy();
