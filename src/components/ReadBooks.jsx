
import  { useState } from "react";
// import { getBooks } from "../Utils";
import { getBook } from "../Utils";
import Red from "./Red";

const ReadBooks = () => {

    const [books, setBooks] = useState([]);
    
    useState(() => {
        const storeBooks = getBook();
        setBooks(storeBooks);
    },[]);
    

    return (
        <div>
            
            <ul>
                {books?.map((book) => (
                    
                    <Red key={book.bookId} book={book}/>
                ))}
                
            </ul>
        </div>
    );
};

export default ReadBooks;
