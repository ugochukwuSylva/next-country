"use client";

import Country from "@/components/Country";
import Footer from "@/components/Footer";
import GoBackPage from "@/components/GoBackPage";
import NavBar from "@/components/NavBar";
import CountryCard from "@/components/CountryCard";
import SideBar from "@/components/SideBar";
import useStore from "../zustand/store";
import { useState } from "react";

function Page() {
  const [query, setQuery] = useState("");
  const username = useStore((state) => state.username);

  if (!username) return <GoBackPage />;

  return (
    <div className="h-screen grid   md:grid-rows-[auto_1fr_auto]">
      <NavBar query={query} setQuery={setQuery} />

      <Country>
        <SideBar />
        <CountryCard query={query} />
      </Country>

      <Footer />
    </div>
  );
}

export default Page;
