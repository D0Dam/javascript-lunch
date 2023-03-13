import { CLASS } from '../../constants';
import RestaurantListItem, { IRestaurant } from '../../domain/RestaurantListItem';
import Restaurant from './Restaurant';
import RestaurantList from './RestaurantList';

const RestaurantListSection = {
  template(restaurantList: IRestaurant[]) {
    return `
    <section class="${CLASS.RESTAURANT_LIST_CONTAINER}">
      ${RestaurantList.template(restaurantList)}
    </section>`;
  },
  setEvent(RestaurantListItem: RestaurantListItem) {
    Restaurant.setEvent(RestaurantListItem);
    RestaurantList.setEvent(RestaurantListItem);
  },
  update(RestaurantListItem: RestaurantListItem, restaurantList: IRestaurant[]) {
    const restaurantListContainer = document.querySelector(`.${CLASS.RESTAURANT_LIST_CONTAINER}`) as HTMLDivElement;
    restaurantListContainer.innerHTML = RestaurantList.template(restaurantList);
    this.setEvent(RestaurantListItem);
  },
  append(RestaurantListItem: RestaurantListItem, restaurant: IRestaurant) {
    const restaurantListContainer = document.querySelector(`.${CLASS.RESTAURANT_LIST_CONTAINER}`) as HTMLDivElement;
    const template = Restaurant.template(restaurant);
    restaurantListContainer.insertAdjacentHTML('afterbegin', template);
    this.setEvent(RestaurantListItem);
  },
};

export default RestaurantListSection;
