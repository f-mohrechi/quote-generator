import axios from "axios";
import { useEffect, useState } from "react";
import CategoryBtn from "./components/CategoryBtn";
import Quote from "./components/Quote";

function App() {
  const [category, setCategory] = useState("");
  const [randomQuote, setRandomQuote] = useState({});
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
      const headers = {
        "X-Api-Key": "BJxzg9axIff0j4ZQh1R+Rg==y5SgvK79XQluV1SA",
      };
      //   const response = await axios.get(url, { headers });
      //   setData(response.data);
      // } catch (error) {
      //   console.error("Error: ", error);
      //   throw error;
      // }
      const response = await axios.get(url, { headers });
      setData(response.data);
      setRandomQuote(
        response.data[Math.floor(Math.random() * response.data.length)]
      );
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    }
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
        <Quote data={data} randomQuote={randomQuote} />

        <p className="mb-5 text-gray-700">
          category:
          <span className="font-semibold"> &nbsp;{category}</span>
        </p>

        <div className="flex items-center justify-center flex-wrap">
          {categories.map((item) => {
            return (
              <div className="py-2 px-3">
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
            onClick={() => fetchData()}
          >
            GENERATE
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
