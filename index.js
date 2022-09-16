import express from "express";
import { fetchAllProperties, fetchProperty } from "./reapitFetch.js";
import _ from "lodash"

const app = express();
const port = 8080;
const properties = []

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

const getProperties = async () => {
  const propertyIDs = await fetchAllProperties()
  for (const ID of propertyIDs) {
    const propertyData = await fetchProperty(ID)
    const propertySubset = _.pick(propertyData, 
      [
        "ID",
        "Image",
        "Address1",
        "Address2",
        "Status",
        "PriceString", 
        "TotalBedrooms",
        "TotalBathrooms",

      ])
    console.log(propertyData)
    properties.push(propertySubset)
  }
}

await getProperties()
console.log(properties[0].SalePrice)
setInterval(async () => {
  console.log(await getProperties())
},[100000])

app.get("/", (req, res) => {
  res.json({msg: "API working"})
})

app.get("/properties", (req, res) => {
  res.json(properties)
})

app.get("/property/:id", (req, res) => {
  const ID = req.params.id
  const property = properties.find(property => property.ID === ID)
  res.json(property)
})
