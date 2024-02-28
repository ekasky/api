const express = require("express");
const { server_port } = require("./utils/config");
const app = express();

app.use(express.json());


app.listen(server_port, () => console.log(`Listening on port ${server_port}`));