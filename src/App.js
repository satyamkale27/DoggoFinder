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
  return (
    <>
      <Search />
      <FetchUi />
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
        className="w-80 h-10  border-gray-300 rounded shadow  placeholder-white bg-lightBrown text-center m-3"
      />
    </div>
  );
}
function FetchUi() {
  return (
    <ul className="list-none bg-lightblue flex flex-col items-center">
      {dogData.map((dog) => (
        <Fetch dog={dog} key={dog.name} />
      ))}
    </ul>
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
      <div className="ml-4 mt-5 font-mono">
        <h1>Name: {dog.name}</h1>
        <h2>Height-Male: {dog.max_height_male}</h2>
        <h2>Weight-Male: {dog.max_weight_male}</h2>
      </div>
      <div className="ml-4 font-mono mt-5">
        <h2>Weight-Female: {dog.max_weight_female}</h2>
        <h2>Height-Female: {dog.max_height_female}</h2>
        <h2>life-expectancy: {dog.max_life_expectancy}</h2>
      </div>
    </li>
  );
}
