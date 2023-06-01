import { useState, useMemo, useContext, createContext } from "react";

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const generatImage = () => {//api call};
  const data = useMemo(() => ({ prompt, setPrompt,generatImage }), [prompt]);

  return (
    <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>
  );
};

export const useHomePage = () => {
  const context = useContext();
  return context;
};
