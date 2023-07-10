class Library {
  constructor() {
    if (Library.instance == null) {
      Library.instance = this;
      this.books = [];
    }
    return Library.instance;
    // this.count=0;
  }
  addBooks(book) {
    this.books.push(book);
  }
  getLength() {
    return this.books.length;
  }
}

const library = new Library();
Object.freeze(library);
export default library;
