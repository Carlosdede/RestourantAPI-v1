import express from "express";
import { routes } from "./routes";
import { errroHandling } from "./middlewars/errorHandling";

const PORT: number = 3333;
const app = express();
app.use(express.json());
app.use(routes);
app.use(errroHandling);
app.listen(PORT, () => {
  console.log(`Server is Running on port: ${PORT}!`);
});
