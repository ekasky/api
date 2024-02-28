const express = require("express");
const { server_port } = require("./utils/config");
const authRoutes = require("./routes/authRoutes");
const app = express();


app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(server_port, () => console.log(`Listening on port ${server_port}`));