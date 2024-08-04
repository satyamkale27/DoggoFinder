const dogData = [
  {
    name: "Golden Retriever",
    image_link: "https://api-ninjas.com/images/dogs/golden_retriever.jpg",
    max_height_male: "24",
    max_weight_male: "75",
  },
];

export default function App() {
  return <Search />;
}
function Search() {
  return (
    <div className="flex flex-col items-center bg-darkBrown">
      <h1 className="font-bold text-xl m-5 text-beige">
        Fetch the Facts: Dog Breed Information at Your Fingertips
      </h1>
      <input
        placeholder="Search for Dogs ..."
        className="w-80 h-10  border-gray-300 rounded shadow  placeholder-white bg-lightBrown text-center"
      />
    </div>
  );
}
function FetchUi() {
  return <ul className="list-none"></ul>;
}
