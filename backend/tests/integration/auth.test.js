const { User } = require("../../models/user");
const { Item } = require("../../models/item");
const request = require("supertest");

let server;
describe("auth middleware", () => {
  beforeEach(() => {
    server = require("../../server");
  });
  afterEach(async () => {
    await Item.remove({});
    await server.close();
  });

  let token;

  const exec = () => {
    return request(server)
      .post("/api/items")
      .set("Cookie", [`x-auth-token=${token}`])
      .send({ name: "genre1" });
  };

  beforeEach(() => {
    const user = new User({
      password: "password",
      email: "ssss",
      name: "user1",
    });
    token = user.generateAuthToken();
  });

  it("should return 401 if no token is provided", async () => {
    token = "";

    const res = await exec();

    expect(res.status).toBe(401);
  });

  it("should return 400 if token is invalid", async () => {
    token = "a";

    const res = await exec();

    expect(res.status).toBe(400);
  });

  it("should return 200 if token is valid", async () => {
    const res = await exec();

    expect(res.status).toBe(200);
  });
});
