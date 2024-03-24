import React from "react";
import { Link } from "react-router-dom";

const UiCategory = ({ section }) => {
  return (
    <div>
      <div>
        <h1 className="p-4 text-xl text-teal-700">{section.category}</h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-21 lg:grid-cols-3 ">
          {section.data.map((component) => (
            <Link
              to={`/slowui/${section.id}/${component.id}`}
              className="block rounded-xl border bg-teal-700 border-gray-800 p-8 shadow-xl  transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">
                {component.title}
              </h2>

              <p className="mt-1 text-sm text-gray-300">{component.total}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UiCategory;