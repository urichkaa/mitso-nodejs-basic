const remove = async () => {
  const fileToRemove = 'fileToRemove.txt';

  // Проверяем, существует ли файл для удаления
  if (!fs.existsSync(fileToRemove)) {
    throw new Error('FS operation failed: File to remove does not exist');
  }

  // Удаляем файл
  fs.unlinkSync(fileToRemove);

  console.log('File removed successfully!');
};

await remove();
