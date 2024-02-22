const create = async () => {
    const filePath = 'files/fresh.txt';
    
  const fileContent = 'I am fresh and young';
    
  if (fs.existsSync(filePath)) {
    throw new Error('FS operation failed: File already exists');
};

await create();

