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

export { createPicture, createPic };
