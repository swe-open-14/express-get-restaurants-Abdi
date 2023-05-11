const request = require("supertest");
const Restaurant = require("../../models");
const app = require("../app")


describe("/restaurants tests", () => {
    // CREATE TESTS HERE
test("GET /restaurant", async () => {
    const response = await request(app).get("/restaurants");
    expect(response.status).toBe(200)
})

test("GET returns an array from /restaurants", async () => {
    const response = await request(app).get("/restaurants");
    expect(Array.isArray(response.body)).toBe(true)
})

test("GET returns correct number of restaurants from /restaurants", async () => {
    const response = await request(app).get("/restaurants");
    expect(response.body.length).toBe(3)
})

test("GET returns correct data from /restaurants", async () => {
    const response = await request(app).get("/restaurants");
    expect(response.body).toEqual([
        {
            "id": 1,
            "name": "AppleBees",
            "location": "Texas",
            "cuisine": "FastFood",
            "createdAt": "2023-05-10T13:21:05.585Z",
            "updatedAt": "2023-05-10T13:21:05.585Z"
        },
        {
            "id": 2,
            "name": "LittleSheep",
            "location": "Dallas",
            "cuisine": "Hotpot",
            "createdAt": "2023-05-10T13:21:05.585Z",
            "updatedAt": "2023-05-10T13:21:05.585Z"
        },
        {
            "id": 3,
            "name": "Spice Grill",
            "location": "Houston",
            "cuisine": "Indian",
            "createdAt": "2023-05-10T13:21:05.585Z",
            "updatedAt": "2023-05-10T13:21:05.585Z"
        }
    ])
})


test("GET /restaurant/1", async () => {
    const response = await request(app).get("/restaurants/1");
    expect(response.body).toEqual(
        {
            "id": 1,
            "name": "AppleBees",
            "location": "Texas",
            "cuisine": "FastFood",
            "createdAt": "2023-05-10T13:21:05.585Z",
            "updatedAt": "2023-05-10T13:21:05.585Z"
        })
})



// test("POST /users", async () => {
//      const newUser = { name: "Tom" };
//     const response = await request(app).post("/users").send({user: newUser });
//     expect(response.body.user).toContain("Tom")
// })


})