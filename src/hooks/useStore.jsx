import { createContext, useContext } from "react";
import RootStore from "../store";

const RootStateContext = createContext(null);
const store = new RootStore();

export const GlobalProvider = ({ children }) => {
  return (
    <RootStateContext.Provider value={store}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(RootStateContext);

  if (!store) throw new Error("Используйте store внутри провайдера!");

  return store;
};
