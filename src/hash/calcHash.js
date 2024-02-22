const calculateHash = async () => {
  try {
    const filePath = 'fileToCalculateHashFor.txt';
    const fileContent = await fs.readFile(filePath);

    const hash = createHash('sha256');
    hash.update(fileContent);
    const hashHex = hash.digest('hex');

    console.log('SHA256 Hash:', hashHex);
  } catch (error) {
    console.error('Error calculating hash:', error);
  } 
};

await calculateHash();



