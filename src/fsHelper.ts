const fs = require("fs");
const glob = require("glob");
const path = require("path");

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
  const files = glob.sync(path.join(folderName, `${fileName}*.fig`), {
    nodir: true,
  });

  return files.length > 0;
};

/**
 * перенести файл из временной папки на его реальное место
 */
const moveFile = (
  tmpFolderName: string,
  folderName: string,
  fileName: string,
) => {
  const [oldPath] = glob.sync(path.join(tmpFolderName, `${fileName}*.fig`), {
    nodir: true,
  });
  //   const newPath = path.join(
  //     folderName,
  //     `${fileName}-${isPartial ? "partial" : ""}.fig`
  //   );
  const newPath = path.join(folderName, `${fileName}.fig`);
  fs.renameSync(oldPath, newPath);
  return newPath;
};

const saveBackupInfoAsFile = (fileName: string, backupInfo: any, baseFolder: string) => {
  fs.writeFileSync(fileName, JSON.stringify(backupInfo, null, 2));

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
  saveBackupInfoAsFile
};
