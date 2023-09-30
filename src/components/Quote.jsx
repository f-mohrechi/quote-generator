import React from "react";

export default function Quote({ data, randomQuote }) {
  return (
    <div className="bg-stone-50 px-5 py-4 shadow-md rounded-xl mb-5">
      {data && (
        <div className="font-merriweather">
          {data.map((item) => (
            <div>
              <p
                className="text-3xl font-black italic text-center text-gray-900"
                key={item.id}
              >
                ❝ {randomQuote.quote} ❞
              </p>

              <p className="text-end pt-3 text-gray-700 text-sm">
                {randomQuote.author}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
