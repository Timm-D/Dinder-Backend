const request = require("supertest");
const app = require("../app");
const db = require("../database/connection");
const seedData = require("../database/test_data/index");
const {clearDataBase, closeDataBase} = require("../database/run-seed");
const {seedDataBase} = require("../database/seed")

const { restaurantData, usersData } = seedData;

// beforeEach(() => {
//   return seedDataBase(restaurantData, usersData);
// });

beforeAll(async () => await db())

beforeEach(async () => await seedDataBase(restaurantData,usersData))

afterEach(async () => await clearDataBase())

afterAll(async () => await closeDataBase())

describe("GET/api/restaurants", () => {
  test("200: responds with object containing an array of all restaurant objects", () => {
    return request(app)
      .get("/api/restaurants")
      .expect(200)
      .then(( {body} ) => {
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
