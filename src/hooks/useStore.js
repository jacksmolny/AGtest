import { useContext } from "react";

import { StoreContext } from "context/StoreContext";

const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) {
    return new Error("please check StoreProvider HOC");
  }

  return store;
};

export default useStore;
