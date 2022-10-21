import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { getProperties } from "./utils.js";
import _ from 'lodash'
import router from "./routes.js";

const app = express();
const port = process.env.PORT || 8080;
app.use(express.static('public')); 
app.use('/images', express.static('images'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let salesProperties = []
let lettingsProperties = []
export const getSales = () => salesProperties
export const getLettings = () => lettingsProperties

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
app.use("/", router)

await getProperties(lettingsProperties, "lettings")
await getProperties(salesProperties, "sales")

setInterval(async () => {
  const newSalesProperties = await getProperties([], "sales")
  const newLettingsProperties = await getProperties([], "lettings")
  salesProperties = newSalesProperties
  lettingsProperties = newLettingsProperties
}, 800000)


