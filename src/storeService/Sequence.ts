const key = 'nextId';

class Sequence {
  static get next() {
    const id = Number(localStorage.getItem(key));
    localStorage.setItem(key, `${id + 1}`)
    return id;
  }
}

export default Sequence;
