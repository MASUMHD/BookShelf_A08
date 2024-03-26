import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  
  const { title, author, image, rating,tags,bookId } = book;


  return (
    <div className="border-4 border-emerald-400 rounded-2xl">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="">

            <Link
              rel="noopener noreferrer"
              to={`/book/${bookId}`}
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded p-10 h-80 group-hover:scale-105 sm:h-96 dark:bg-gray-500"
                src={image}
              />
              <div className="p-6 flex gap-8 text-green-500">
                <p className="text-base font-bold p-1 w-32 text-center bg-slate-200 rounded-full">
                  {tags[0]}
                </p>
                <p className="text-base font-bold p-1 w-24 text-center bg-slate-200 rounded-full">
                {tags[1]}
                </p>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline mb-4">
                  {title}
                </h3>
                <span className="text-lg  dark:text-gray-600">
                  By: <span>{author}</span>
                </span>
                <hr className="mt-5 mb-4 border-dashed border-1 border-slate-400 "></hr>
                <div className="flex justify-between">
                  <p className="text-lg text-slate-700">Fiction</p>
                  <p className="text-lg text-slate-700 flex items-center gap-2">
                    {rating}{" "}
                    <span className="text-xl">
                      <FaRegStar />
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
