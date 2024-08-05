import { useEffect, useState } from "react";

const dogData = [
  {
    name: "Golden Retriever",
    image_link: "https://api-ninjas.com/images/dogs/golden_retriever.jpg",
    max_height_male: "24",
    max_weight_male: "75",
    max_weight_female: "65",
    max_height_female: "24",
    max_life_expectancy: "12",
  },
];

export default function App() {
  const [show, setShow] = useState(true);
  const [dog, setDog] = useState([]);
  const [error, setError] = useState("");
  const query = "golden retriever";
  useEffect(function () {
    async function fetchDogs() {
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/dogs?name=${query}`
        );
        if (!res.ok) throw new Error("something went wrong with fetching dogs");
        const data = await res.json();
        if (data.length === 0) throw new Error("dog not found");
        setDog(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    }
    fetchDogs();
  }, []);

  function handelShow() {
    setShow((show) => !show);
  }
  return (
    <>
      <Search />

      <FetchUi setshow={handelShow} show={show} dogInfo={dog} />
      {error && <Displayerror error={error} />}
    </>
  );
}
function Search() {
  return (
    <div className="flex flex-col items-center bg-darkBrown ">
      <h1 className="font-bold text-xl mt-4 text-beige">
        Fetch the Facts: Dog Breed Information at Your Fingertips
      </h1>
      <input
        placeholder="Search for Dogs ..."
        className="w-80 h-10  rounded shadow  placeholder-white bg-lightBrown text-center m-3 focus:outline-none focus:border-none focus:-translate-y-px focus:shadow-current transition-all text-beige"
      />
    </div>
  );
}
function FetchUi({ setshow, show, dogInfo }) {
  return (
    <>
      <button
        className="bg-blue-400 rounded-full w-6 absolute right-0 mt-2 mr-2"
        onClick={setshow}
      >
        {show ? "-" : "+"}
      </button>

      {show && (
        <ul className="list-none bg-lightblue flex flex-col items-center">
          {dogInfo.map((dog) => (
            <Fetch dog={dog} key={dog.name} />
          ))}
        </ul>
      )}
    </>
  );
}

function Fetch({ dog }) {
  return (
    <li className="flex flex-row m-5  border-blue-300 border-4 h-72 w-2/3 ">
      <img
        src={dog.image_link}
        alt={dog.name}
        className="w-96 h-64 rounded m-2"
      />
      <div className="ml-4 mt-5 font-mono h-64  w-60">
        <h1>Name: {dog.name}</h1>
        <h2>Height Male: {dog.max_height_male} inches</h2>
        <h2>Weight Male: {dog.max_weight_male} lbs</h2>
      </div>
      <div className="ml-4 font-mono mt-5 w-60 h-64 ">
        <h2>Weight Female: {dog.max_weight_female} lbs</h2>
        <h2>Height Female: {dog.max_height_female} inches</h2>
        <h2>life expectancy: {dog.max_life_expectancy} yrs</h2>
      </div>
    </li>
  );
}

function Displayerror({ error }) {
  return (
    <div className="flex justify-center tex h-1/3 items-center">
      <h1 className="font-bold text-xl text-red-500 font-serif">
        <span>⛔️</span> {error}
      </h1>
    </div>
  );
}
