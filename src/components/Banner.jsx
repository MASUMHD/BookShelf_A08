import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800 rounded-2xl mt-10">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl ">
            Books to freshen up your bookshelf
            </h1>
            
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <NavLink
                rel="noopener noreferrer"
                to="/books"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#23BE0A] dark:text-gray-50 mt-4"
              >
                View The List
              </NavLink>
             
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.postimg.cc/6Q3YL9NK/pngwing-1.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
