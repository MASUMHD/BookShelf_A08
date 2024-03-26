import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container mx-auto pr-0 md:pr-20 pl-0 md:pl-20 mt-10">
      <section className="flex items-center h-full p-16 dark:bg-gray-200 rounded-xl dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we could not find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <NavLink
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold rounded dark:bg-[#23BE0A] dark:text-gray-50"
            >
              Back To Home Page
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
