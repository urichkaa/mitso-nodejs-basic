const transform = async () => {
  try {
    const reverseTransform = new Transform({
      transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('');
        this.push(reversedChunk);
        callback();
      },
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);

    console.log('Enter text to reverse (Press Ctrl+D to finish):');
  } catch (error) {
    console.error('Error transforming data:', error);
  }
};

await transform();
