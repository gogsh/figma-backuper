const fs = require('fs');
const glob = require('glob');
const path = require('path');

/**
 *
 */
const createFolder = (pathToCreateFolder: string) => {
  if (!fs.existsSync(pathToCreateFolder)) {
    fs.mkdirSync(pathToCreateFolder, { recursive: true });
  }
};

/**
 *
 */
const prepareFolderName = (...parts) => {
  return path.join(...parts);
};

/**
 * находится ли данный файл в данной директории
 */
const isFileInDirectory = (folderName: string, fileName) => {
  const files = fs.readdirSync(folderName);
  return files.some(
    (file) =>
      file.startsWith(fileName) &&
      (file.endsWith('.fig') || file.endsWith('.jam')),
  );
};

/**
 * перенести файл из временной папки на его реальное место
 */
const moveFile = (
  tmpFolderName: string,
  folderName: string,
  fileName: string,
) => {
  const files = fs.readdirSync(tmpFolderName);
  const oldPath = files.find(
    (file) =>
      file.startsWith(fileName) &&
      (file.endsWith('.fig') || file.endsWith('.jam')),
  );
  if (oldPath) {
    const extension = path.extname(oldPath);
    const newPath = path.join(folderName, `${fileName}${extension}`);
    fs.renameSync(path.join(tmpFolderName, oldPath), newPath);
    return newPath;
  } else {
    throw new Error(`File not found: ${fileName}`);
  }
};

const saveBackupInfoAsFile = (
  fileName: string,
  backupInfo: any,
  baseFolder: string,
) => {
  fs.writeFileSync(fileName, backupInfo);

  const destinationFilePath = `${baseFolder}/${fileName}`;

  fs.rename(fileName, destinationFilePath, (err) => {
    if (err) {
      console.error('Error moving file:', err);
    } else {
      console.log('File moved successfully!');
    }
  });
};

module.exports = {
  createFolder,
  prepareFolderName,
  isFileInDirectory,
  moveFile,
  saveBackupInfoAsFile,
};
