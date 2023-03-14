import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {

  return (
    <FoodContext.Provider
      value={{
        // food,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
