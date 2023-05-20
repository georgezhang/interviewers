import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Jumpoton: FC<{}> = () => (
  <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 flex justify-center">
      <div>
        <StaticImage
          src="../images/screenshot_01.png"
          alt="App Screen"
          width={394}
          height={733}
        />
      </div>
      <div className="max-w-2xl flex-col justify-center flex">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Revolutionizing APP to simulate job interviews with ChatGPT
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Interviews APP leverages the power of ChatGPT, an advanced language
          model, to simulate realistic job interviews.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#downloads"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Download Now
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <Link to="/about"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Jumpoton;
