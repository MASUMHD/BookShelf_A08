import toast from "react-hot-toast";

export const getBook = () => {
    let books = [];
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

//SAME
export const saveBook = (book) => {
    let newBooks = getBook();
    const isExist = newBooks.find((b) => b.bookId === book.bookId);
    if (isExist) {
        return toast.error("Book already exist");
    }
    newBooks.push(book);
    localStorage.setItem('books', JSON.stringify(newBooks));
    toast.success("Book added successfully");

    
}