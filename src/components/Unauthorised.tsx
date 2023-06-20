import { Link } from "react-router-dom";

export const Unauthorised = () => {
  return (
    <section className="flex h-screen items-center p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="w-[50%] text-center">
          <h2 className="mb-8 text-center font-extrabold text-6xl dark:text-gray-600">
            Unauthorised
          </h2>
          <p className="text-2xl mb-5 font-semibold md:text-3xl">
            Sign In to Continue
          </p>
          <Link
            to="/"
            rel="noopener noreferrer"
            className="px-8 inline-block py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};
