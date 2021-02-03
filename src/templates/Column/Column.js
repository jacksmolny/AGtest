import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const Column = ({ children }) => (
  <div className={classes.wrapper}>
    <header className={classes.header} />
    <main className={classes.main}>{children}</main>
    <footer className={classes.footer} />
  </div>
);

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default Column;
