function SearchInput({ query, setIsOpen, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
      onClick={() => setIsOpen(false)}
      type="text"
      placeholder="Enter country name"
      className="border border-slate-300  focus:outline-slate-300 w-full  p-1 rounded-md bg-stone-100 pl-8"
    />
  );
}

export default SearchInput;
