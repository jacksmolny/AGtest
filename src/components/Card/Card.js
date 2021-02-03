import PropTypes from "prop-types";

import classes from "./styles.module.scss";

const Card = ({ id, thumbnail, name, city, category, price }) => (
  <div className={classes.container}>
    <a href={`/${id}`} className={classes.link} aria-label="link">
      <div className={classes.header}>
        <div className={classes.thumbnail}>
          <img className={classes.image} src={thumbnail} alt={name} title={name} />
        </div>
        <p className={classes.city}>{city}</p>
      </div>
      <div className={classes.main}>
        <h2 className={classes.title}>{name}</h2>
        <div className={classes.bar}>
          <p className={classes.category}>{category}</p>
          <p className={classes.price}>{`$${price}`}</p>
        </div>
      </div>
    </a>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
