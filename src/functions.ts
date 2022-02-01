import { LiteralFlickrSize } from "./LiteralFlickrSize";

function createPicture(title: string, date: string, size?: LiteralFlickrSize) {
  console.log(`Create picture using ${title}, ${date}, ${size}`);
}

const createPic = (
  title: string,
  date: string,
  size: LiteralFlickrSize
): object => ({
  title,
  date,
  size
});

function handleError(code: number, message: string): never | string {
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has occurred';
    }
} 

export { createPicture, createPic, handleError };
