import { useEffect, useState } from "react";
import useStore from "@/app/zustand/store";
import DropdownMenuList from "./DropdownMenuList";
import OutsideClickHandler from "react-outside-click-handler";
import SearchInput from "./SearchInput";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function DropdownMenu() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [selected, setSelected] = useState("");
  const { countriesDropdown, getCountriesDropdown } = useStore();

  useEffect(() => {
    getCountriesDropdown();
  }, [getCountriesDropdown]);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col item-center justify-center"
      >
        <div
          className={`w-44 md:w-80 rounded-md  cursor-pointer h-8  border-2 ${
            isOpen && "border-2 border-blue-500 "
          }`}
        >
          <div className=" uppercase  text-stone-600 flex justify-between items-center px-2">
            <span className="truncate text-sm md:text-md">
              {selected ? selected : "select country"}
            </span>

            <IoIosArrowDown
              size={22}
              className={`text-slate-600 ${isOpen && "rotate-180"}`}
            />
          </div>
        </div>
        <ul
          className={`${
            isOpen
              ? "opacity-1 md:max-h-96  visible"
              : "opacity-0 md:max-h-0 invisible"
          } fixed whitespace-nowrap  md:top-16 md:w-[20rem] md:mr-12  bg-stone-200 z-10 transition-all duration-300 rounded-md ease-in overflow-y-auto overflow-x-hidden shadow-md max-h-[100%] right-0 top-0 w-full `}
        >
          <div className="sticky top-0">
            <SearchInput
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              query={query}
              setQuery={setQuery}
            />
            <CiSearch
              size={22}
              className="text-stone-600 absolute top-1.5 left-0 ml-1"
            />
          </div>

          {countriesDropdown?.map((country, i) => (
            <DropdownMenuList
              key={country.name}
              countryName={country.name}
              isActive={isActive === i}
              onClickList={() => setIsActive(i)}
              setCountryName={() => setQuery(country.name)}
              query={query}
              setQuery={setQuery}
              setSelectedCountry={() => {
                selected !== country.name && setSelected(country.name);
              }}
            />
          ))}
        </ul>
      </div>
    </OutsideClickHandler>
  );
}

export default DropdownMenu;
