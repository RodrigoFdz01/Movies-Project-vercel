import { createContext } from "react";

import data from "../peliculas";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  function addFav(id) {
    const item = data.find((peli) => peli.id === id);
    console.log(item);
    console.log("enviando");
  }

  return (
    <GlobalContext.Provider
      value={{
        addFav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
