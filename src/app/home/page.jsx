"use client";

import Country from "@/components/Country";
import Footer from "@/components/Footer";
import GoBackPage from "@/components/GoBackPage";
import NavBar from "@/components/NavBar";
import CountryCard from "@/components/CountryCard";
import useStore from "../zustand/store";

function Page() {
  const username = useStore((state) => state.username);

  if (!username) return <GoBackPage />;

  return (
    <div className="h-screen grid md:grid-rows-[auto_1fr_auto]">
      <NavBar />
      <Country>
        <CountryCard />
      </Country>
      <Footer />
    </div>
  );
}

export default Page;
