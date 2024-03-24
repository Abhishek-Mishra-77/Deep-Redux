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
              key={component.id}
              to={`/slowui/${section.id}/${component.id}`}
              className="block rounded-xl border bg-teal-700 border-gray-800 p-8 shadow-xl  transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            >
              <span className="text-6xl text-purple-700">{component.icon}</span>

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
