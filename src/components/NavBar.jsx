"use client";

import { useState } from "react";
import useStore from "@/app/zustand/store";

// import { IoSearchOutline } from "react-icons/io5";

function NavBar() {
  const [query, setQuery] = useState("");
  const name = useStore((state) => state.username).toUpperCase();
  const { getCountry } = useStore();

  function handleSubmit(e) {
    e.preventDefault();

    getCountry(query);
  }

  return (
    <nav className="flex justify-between  items-center py-4 px-6 shadow shadow-stone-300">
      <p className="text-xl text-stone-600 ">
        Welcome onboard 👋
        <span className="tracking-wide font-extrabold  ml-5">{name}</span>
      </p>

      <form className="w-[20rem] relative" onSubmit={handleSubmit}>
        <input
          defaultValue={query}
          type="text"
          className="w-full rounded-full p-2 border border-slate-300 focus:outline-2 focus:outline-blue-500 focus:scale-x-110 transition-scale duration-300"
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
