const Red = ({ book }) => {
  const { title, author, image, rating, tags } = book;
  return (
    <div>
      {books.map((book) => (
        // <Red key={book.bookId} book={book}/>
        <h1>{book.title}</h1>
      ))}   
    </div>

  );
};

export default Red;
