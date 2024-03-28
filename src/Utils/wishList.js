// import toast from "react-hot-toast";

// export const getRedBook = () => {
//     let RedBook = [];
//     const storedWishList = localStorage.getItem('RedBook');
//     if (storedWishList) {
    
//         RedBook = JSON.parse(storedWishList);
//     }
//     return RedBook;
// }

// //SAME
// export const saveRedBook = (book) => {
//     let newRedBooks = getRedBook();
//     const isExist = newRedBooks.find((b) => b.bookId === book.bookId);
//     if (isExist) {
//         return toast.error("Book already exist");
//     }
//     newRedBooks.push(book);
//     localStorage.setItem('RedBook', JSON.stringify(newRedBooks));
//     toast.success("Book added successfully");
// }



