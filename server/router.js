const routes = require("next-routes");

module.exports = routes()
  .add("about")
  .add("blog", "/blog/:slug")
  .add("user", "/user/:id", "profile")
  .add("region", "/region/:id")
  .add("resort", "/resort/:id")
  .add({ name: "beta", pattern: "/v3", page: "v3" });
