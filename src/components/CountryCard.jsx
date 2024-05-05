import useStore from "@/app/zustand/store";
import LoadingMessage from "./LoadingMessage";
import { numberFormat } from "@/utils/helpers";
import Link from "next/link";

// const checkCountry = (officialName) =>
// const checkCountry = (officialName) =>
//   countryArray.findIndex((country) => country.name === officialName);
//   countryArray.findIndex((country) => country.name === officialName);

function CountryCard() {
  const { countryData, isLoading } = useStore();

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
  } = countryData[0] || [];

  if (isLoading)
    return (
      <div className="center md:h-[75vh] w-full">
        <LoadingMessage />
      </div>
    );

  const coatOfArm = coatOfArms?.png || coatOfArms?.svg;
  const flag = flags?.png || flags?.svg;
  const officialName = name?.official || name?.common;
  const commonName = name?.common || name?.official;
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
      <div className="center h-[85vh] md:h-[75vh]">
        <p className="center px-4 text-center w-full md:container ">
          Kick start by selecting a country from the dropdown menu 🙂
        </p>
      </div>
    );

  return (
    <div className="mx-auto md:w-[50rem]">
      <div className="h-auto md:h-96 mx-auto w-[24rem] md:w-[40rem]   rounded-md shadow-lg border py-4 px-2 md:px-10">
        <h1 className="text-gradient text-xl lg:text-3xl text-center truncate mb-[2.5rem] lg:mb-[2rem] max-w-[55rem] ">
          {officialName}
        </h1>

        <div className=" w-[22rem] md:w-[35rem] h-[42rem] md:h-[86%] ml-3 mt-[-1rem]  flex flex-col justify-center items-center gap-5 md:flex-row">
          <div className="border-2 h-[40rem] md:h-[100%] w-[17rem] md:w-[100%] truncate  text-md pb-0 md:pb-4">
            <picture>
              <img
                src={`${flag}`}
                alt="flag"
                className="object-cover w-[100%] h-[51%]"
              />
            </picture>
            <div className="p-2 whitespace-nowrap">
              <p className="truncate">
                <span className="font-semibold">Name:</span> {commonName}
              </p>
              <p>
                <span className="font-semibold truncate">Population:</span>{" "}
                {numberFormat(population)}
              </p>
              <p className="truncate">
                <span className="font-semibold truncate">Continent:</span>{" "}
                {continents}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {capital ? capital : "N/A"}
              </p>

              {currencyName && currencySymbol && (
                <p className="truncate">
                  <span className="font-semibold">Currency: </span>
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

          <picture className="h-[100%] w-[20rem] md:w-[100%] center">
            <img
              src={coatOfArm ? coatOfArm : ""}
              alt="coat of arm"
              className="object-contain object-center  h-[20rem] md:size-[100%]"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
