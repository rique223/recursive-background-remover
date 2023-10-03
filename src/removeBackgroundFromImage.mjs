import fs from 'fs';
import { removeBackground } from '@imgly/background-removal-node';

export const removeBackgroundFromImage = async (image, outputPath) => {
    try {
        const blob = await removeBackground(image);
        const buffer = await blob.arrayBuffer();
        await fs.promises.writeFile(outputPath, Buffer.from(buffer));
        console.log(`Image saved to ${outputPath}`);
    } catch (error) {
        console.error(error);
    }
}