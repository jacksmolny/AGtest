/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const Checkbox = ({ name, quantity, value, activeValues, setActiveValue }) => {
  const onChange = ({ target: { dataset } }) => setActiveValue(dataset.value);

  return (
    <div className={classes.container}>
      <input
        type="checkbox"
        id={name}
        name={name}
        data-value={value}
        className={classes.checkbox}
        onChange={onChange}
        checked={activeValues.includes(`${value}`)}
      />
      <label className={classes.field} htmlFor={name}>
        <span className={classes.label}>{name}</span>
        <i className={classes.count}>({quantity})</i>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  activeValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  setActiveValue: PropTypes.func.isRequired,
  quantity: PropTypes.number,
};

Checkbox.defaultProps = {
  quantity: 0,
};

export default Checkbox;
