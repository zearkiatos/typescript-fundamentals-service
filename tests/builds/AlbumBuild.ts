import { Album } from "../../src/Album/Domain/Album";
import { Picture } from '../../src/Pictures/Domain/Picture';
class AlbumBuild {
  album: Album;
  constructor() {
    this.album = new Album(1, 'My Album 1');
    this.album.pictures = [];
  }

  withId(id: number): AlbumBuild {
    this.album.id = id;
    return this;
  }

  withTitle(title: string): AlbumBuild {
    this.album.title = title;
    return this;
  }


  withPictures(pictures: Picture[]): AlbumBuild {
    this.album.pictures = pictures;
    return this;
  }

  build(): Album {
    return this.album;
  }
}

export { AlbumBuild };