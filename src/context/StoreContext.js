import { createContext } from "react";
import PropTypes from "prop-types";

import RootStore from "stores/RootStore";

const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const rootStore = new RootStore();

  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export { StoreContext, StoreProvider };
