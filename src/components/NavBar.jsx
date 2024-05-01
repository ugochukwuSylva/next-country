"use client";

import useStore from "@/app/zustand/store";

// import { IoSearchOutline } from "react-icons/io5";

function NavBar({ query, setQuery }) {
  const name = useStore((state) => state.username).toUpperCase();
  const { getCountry } = useStore();

  function handleSubmit(e) {
    e.preventDefault();
    // setQuery("");
    getCountry(query);
  }

  return (
    <nav className="overflow-hidden flex justify-between  items-center py-4 px-2 md:px-6 shadow  shadow-stone-300  min-h-[4rem] md:min-h-20">
      <p className="text-md md:text-xl text-stone-600 whitespace-nowrap w-full truncate">
        👋 Welcome
        <span className="tracking-wide font-extrabold  ml-2 md:ml-5  ">
          {name}
        </span>
      </p>

      <form className="w-[13rem] md:w-[20rem] relative" onSubmit={handleSubmit}>
        <input
          value={query}
          type="text"
          className="w-full rounded-full p-1 md:p-2 border border-slate-300 focus:outline-2 focus:outline-blue-500 focus:sm:scale-x-110 sm:transition-scale sm:duration-300"
          placeholder="Enter country"
          onChange={(e) => setQuery(e.target.value)}
          required
        />

        {/* <IoSearchOutline
          size={22}
          // className="absolute right-2.5 top-2.5"
        /> */}
      </form>
    </nav>
  );
}

export default NavBar;
