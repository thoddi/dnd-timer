class Sequence {
  private key: string;
  private nextValue: number;

  constructor(key: string) {
    this.key = `${key}-sequence`;
    this.nextValue = 0;
  }

  get next() {
    const id = Number(localStorage.getItem(this.key));
    localStorage.setItem(this.key, `${id + 1}`)
    return id;
  }
}

export default Sequence;
