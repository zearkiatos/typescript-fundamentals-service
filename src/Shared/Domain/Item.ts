abstract class Item {
  protected id: number;
  protected title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  get Id() {
    return this.id;
  }
  set Id(id: number) {
    this.id = id;
  }

  get Title() {
    return this.title;
  }

  set Title(title: string) {
    this.title = title;
  }
}

export { Item };
