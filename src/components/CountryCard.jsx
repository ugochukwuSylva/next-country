import useStore from "@/app/zustand/store";
import LoadingMessage from "./LoadingMessage";
import { numberFormat } from "@/utils/helpers";
import Link from "next/link";

// const checkCountry = (countryName) =>
//   countryArray.findIndex((country) => country.name === countryName);

function CountryCard({ query }) {
  const { countryData, isLoading } = useStore();
  let index;

  query === "china" ? (index = 3) : (index = 0);

  const {
    coatOfArms,
    flags,
    population,
    capital,
    name,
    // subregion,
    continents,
    maps,
    currencies,
  } = countryData[index] || [];

  if (isLoading)
    return (
      <div className="center">
        <LoadingMessage />
      </div>
    );

  const coatOfArm = coatOfArms?.png || coatOfArms?.svg;
  const flag = flags?.png || flags?.svg;
  const countryName = name?.official || name?.common;
  const map = maps?.googleMaps;
  //   const map2 = maps?.openStreetMaps
  //   const currency = Object.values(currencies)[0]?.name;
  const currencyType =
    (currencies && Object.keys(currencies)[0]) ||
    (currencies && Object.keys(currencies)[1]) ||
    (currencies && Object.keys(currencies)?.toString());
  const currencySymbol = currencies && currencies[currencyType]?.symbol;
  const currencyName = currencies && currencies[currencyType]?.name;

  if (countryData.length === 0)
    return (
      <div className="center h-[85vh]">
        <p className=" px-4 text-center w-full lg:container">
          Kick start by typing your search word in the search bar <br />
          <span className="hidden md:block">
            or select a country from the dropdown menu 🙂
          </span>
        </p>
      </div>
    );

  return (
    <div className="mx-auto md:w-[50rem]  pt-10">
      <div className="mx-auto md:w-[35.5rem] md:min-w-[40rem]  rounded-md shadow-lg border py-4 px-0 md:px-10">
        <h1 className="text-gradient text-xl lg:text-3xl text-center truncate mb-[2.5rem] lg:mb-[2rem] max-w-[55rem] ">
          {countryName}
        </h1>

        <div className=" w-[22rem] md:w-[35rem] md:h-[86%] ml-3 mt-[-1rem]  flex flex-col justify-center items-center gap-5 md:flex-row">
          <div className="border-2 h-[100%] w-[20rem] md:w-[100%]  text-md">
            <picture>
              <img
                src={`${flag}`}
                alt="flag"
                className="object-cover w-[100%] h-[50%]"
              />
            </picture>
            <div className="p-2 whitespace-nowrap">
              <p className="truncate">
                <span className="font-semibold">Name:</span> {countryName}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {numberFormat(population)}
              </p>
              <p className="">
                <span className="font-semibold">Continent:</span> {continents}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {capital ? capital : "N/A"}
              </p>

              {currencyName && currencySymbol && (
                <p>
                  <span className="font-semibold truncate">Currency: </span>
                  {`${currencyName} (${currencySymbol})`}
                </p>
              )}
              <Link
                href={`${map}`}
                target="_blank"
                className="capitalize text-blue-500 hover:text-blue-700 hover:underline"
              >
                <em> see map</em>
              </Link>
            </div>
          </div>
          {/*  */}

          <picture className="h-[100%] w-[20rem] md:w-[35rem] center">
            <img
              src={coatOfArm ? coatOfArm : ""}
              alt="coat of arm"
              className="object-contain object-center w-[100%]"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
