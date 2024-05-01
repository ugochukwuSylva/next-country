"use client";
import useStore from "@/app/zustand/store";
// import { isValidName } from "@/utils/helpers";
import { useRouter } from "next/navigation";

function LandingPage() {
  const router = useRouter();
  const setName = useStore((state) => state.setUsername);
  const name = useStore((state) => state.username);

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 2) return;
    router.push("/home");
  }

  return (
    <>
      <div className="flex items-baseline">
        <h1 className="text-gradient ">Next country</h1>
        <span className="text-4xl md:text-6xl">🌍</span>
      </div>

      <p className="text-center text-xl mb-12 px-3 text-stone-500">
        An application that provides a couple of fact based information <br />{" "}
        about any country in the world!
      </p>

      <form className="w-[22rem] md:w-[30rem] relative" onSubmit={handleSubmit}>
        {/* focus:scale-x-110 transition-scale duration-300 */}
        <input
          type="text"
          className="w-full rounded-full p-4 border border-slate-300 focus:outline-2 focus:outline-blue-500 "
          placeholder="Enter your username"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button className="absolute top-1 right-1 border-none flex items-center hover:bg-blue-500 bg-blue-400 p-3 rounded-full tracking-wide uppercase cursor-pointer transition-all duration-400">
          Submit
        </button>
      </form>
    </>
  );
}

export default LandingPage;
