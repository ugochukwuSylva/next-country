import useStore from "@/app/zustand/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// import Dropdown from "./Dropdown";

function SideBar() {
  const { countriesDropdown, getCountriesDropdown, getCountry } = useStore();
  const router = useRouter();

  useEffect(() => {
    getCountriesDropdown();
  }, [getCountriesDropdown]);

  return (
    <aside className="w-[15rem] p-2  border border-r-stone-300 flex flex-col justify-between">
      <select
        onChange={(e) => getCountry(e.target.value)}
        className="text-sm w-[100%]  border border-slate-300 focus:outline-2 focus:outline-blue-500 cursor-pointer truncate py-1"
      >
        <option disabled selected hidden className="text-center">
          -- SELECT COUNTRY --
        </option>
        {countriesDropdown?.map((country) => (
          <option value={country.name} key={country.name} className="text-sm">
            {country.name}
          </option>
        ))}
      </select>
      <button
        onClick={() => router.push("/")}
        className="border-none flex justify-center font-semibold hover:bg-blue-400 bg-blue-500 p-2 rounded-full tracking-wide uppercase cursor-pointer transition-all duration-400 w-full"
      >
        Log out
      </button>
    </aside>
  );
}

export default SideBar;
