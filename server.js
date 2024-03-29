const express = require("express");
const { server_port } = require("./utils/config");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const express_session = require("./middleware/express_session");
const cors = require("cors");
const corsOptions = require("./utils/cors_options");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express_session);

app.use("/api/auth", authRoutes);

app.listen(server_port, () => console.log(`Listening on port ${server_port}`));