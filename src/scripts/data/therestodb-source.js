import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async homeRestaurants() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async favoriteRestaurants(data) {
    const response = await fetch(API_ENDPOINT.FAVORITE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestoDbSource;
