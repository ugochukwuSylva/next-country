import useStore from "@/app/zustand/store";

function DropdownMenuList({
  countryName,
  isActive,
  onClickList,
  setCountryName,
  query,
  setQuery,
  setSelectedCountry,
}) {
  const { getCountry } = useStore();

  function handleClick() {
    onClickList();
    setCountryName();
    setQuery("");
    setSelectedCountry();
    getCountry(countryName);
  }

  return (
    <li
      onClick={handleClick}
      className={`rounded-md p-1 mx-3 cursor-pointer md:text-md  md:m-2 hover:bg-blue-500 ${
        countryName.toLowerCase().startsWith(query) ? "block" : "hidden"
      } hover:text-stone-100 ${isActive && "bg-blue-500 text-stone-100"}`}
    >
      {countryName}
    </li>
  );
}

export default DropdownMenuList;
