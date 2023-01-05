import express from "express";
import { getProperties, deleteUnusedFolders } from "./utils.js";
import _ from "lodash";
import router from "./routes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use(
  cors({
    origin: [
      "https://jacobs-properties-client.vercel.app",
      "https://staging.jacobs.properties",
      "https://jacobs.properties",
      "https://jacobs-properties.vercel.app",
      "http://localhost:3000",
    ],
  })
);
app.use(express.json());

let salesProperties = await getProperties("lettings");
let lettingsProperties = await getProperties("sales");
export const getSales = () => salesProperties;
export const getLettings = () => lettingsProperties;

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
app.use("/", router);

const propertyIds = [...salesProperties, ...lettingsProperties].map(
  (property) => property.ID
);
deleteUnusedFolders(propertyIds);

setInterval(async () => {
  lettingsProperties = await getProperties("lettings");
  salesProperties = await getProperties("sales");

  const propertyIds = [
    salesProperties
      .map((property) => property.ID)
      .concat(lettingsProperties.map((property) => property.ID)),
  ];
  deleteUnusedFolders(propertyIds);
  console.log(propertyIds);
}, 800000);
