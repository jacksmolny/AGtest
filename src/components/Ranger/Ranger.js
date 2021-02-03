/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import { Range } from "rc-slider";
import _JSXStyle from "styled-jsx/style";
import PropTypes from "prop-types";

import { RANGE_STYLES } from "./utils";
import classes from "./styles.module.scss";

const Ranger = ({ extremum, setActiveValue }) => {
  const [rangeOfPrice, setRangeOfPrice] = useState([extremum.min, extremum.max]);

  const onChange = ([min, max]) => setRangeOfPrice([min, max]);

  const onClick = () => setActiveValue(rangeOfPrice);

  useEffect(() => {
    setActiveValue([extremum.min, extremum.max]);
  }, [extremum]);

  return (
    <>
      <_JSXStyle id="ranger">{RANGE_STYLES}</_JSXStyle>
      <div className={classes.container}>
        <Range
          min={extremum.min}
          max={extremum.max}
          value={rangeOfPrice}
          step={1}
          allowCross={false}
          onChange={onChange}
        />
        <div className={classes.bar}>
          <p className={classes.values}>
            <span>${rangeOfPrice[0]}</span>
            <i className={classes.separator}>-</i>
            <span>${rangeOfPrice[1]}</span>
          </p>
          <button type="button" className={classes.button} onClick={onClick}>
            Filter
          </button>
        </div>
      </div>
    </>
  );
};

Ranger.propTypes = {
  extremum: PropTypes.shape({ min: PropTypes.number, max: PropTypes.number })
    .isRequired,
  setActiveValue: PropTypes.func.isRequired,
};

export default Ranger;
