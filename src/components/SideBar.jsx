import useStore from "@/app/zustand/store";
import { useEffect, useState } from "react";

// import Dropdown from "./Dropdown";

function SideBar() {
  const [dropdown, setDropdown] = useState("");
  const { countriesDropdown, getCountriesDropdown, getCountry } = useStore();

  useEffect(() => {
    getCountriesDropdown();
  }, [getCountriesDropdown]);

  return (
    <aside className="w-[15rem] p-2  border border-r-stone-300">
      <select
        className="text-sm w-[100%]  border border-slate-300 focus:outline-2 focus:outline-blue-500 cursor-pointer truncate"
        onChange={(e) => setDropdown(getCountry(e.target.value))}
      >
        <option disabled selected className="text-center">
          -- SELECT COUNTRY --
        </option>
        {countriesDropdown?.map((country) => (
          <option value={country.name} key={country.name} className="text-sm">
            {country.name}
          </option>
        ))}
      </select>
    </aside>
  );
}

export default SideBar;
