/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useState } from "react";
import cs from "classnames";
import PropTypes from "prop-types";

import arrowDown from "assets/icons/arrow-down.svg";
import classes from "./styles.module.scss";

const Dropdown = ({ options, activeValue, setActiveValue }) => {
  const [opened, setOpened] = useState(false);

  const onClick = () => setOpened((state) => !state);
  const onSelect = ({
    target: {
      dataset: { id },
    },
  }) => {
    setOpened(false);
    setActiveValue(id);
  };

  return (
    <div className={classes.container}>
      <button
        type="button"
        className={cs(classes.button, { [classes.opened]: opened })}
        onClick={onClick}
      >
        <span className={classes.label}>{activeValue.name}</span>
        <img
          src={arrowDown}
          className={classes.icon}
          alt="arrow-down icon"
          title="arrow-down icon"
        />
      </button>
      <ul className={cs(classes.list, { [classes.opened]: opened })}>
        {options.map(({ id, name }) => (
          <li
            key={`${name}-${id}`}
            data-id={id}
            className={cs(classes.item, {
              [classes.active]: id === activeValue.id,
            })}
            onClick={onSelect}
            aria-hidden="true"
          >
            {name}
          </li>
        ))}
      </ul>
      {opened && (
        <div className={classes.overlay} onClick={onClick} role="presentation" />
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  activeValue: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  setActiveValue: PropTypes.func.isRequired,
};

export default Dropdown;
