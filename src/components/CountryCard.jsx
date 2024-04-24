import useStore from "@/app/zustand/store";
import LoadingMessage from "./LoadingMessage";
import { numberFormat } from "@/utils/helpers";
import Link from "next/link";

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
  const currencyType = currencies && Object.keys(currencies).toString();
  const currencySymbol = currencies && currencies[currencyType].symbol;
  const currencyName = currencies && currencies[currencyType].name;

  if (countryData.length === 0)
    return (
      <h1 className="center">
        Kick start by typing your search word in the search bar 🙂
      </h1>
    );

  return (
    <div className="center">
      <div className="h-[85%] w-[70%] rounded-md shadow-lg border py-4 px-10">
        <h1 className="text-gradient text-3xl text-center truncate mt-[-0.5rem]">
          {countryName}
        </h1>

        <div className="w-[90%] h-[86%] mt-[-1rem] mx-auto flex justify-center items-center gap-5">
          <div className="border-2 h-[100%] w-[100%] overflow-hidden text-md">
            <picture>
              <img
                src={`${flag}`}
                alt="flag"
                className="h-[50%] w-[100%] object-cover"
              />
            </picture>
            <div className="p-3 truncate">
              <p>
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
                <span className="font-semibold">Capital:</span> {capital}
              </p>

              <p>
                <span className="font-semibold">Currency:</span>{" "}
                {`${currencyName} (${currencySymbol})`}
              </p>
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
          <picture className="h-[100%] w-[100%] center">
            <img
              src={coatOfArm ? coatOfArm : ""}
              alt="coat of arm"
              className="object-contain object-center w-[100%] h-[100%]"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
