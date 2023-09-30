import React from "react";

export default function CategoryBtn({ category, onClick }) {
  return (
    <button
      className="outline-none bg-gray-800 text-gray-200 rounded-lg px-4 py-2 hover:bg-gray-700 hover:text-gray-50 delay-75 transition-all ease-in-out"
      onClick={onClick}
    >
      {category.title}
    </button>
  );
}
