import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { TfiFile } from "react-icons/tfi";

const Red = ({ book }) => {
  
  const {
    author,
    image,
    rating,
    tags,
    bookName,
    bookId,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
  } = book;
  return (
    <div>
      <div className="mt-10 w-full md:w-3/4 mb-10 border-2 border-red-600">
        <div className="hero  min-h-[300px] bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-14 ">
            <img src={image} className="max-w-sm h-80 rounded-lg shadow-2xl " />
            <div className="">
              <h1 className="text-5xl font-bold">{bookName}</h1>
              <h1 className="mt-5">
                <span className="text-lg   dark:text-gray-600">
                  By: <span>{author}</span>
                </span>
              </h1>


              <div className="mt-5 flex gap-8 text-green-500 w-20 md:w-full">
                <h1 className="text-xl text-black font-bold p-0 md:p-1 ">Tags</h1>
                <p className="text-base font-bold p-0 md:p-1 w-16 md:w-32 text-center md:bg-slate-200 rounded-full">
                  {tags[0]}
                </p>

                <p className="text-sm md:text-base font-bold p-0 md:p-1 w-10 md:w-24 text-center md:bg-slate-200 rounded-full">
                  {tags[1]}
                </p>
                <p className="text-base  text-center text-slate-700 flex items-center">
                  <span className="text-xl p-2">
                    <CiLocationOn />
                  </span>{" "}
                  Year of Publishing: {yearOfPublishing}
                </p>
              </div>
              <div className="flex gap-8 mt-5 text-base text-slate-500">
                <h1 className="flex items-center gap-2">
                  {" "}
                  <span className="">
                    <SlPeople />
                  </span>{" "}
                  Publisher : {publisher}
                </h1>
                <h1 className="flex items-center gap-2">
                  {" "}
                  <span className="">
                    <TfiFile />
                  </span>{" "}
                  Page : {totalPages}
                </h1>
              </div>
              <hr className="mt-4 border-gray-400 border-1 border-dashed" />


              <div className="flex mt-5 gap-6 w-20 md:w-full">
                <p className="text-sm p-3 w-40 text-[#328EFF] text-center bg-sky-200 rounded-full">
                Category: {category}
                </p>
                <p className="text-base p-3 w-32 text-[#FFAC33] text-center bg-orange-100 rounded-full">
                Rating: {rating}
                </p>
                <button className="btn bg-[#23BE0A] w-32 md:w-40  text-white rounded-full">
                  <Link to={`/book/${bookId}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Red;
