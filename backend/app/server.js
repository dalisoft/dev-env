const nanoexpress = require("nanoexpress");

const app = nanoexpress();

app.get("/", (req, res) => res.send({ type: "get", page: "index" }));
app.get("/route", (req, res) => res.send({ type: "get", page: "route" }));

app.post("/post", (req, res) => res.send({ type: "post", page: "post" }));

app.listen(process.env.PORT || 3000);
