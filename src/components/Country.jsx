// TESTING FUNCTIONALIY
const countryArray = [
  { name: "Mali", continent: "Africa" },
  { name: "Federal republic of Nigeria", continent: "Africa" },
  { name: "Ghana", continent: "Africa" },
  { name: "Niger", continent: "Africa" },
];

const checkCountry = (countryName) =>
  countryArray.findIndex((country) => country.name.includes(countryName));
console.log(checkCountry("Niger"));

function Country({ children }) {
  return <div className="grid grid-cols-[auto_1fr]">{children}</div>;
}

export default Country;
