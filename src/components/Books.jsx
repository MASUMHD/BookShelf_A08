import { useLoaderData } from "react-router-dom";
import Book from "./Book";


const Books = () => {
  const books = useLoaderData();

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center mt-20 mb-14">Books</h1>
      </div>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3  mb-20">
        {books.map((book) => ( <Book key={book._id} book={book} /> ))}
      </div>

      
    </div>
  );
};

export default Books;
