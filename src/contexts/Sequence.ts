class Sequence {
  private key: string;

  constructor(key: string) {
    this.key = `${key}-sequence`;
  }

  get next() {
    const id = Number(localStorage.getItem(this.key) || 1);
    localStorage.setItem(this.key, `${id + 1}`)
    return id;
  }
}

export default Sequence;
