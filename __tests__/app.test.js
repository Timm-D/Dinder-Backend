const request = require("supertest");
const app = require("../app");
const db = require("../database/connection");
const seedData = require("../database/test_data/index");
const {
  seedDataBase,
  closeDataBase,
  clearDataBase,
} = require("../database/seed");

const { restaurantData, usersData } = seedData;

beforeEach(async () => await seedDataBase(restaurantData, usersData));

//Will clear DB post seed
// afterEach(async () => await clearDataBase())

afterAll(async () => await closeDataBase());

describe("GET/api/restaurants", () => {
  test("200: responds with object containing an array of all restaurant objects", () => {
    return request(app)
      .get("/api/restaurants")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(40);
        expect(Array.isArray(body)).toBe(true);
        body.forEach((restaurant) => {
          expect(restaurant).toEqual(
            expect.objectContaining({
              name: expect.any(String),
              addressLine1: expect.any(String),
              postCode: expect.any(String),
              ratingValue: expect.any(Number),
              geoLong: expect.any(Number),
              geoLat: expect.any(Number),
              type: expect.any(String),
            })
          );
        });
      });
  });
  test("404: returns not found when the url is incorrect", () => {
    return request(app)
      .get("/api/nothinghere")
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Not Found" });
      });
  });
});

describe("GET/api/restaurants/:location", () => {
  test("200:responds with a list of restaurants in the specified location", () => {
    return request(app)
      .get("/api/restaurants/PL1 1AR")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(20);
        expect(Array.isArray(body)).toBe(true);
        body.forEach((restaurant) => {
          expect(restaurant).toEqual(
            expect.objectContaining({
              name: expect.any(String),
              addressLine1: expect.any(String),
              postCode: expect.any(String),
              ratingValue: expect.any(Number),
              geoLong: expect.any(Number),
              geoLat: expect.any(Number),
              type: expect.any(String),
            })
          );
        });
      });
  });

  test("400:responds with error when the location is of invalid type", () => {
    return request(app)
      .get("/api/restaurants/123")
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid location type" });
      });
  });

  test("404:responds with error when the location does not exist", () => {
    return request(app)
      .get("/api/restaurants/PL5 7WQ")
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Location does not exist" });
      });
  });
});
