import React from "react";

const SearchUI = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a city"
        id="City"
        className="appearance-none border-2 bg-slate-200 w-3/4 mt-4 px-2 mx-3 text-black items-center justify-center"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default SearchUI;
