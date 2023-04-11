import { Link } from "react-router-dom";

import NotFoundImg from "assets/notfound.svg";

function NotFound() {
  return (
    <>
      <div className="min-h-[75vh] flex flex-col items-center justify-center gap-y-4">
        <img
          alt="NotFoundPage"
          src={NotFoundImg}
          className="w-[250px] lg:w-[350px]"
        />
        <div className="text-center">
          <h1 className="font-semibold text-2xl lg:text-4xl text-accent">
            404 Not Found
          </h1>
          <p className="font-medium text-lg lg:text-xl mb-8">
            The page you were looking doesn't exist
          </p>
          <Link to="/" className="hover:underline hover:text-accent">
            Please go to this link
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
