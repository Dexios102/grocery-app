import express from "express";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.SERVER_PORT;

var corsOptions = {
  origin: `http://localhost:${process.env.CLIENT_PORT}`,
  optionSuccessStatus: 200,
};

/* Production */
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/* Middlewares */
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* DB Connection */

/* Routes */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Server */
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
