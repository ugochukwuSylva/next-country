import { create } from "zustand";

const useStore = create((set) => {
  return {
    username: "",
    isLoading: false,
    countryData: [],
    countriesDropdown: [],
    error: "",
    clearData: () => set(() => ({ countryData: [] })),

    // setError: (err) => set(() => ({ error: err })),
    setUsername: (data) => set(() => ({ username: data.trim() })),
    getCountry: async (country) => {
      (() => set({ isLoading: true }))();

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${country}?fullText=true`
        );
        if (!res.ok)
          throw new Error(`Country not found ☹ (Error ${res.status})`);
        const data = await res.json();
        set({ countryData: data, isLoading: false });
      } catch (err) {
        console.error(err.message);
        // () => set({ error: err.message });
        // () => set((state) => ({ error: state.setError(err.message) }));
      }
    },
    getCountriesDropdown: async () => {
      try {
        const res = await fetch(
          "https://api.countrystatecity.in/v1/countries",
          {
            headers: {
              "X-CSCAPI-KEY": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        if (!res) throw new Error(res.status);
        const data = await res.json();
        set({ countriesDropdown: data });
      } catch (err) {
        console.error(err.message);
      }
    },
  };
});

export default useStore;
