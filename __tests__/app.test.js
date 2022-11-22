const request = require("supertest");
const app = require("../app");
const db = require("../database/connection");
const seedData = require("../database/test_data/index");
const { seedDataBase, closeDataBase } = require("../database/seed");

const { restaurantData, usersData, preferencesData } = seedData;
beforeAll(async () => await db());
beforeEach(
  async () => await seedDataBase(restaurantData, usersData, preferencesData)
);

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

describe("GET/api/preferences", () => {
  test("200: responds with an object containing all preferences in an array", () => {
    return request(app)
      .get("/api/preferences")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(11);
        expect(Array.isArray(body)).toBe(true);
        body.forEach((preference) => {
          expect(preference).toEqual(
            expect.objectContaining({
              preference: expect.any(String),
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
              preferences: expect.any(Array),
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

describe("GET/api/restaurants/:location", () => {
  test("200:responds with a list of restaurants in the specified location", () => {
    return request(app)
      .get("/api/restaurants/PL1 1AR")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(29);
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
  test("200: returns with a list of restaurants by preference", () => {
    return request(app)
      .get(
        "/api/restaurants/PL1 1AR?preferences=Italian&preferences=English&preferences=Indian"
      )
      .expect(200)
      .then(({ body }) => {
        expect(Array.isArray(body)).toBe(true),
          body.forEach((Element) => {
            expect.objectContaining({
              name: expect.any(String),
              addressLine1: expect.any(String),
              postCode: expect.any(String),
              ratingValue: expect.any(Number),
              geoLong: expect.any(Number),
              geoLat: expect.any(Number),
              type: expect.any(String),
            });
            expect(["Italian", "English", "Indian"]).toContain(Element.type);
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

describe("GET/api/restaurants/:location/:name", () => {
  test("200: returns a single restaurant in a selected location", () => {
    return request(app)
      .get("/api/restaurants/PL1 1AR/50 Degrees North")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(1);
        expect(Array.isArray(body)).toBe(true);
        expect.objectContaining([
          {
            name: "50 Degrees North",
            addressLine1: "Copthorne Hotel, Armada Way, Plymouth",
            postCode: "PL1 1AR",
            ratingValue: 4,
            geoLong: -4.1430832636010955,
            geoLat: 50.3745463,
            type: "French",
          },
        ]);
      });
  });
  test("400:responds with error when the location is of invalid type", () => {
    return request(app)
      .get("/api/restaurants/123/50 Degrees North")
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid location type" });
      });
  });

  test("404:responds with error when the location does not exist", () => {
    return request(app)
      .get("/api/restaurants/PL5 7WQ/50 Degrees North")
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Nothing found" });
      });
  });
  test("404:responds with error when the name does not exist", () => {
    return request(app)
      .get("/api/restaurants/PL1 1AR/0 Degrees North")
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Nothing found" });
      });
  });
});

describe("GET /api/users/:username", () => {
  test("200: returns array with specified users information", () => {
    return request(app)
      .get("/api/users/Sol")
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(1);
        expect(Array.isArray(body)).toBe(true);
        expect.objectContaining([
          {
            username: "Sol",
            password: "MyPassword00",
            postcode: "M5 6TN",
            preferences: ["Italian"],
          },
        ]);
      });
  });
  test("400:responds with error when the username contains invalid characters", () => {
    return request(app)
      .get("/api/users/b!lly*")
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid username" });
      });
  });
  test("404:responds with error when the user does not exist", () => {
    return request(app)
      .get("/api/users/notAUser")
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ msg: "User not found" });
      });
  });
});

describe("PATCH /api/users/:username", () => {
  test("200: returns updated user information, editing preferences", () => {
    return request(app)
      .patch("/api/users/Sol")
      .send({
        preferences: ["English"],
        password: "MyPassword00",
        postcode: "M7 9EQ",
      })
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(1);
        expect(Array.isArray(body)).toBe(true);
        expect(body[0].postcode).toEqual("M7 9EQ");
        expect(body[0].password).toEqual("MyPassword00");
        expect(body[0].preferences).toEqual(["English"]);
      });
  });
  test("200: returns updated user information, editing other details", () => {
    return request(app)
      .patch("/api/users/Sol")
      .send({
        preferences: ["English"],
        password: "MyPassword01",
        postcode: "M7 9EQ",
      })
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveLength(1);
        expect(Array.isArray(body)).toBe(true);
        expect(body[0].postcode).toEqual("M7 9EQ");
        expect(body[0].password).toEqual("MyPassword01");
        expect(body[0].preferences).toEqual(["English"]);
      });
  });
  test("400:responds with error when the username contains invalid characters", () => {
    return request(app)
      .patch("/api/users/b!lly*")
      .send({
        preferences: ["English"],
        password: "MyPassword01",
        postcode: "M7 9EQ",
      })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid username" });
      });
  });
  test("400:responds with error when preferences is not an array", () => {
    return request(app)
      .patch("/api/users/Sol")
      .send({
        preferences: "English",
        password: "MyPassword01",
        postcode: "M7 9EQ",
      })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid body" });
      });
  });
  test("400: responds with error when password is not a string", () => {
    return request(app)
      .patch("/api/users/Sol")
      .send({ preferences: ["English"], password: 123, postcode: "M7 9EQ" })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid body" });
      });
  });
  test("400: responds with error when postcode is not a string", () => {
    return request(app)
      .patch("/api/users/Sol")
      .send({
        preferences: ["English"],
        password: "MyPassword01",
        postcode: 123,
      })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid body" });
      });
  });
  test("400: responds with error when parts of the body are missing", () => {
    return request(app)
      .patch("/api/users/Sol")
      .send({ preferences: ["English"], password: "MyPassword01" })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid key" });
      });
  });
  test("400: responds with error when request key is incorrect", () => {
    return request(app)
      .patch("/api/users/Sol")
      .send({
        preferences: ["English"],
        passw0rd: "MyPassword01",
        postcode: "M7 9EQ",
      })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid key" });
      });
  });
  test("404: responds with error when the user does not exist", () => {
    return request(app)
      .patch("/api/users/notAUser")
      .send({
        preferences: ["English"],
        password: "MyPassword01",
        postcode: "M7 9EQ",
      })
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ msg: "User not found" });
      });
  });
});

