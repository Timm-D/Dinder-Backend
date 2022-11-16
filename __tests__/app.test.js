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
});

describe("GET/api/users", () => {
  test("200:responds with object containing an array of all users", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(4);
        expect(Array.isArray(body)).toBe(true);
        body.forEach((user) => {
          expect(user).toEqual(
            expect.objectContaining({
              username: expect.any(String),
              password: expect.any(String),
              postcode: expect.any(String),
              preferences: expect.any(String),
            })
          );
        });
      });
  });
});

describe("Error: Returns 404 if path not found", () => {
  test("404: returns not found when the url is incorrect", () => {
    return request(app)
      .get("/api/nothinghere")
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Not Found" });
      });
  });
});
