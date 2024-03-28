import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveBook } from "../Utils";
import { saveRedBook } from "../Utils/wishList";

const SingleBook = () => {
  
  const { id } = useParams();
  const [book, setBook] = useState(false);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        const foundBook = data.find((book) => book.bookId == id);
        setBook(foundBook);
      });
  }, [id]);

    if (!book) {
      return <div>Loading...</div>;
    }




    const handelRead = (book) => {
      // console.log(book);
      saveBook(book);
    }


    const addToWishlist = (book) => {
      saveRedBook(book);
      console.log(book);
    }
  return (
    <div className="container mx-auto pl-0 md:pl-20 pr-0 md:pr-20 mb-20  ">
      
      

      <div className="hero min-h-screen bg-base-200 mt-5 rounded-3xl border-2 border-green-400 shadow-2xl ">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={book.image}
            className="max-w-sm rounded-lg -mt-0 md:-mt-28 flex-1 shadow-2xl"
          />
          <div className="flex-1">
            <h1 className="text-5xl ml-5">{book.bookName}</h1>
            <div className="mt-5">
              <span className="text-xl  dark:text-gray-800">
                By: <span>{book.author}</span>
              </span>
            </div>
            <hr className="mt-5 mb-3" />
            <h1 className="text-xl ">{book.category}</h1>
            <hr className="mt-3" />

            <p className="py-6">
              <span className="text-xl font-bold">Review:</span>{" "}
              <span className="text-lg">{book.review}</span>
            </p>
            <div className="p-6 flex gap-8 text-green-500">
              <h1 className="text-xl font-bold mr-4 text-black">Tag</h1>
              <p className="text-base font-bold p-1 w-32 text-center bg-slate-200 rounded-full">
                {book.tags[0]}
              </p>
              <p className="text-base font-bold p-1 w-24 text-center bg-slate-200 rounded-full">
                {book.tags[1]}
              </p>
            </div>
            <hr className="mt-3 mb-8" />
            <div>

              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  {/* head */}

                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td className="text-xl">Number of Pages: </td>
                      <td className="text-xl font-bold">{book.totalPages}</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td className="text-xl">Publisher: </td>
                      <td className="text-xl font-bold">{book.publisher}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td className="text-xl">Year of Publishing: </td>
                      <td className="text-xl font-bold">
                        {book.yearOfPublishing}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xl">Rating: </td>
                      <td className="text-xl font-bold">{book.rating}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex gap-4 mt-5">
              <button
               onClick={() => handelRead(book)}
               className="btn  ml-4 font-bold w-24 border-2 border-[#858484]">Read</button>
              <button
                onClick={() => addToWishlist(book)}
                className="btn bg-[#50B1C9] text-white w-32">Wishlist</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SingleBook;