describe("DELETE /api/users/:username", () => {
  test("204: deletes user profile", () => {
    return request(app).delete("/api/users/Sol").expect(204);
  });
  test("400: responds with error when the username contains invalid characters", () => {
    return request(app)
      .delete("/api/users/b!lly*")
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid username" });
      });
  });
  test("404: responds with error when the username does not exist", () => {
    return request(app)
      .delete("/api/users/Sal")
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual({ msg: "User not found" });
      });
  });
});

describe("POST/api/users", () => {
  test("201:adds a user info", () => {
    return request(app)
      .post("/api/users")
      .expect(201)
      .send({ username: "Hamza", password: "MyPassword01", postcode: "M7 9EQ" })
      .then(({ body }) => {
        expect(body.postcode).toEqual("M7 9EQ");
        expect(body.username).toEqual("Hamza");
        expect(body).toEqual(
          expect.objectContaining({
            username: expect.any(String),
            postcode: expect.any(String),
            password: expect.any(String),
          })
        );
      });
  });
  test("400:responds with error when the username contains invalid characters", () => {
    return request(app)
      .post("/api/users")
      .send({
        username: "billy*",
        password: "MyPassword01",
        postcode: "M7 9EQ",
      })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid username" });
      });
  });
  test("400: responds with error when password is not a string", () => {
    return request(app)
      .post("/api/users")
      .send({ username: "Hamza", password: 123, postcode: "M7 9EQ" })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid body" });
      });
  });
  test("400: responds with error when postcode is not a string", () => {
    return request(app)
      .post("/api/users")
      .send({ username: "Hamza", password: "MyPassword01", postcode: 123 })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid body" });
      });
  });

  test("400: responds with error when parts of the body are missing", () => {
    return request(app)
      .post("/api/users")
      .send({ username: "Hamza", password: "MyPassword01" })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid key" });
      });
  });
  test("400: responds with error when request key is incorrect", () => {
    return request(app)
      .post("/api/users")
      .send({
        username: "Hamza",
        passw0rd: "MyPassword01",
        postcode: "M7 9EQ",
      })
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ msg: "Invalid key" });
      });
  });
});
