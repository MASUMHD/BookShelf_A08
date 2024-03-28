import  { useState } from "react";

import Red from "./Red";
import { getRedBook } from "../Utils/wishList";
// import { getBook } from "../Utils";


const WishlistBooks = () => {

    const [books, setBooks] = useState([]);

    // const storeBooks = getBook();

    useState(() => {
        let storeRedBooks =getRedBook();

        // storeRedBooks = storeRedBooks.filter((book) => !storeBooks.includes(book));

        setBooks(storeRedBooks);
    },[]);

    return (
        <div>
            {/* <h1 className="text-5xl font-bold text-center mt-20 mb-14"> I can not show Wishlist data </h1> */}
            {books?.map((book) => (
                    
                    <Red key={book.bookId} book={book}/>
                ))}
        </div>
    );
};

export default WishlistBooks;



