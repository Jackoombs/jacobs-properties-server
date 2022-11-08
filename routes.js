import { getSales, getLettings } from "./index.js";
import { sendUserMail } from "./mail.js";
import { generateCode } from "./utils.js";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "API working" });
});

router.get("/properties/:searchType", (req, res) => {
  const searchType = req.params.searchType;
  let properties = [];
  searchType === "sales"
    ? (properties = getSales())
    : (properties = getLettings());
  res.json(properties);
});

router.get("/properties", (req, res) => {
  let allProperties = getSales();
  if (getLettings().length) {
    allProperties = getSales().concat(getLettings());
  }
  res.json(allProperties);
});

router.get("/property/:id", (req, res) => {
  const ID = req.params.id;
  const allProperties = getSales().concat(getLettings);
  const property = allProperties.find((property) => property.ID === ID);
  res.json(property);
});

router.post("/send", async (req, res) => {
  const code = generateCode(8)
  const user = req.body.user
  const friend = req.body.friend
  try {
    await sendUserMail(user.name, user.email, code);
    await sendUserMail(friend.name, friend.email, code)
    res.status(200)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error })
  }
});
export default router;
