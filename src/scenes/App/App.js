/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { observer } from "mobx-react-lite";

import useStore from "hooks/useStore";
import Column from "templates/Column";
import Dropdown from "components/Dropdown";
import Checkbox from "components/Checkbox";
import Ranger from "components/Ranger";
import Card from "components/Card";

import classes from "./styles.module.scss";

const App = observer(() => {
  const {
    initialData: { cities, categories },
    getActiveCity: activeCity,
    getActiveCategories: activeCategories,
    getQuantityOfItemsByCategory: quantity,
    getExtremumOfItemsByPrice: extremum,
    getFilteredData: filteredData,
    setActiveCityId,
    setActiveCategoryId,
    setActivePrice,
  } = useStore();

  return (
    <Column>
      <div className={classes.wrapper}>
        <aside className={classes.sidebar}>
          <div className={classes.row}>
            <h3 className={classes.title}>City</h3>
            <Dropdown
              options={cities}
              activeValue={activeCity}
              setActiveValue={setActiveCityId}
            />
          </div>
          <div className={classes.row}>
            <h3 className={classes.title}>Categories</h3>
            <ul className={classes.list}>
              {categories.map(({ id, name }) => (
                <li className={classes.item} key={`${name}-${id}`}>
                  <Checkbox
                    name={name}
                    value={id}
                    quantity={quantity[name]}
                    activeValues={activeCategories}
                    setActiveValue={setActiveCategoryId}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.row}>
            <h3 className={classes.title}>Price</h3>
            <Ranger extremum={extremum} setActiveValue={setActivePrice} />
          </div>
        </aside>
        <section className={classes.content}>
          <div className={classes.cards}>
            {filteredData.map((item) => (
              <div key={`${item.name}-${item.id}`} className={classes.card}>
                <Card {...item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Column>
  );
});

export default App;
