import express from "express";
import bodyParser from "body-parser";
import monitorRouter from "./routes/monitorRouter";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(monitorRouter);

app.listen(PORT, () => {});
