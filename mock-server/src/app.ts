import express from "express";
import bodyParser from "body-parser";
import monitorRouter from "./routes/monitorRouter";
import filtersRouter from "./routes/filtersRouter";
import * as path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(require("cors")("*"));

app.use(express.static(path.join(__dirname, "../static")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(monitorRouter);
app.use(filtersRouter);

app.listen(PORT, () => {});
