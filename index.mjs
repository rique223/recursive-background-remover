import * as path from 'path';
import { ensureDirectoryExists } from './src/ensureDirectoryExists.mjs';
import fs from 'fs';
import { isImageFile } from './src/isImageFile.mjs';
import { removeBackgroundFromImage } from './src/removeBackgroundFromImage.mjs';

const recursivelyReadDirectory = async (dir) => {
  try {
    const files = await fs.promises.readdir(dir);
    let count = 0;

    for(const file of files) {
      console.log(`Number of files traversed: ${count++}`);
      const filePath = path.join(dir, file);
      const fileStats = await fs.promises.stat(filePath);

      if (fileStats.isDirectory()) {
        await recursivelyReadDirectory(filePath); 
      } else if (isImageFile(file)) {
        const outputPath = path.join('output', filePath);
        ensureDirectoryExists(path.dirname(outputPath));
        await removeBackgroundFromImage(filePath, outputPath);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const root = 'assets/arquivo';
recursivelyReadDirectory(root);