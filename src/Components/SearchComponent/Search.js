import React from "react";

const Search = () => {
  return (
    <div>
      <form action="" className="bg-blue-400 p-5 rounded-lg">
        <div className="flex justify-center gap-2">
          <input
            type="text"
            name=""
            id=""
            className="w-full p-3 rounded-lg"
            placeholder="Search your desired laptop."
          />
          <button
            type="submit"
            className="border border-white px-4 font-semibold py-1 rounded-lg"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
