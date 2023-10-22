import { useEffect, useState } from "react";
import CategoryBtn from "./components/CategoryBtn";
import Quote from "./components/Quote";

// Import generate service
import { generate } from "./services/api/quote";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const [category, setCategory] = useState("");
  const [randomQuote, setRandomQuote] = useState({});

  const fetchData = async () => {
    setLoading(true);

    try {
      // For the first time, there is no category and it will use the first item for example
      const response = await generate(category || categories[0].title);

      setRandomQuote(response[Math.floor(Math.random() * response.length)]);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categories = [
    { title: "alone" },
    { title: "business" },
    { title: "change" },
    { title: "courage" },
    { title: "education" },
    { title: "experience" },
    { title: "failure" },
    { title: "fear" },
    { title: "funny" },
    { title: "happiness" },
    { title: "love" },
    { title: "motivation" },
    { title: "morning" },
    { title: "movies" },
    { title: "success" },
  ];

  return (
    <>
      <div className="w-[700px] m-auto pt-20">
        {/* Passing quote, loading and error. Data is removed */}
        <Quote randomQuote={randomQuote} loading={loading} error={error} />

        <p className="mb-5 text-gray-700">
          category:
          <span className="font-semibold"> &nbsp;{category}</span>
        </p>

        <div className="flex items-center justify-center flex-wrap">
          {categories.map((item, index) => {
            return (
              // In loops, use a key for items
              <div className="py-2 px-3" key={`item-${index}`}>
                <CategoryBtn
                  category={item}
                  onClick={() => setCategory(item.title)}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-5">
          <button
            className="bg-transparent outline-none rounded-lg px-4 py-2 border border-gray-700 text-gray-700 font-semibold hover:bg-gray-700 hover:text-amber-300 hover:border-r-amber-300 delay-75 transition-all ease-in-out"
            onClick={fetchData} // When you don't want to pass any parameters, use just the function name istead of an arrow function
          >
            GENERATE
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
