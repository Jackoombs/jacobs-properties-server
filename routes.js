import { getSales, getLettings } from "./index.js";
import express from "express";
const router = express.Router()

router.get("/", (req, res) => {
  res.json({msg: "API working"})
})

router.get("/properties/:searchType", (req, res) => {
  const searchType = req.params.searchType
  let properties = []
  searchType === "sales" 
    ? properties = getSales()
    : properties = getLettings()
  res.json(properties)
})

router.get("/properties", (req, res) => {
  let allProperties = getSales()
  if (getLettings().length) {
    allProperties = getSales().concat(getLettings())
  }
  res.json(allProperties)
})

router.get("/property/:id", (req, res) => {
  const ID = req.params.id
  const allProperties = getSales().concat(getLettings)
  const property = allProperties.find((property) => property.ID === ID)
  res.json(property)
})

export default router