const { Restaurant } = require("../database/seed");
const PostcodesIO = require('postcodesio-client');
const { post } = require("../app");
const postcodes = new PostcodesIO();
// const db = require("../database/connection");

exports.fetchAllRestaurants = () => {
  return Restaurant.find().then((restaurantList) => {
    return restaurantList;
  });
};

const  fetchUserCoordinates = async (postcode) => {
  const area = postcode.slice(0, 3);
  const regExNo = /[0-9]/;
  if (area[0].match(regExNo)) {
    return Promise.reject({ status: 400, msg: "Invalid location type" });
  }
  try { 
    const address = await postcodes.lookup(postcode)
    if (address === null) {
      return Promise.reject({status: 404, msg: "Location does not exist"})
    }
    // console.log(address)
      const coordinates = {latitude: address.latitude, longitude: address.longitude};
      // console.log(coordinates)
      return coordinates;
  } catch(err) {
    console.log(err)
  }
}


exports.fetchRestaurantsByLocation = async (location, preferences) => {
  // const area = location.slice(0, 3);
  // const regExNo = /[0-9]/;
  
  const coordinates = await fetchUserCoordinates(location)
  // await Restaurant.createIndex( { location: "2dsphere" } )
  // .then((coords) => {
    // console.log(coords)
    // return coords
  // });

    
    console.log(typeof coordinates.longitude)
   
  // if (area[0].match(regExNo)) {
  //   return Promise.reject({ status: 400, msg: "Invalid location type" });
  // }
  let queryObject = {
    location: {
      $geoWithin: {
        $centerSphere: [
          [coordinates.longitude, coordinates.latitude],
          0.5 / 3963.2,
        ],
      },
    },
  };
  if (preferences) {
    queryObject.type = preferences;
  }

  return Restaurant.find(
    queryObject)
    .then(
    (restaurantList) => {
      // if (restaurantList.length === 0) {
      //   return Promise.reject({ status: 404, msg: "Location does not exist" });
      // }
      console.log(restaurantList)
      console.log(restaurantList.length)
      return restaurantList;
    }
  );
};

exports.fetchIndividualRestaurantByLocation = (location, name) => {
  if (location[0].match(/[0-9]/)) {
    return Promise.reject({status: 400, msg: "Invalid location type"})
  }
  return Restaurant.find({postCode: location, name: name}).then((individualRestaurant) => {
    if (individualRestaurant.length === 0) {
      return Promise.reject({ status: 404, msg: "Nothing found" })
    }
    return individualRestaurant;
  })
}
