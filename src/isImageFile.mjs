import * as path from 'path';

export const isImageFile = (filename) => {
    const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const ext = path.extname(filename).toLowerCase();
    return supportedExtensions.includes(ext);
}