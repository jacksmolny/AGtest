import { makeObservable, observable, action, computed, reaction } from "mobx";

import data from "data/data";
import cities from "data/city";
import categories from "data/category";

import thumbnail1 from "assets/images/thumbnail-1.jpg";
import thumbnail2 from "assets/images/thumbnail-2.jpg";
import thumbnail3 from "assets/images/thumbnail-3.jpg";

class RootStore {
  initialData;

  CITY_PLACEHOLDER = { id: 0, name: "Please select city" };

  THUMBNAILS = [thumbnail1, thumbnail2, thumbnail3];

  constructor() {
    this.initialData = {
      data,
      categories,
      cities: [this.CITY_PLACEHOLDER, ...cities],
    };
    this.activeCityId = this.initialData.cities[0].id;
    this.activeCategories = [];
    this.activeExtremum = [];
    this.filteredData = [];

    makeObservable(this, {
      activeCityId: observable,
      activeCategories: observable,
      activeExtremum: observable,
      filteredData: observable,
      setActiveCityId: action.bound,
      setActiveCategoryId: action.bound,
      setActivePrice: action.bound,
      getActiveCity: computed,
      getActiveCategories: computed,
      getActiveExtremum: computed,
      getQuantityOfItemsByCategory: computed,
      getExtremumOfItemsByPrice: computed,
      getFilteredData: computed,
    });

    reaction(
      () => ({
        cityFilter: +this.activeCityId,
        categoryFilter: this.activeCategories.slice(),
        priceFilter: this.activeExtremum.slice(),
        data: this.initialData.data.slice(),
      }),
      (value) => {
        const getFilteredDataByCity = value.data.filter((item) => {
          if (value.cityFilter === 0) {
            return true;
          }
          return item.city === value.cityFilter;
        });

        const getFilteredDataByCategory = getFilteredDataByCity.filter((item) => {
          if (value.categoryFilter.length === 0) {
            return true;
          }
          return value.categoryFilter.includes(`${item.category}`);
        });

        const getFilteredDataByPrice = getFilteredDataByCategory.filter((item) => {
          if (value.priceFilter.length === 0) {
            return true;
          }
          if (
            item.price >= value.priceFilter[0] &&
            item.price <= value.priceFilter[1]
          ) {
            return true;
          }
          return false;
        });

        const getValuesToData = getFilteredDataByPrice.map((item, index) => {
          const thumbnail =
            index <= this.THUMBNAILS.length - 1
              ? this.THUMBNAILS[index]
              : this.THUMBNAILS[index - this.THUMBNAILS.length];
          const city = this.initialData.cities.find((el) => el.id === item.city);
          const category = this.initialData.categories.find(
            (el) => el.id === item.category,
          );

          return {
            ...item,
            thumbnail,
            city: city.name,
            category: category.name,
          };
        });

        this.filteredData = getValuesToData;
      },
    );
  }

  setActiveCityId(id) {
    this.activeCityId = +id;
  }

  setActiveCategoryId(id) {
    const presentCategoryIndex = this.activeCategories.indexOf(id);

    if (presentCategoryIndex !== -1) {
      this.activeCategories.splice(presentCategoryIndex, 1);
    } else {
      this.activeCategories.push(id);
    }
  }

  setActivePrice(extremum) {
    this.activeExtremum = extremum;
  }

  get getActiveCity() {
    return this.initialData.cities.find(({ id }) => id === this.activeCityId);
  }

  get getActiveCategories() {
    return this.activeCategories.slice();
  }

  get getActiveExtremum() {
    return this.activeExtremum.slice();
  }

  get getQuantityOfItemsByCategory() {
    return this.initialData.data.reduce((result, { category }) => {
      const { name } = this.initialData.categories.find(({ id }) => id === category);

      if (result[name] !== undefined) {
        return {
          ...result,
          [name]: result[name] + 1,
        };
      }

      return {
        ...result,
        [name]: 1,
      };
    }, {});
  }

  get getExtremumOfItemsByPrice() {
    return this.initialData.data.reduce((result, { price }) => {
      if (price < result.min) {
        return { ...result, min: price };
      }
      if (price > result.max) {
        return { ...result, max: price };
      }

      return { min: price, max: price };
    }, {});
  }

  get getFilteredData() {
    return this.filteredData.slice();
  }
}

export default RootStore;
