import { FaAngleDown } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { saveBook } from "../Utils";
// import { saveRedBook } from "../Utils/wishList";





const ListedBooks = () => {
  
  
  const [tabIndex, setTabIndex] = useState(0);
  
  const showBooks = (book) => {
    // console.log(book);
    saveBook(book);
  }

  
  // const addToWishlist = (book) => {
  //   saveRedBook(book);
    
  
  // }

  
  

  

  return (
    <div className="container mx-auto pr-0 md:pr-20 pl-0 md:pl-20 ">
      <div className="bg-[#e9ebec] mt-12 p-5 rounded-xl ">
        <h1 className="text-4xl font-bold text-center ">Books</h1>
      </div>

      <div className="flex justify-center mt-8 ">
        <details className="dropdown text-center">
          <summary className="m-1 btn w-32 bg-[#23BE0A] text-white items-center justify-center">
            Sort By
            <span className=" mt-1 text-base">
              <FaAngleDown />
            </span>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="pl-5 mt-10">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to=''
            
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border border-b-0 rounded-t-2xl : 'border-b'border-[#23BE0A] dark:border-[#23BE0A]" : "border border-b-1  border-[#23BE0A] border-t-0 border-l-0 border-r-0"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span onClick={() => showBooks()}>Read Books</span>
            
          </Link>
          
          
          <Link
            to={`unread`}
            onClick={() => setTabIndex(1)}
            
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? "border border-b-0 rounded-t-2xl : 'border-b'border-[#23BE0A] dark:border-[#23BE0A]" : "border border-b-1 border-[#23BE0A] border-t-0 border-l-0 border-r-0"}`} 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            
            <span >Wishlist Books</span>
            
          </Link>
         
        </div>
        <Outlet />
        
      </div>
    </div>
  );
};

export default ListedBooks;
