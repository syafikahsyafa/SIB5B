class Book{
    title: string;
    pages: number;
    authors: string;
    type: string;

    private stock: number;

    constructor (title: string, pages: number, authors: string, type: string, stock: number){
        this.title = title
        this.pages = pages
        this.authors = authors
        this.type = type
        this.stock = stock
    }

    borrow(){
        if (this.stock === 0){
            throw new Error (`sorry, "${this.title}" is out of stock.`);

        }
        this.stock--;
        console.log(
            `you have borrowes"${this.title}". remaining stock ${this.stock}`,
        );
    }
        returnBook() {
    this.stock++;
    console.log(`Buku "${this.title}" dikembalikan. sisa stok: ${this.stock}`);
    }
}

const novelBook = new Book("laskar pelangi",529,"Andrea Hirata","Novel",5);
const ComicBook = new Book("one piece",1000,"eiihiro","Comic",10);

novelBook.borrow();
ComicBook.borrow();
novelBook.returnBook();