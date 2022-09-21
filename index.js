import express from "express";
import { fetchAllProperties, fetchProperty } from "./reapitFetch.js";
import _ from "lodash"

const app = express();
const port = process.ENV.PORT || 8080;
let salesProperties = []
let lettingsProperties = []

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

const getProperties = async (emptyArray, SearchType) => {
  const propertyIDs = await fetchAllProperties(SearchType)
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
        "Bathrooms",

      ])
    emptyArray.push(propertyData)
  }
  return emptyArray
}

await getProperties(salesProperties, "sales")
await getProperties(lettingsProperties, "lettings")
console.log(lettingsProperties)

setInterval(async () => {
  const newSalesProperties = await getProperties([], "sales")
  const newLettingsProperties = await getProperties([], "lettings")
  salesProperties = newSalesProperties
  lettingsProperties = newLettingsProperties
},[800000])

app.get("/", (req, res) => {
  res.json({msg: "API working"})
})

app.get("/properties/:searchType", (req, res) => {
  const searchType = req.params.searchType
  let properties = []
  searchType === "sales" 
    ? properties = salesProperties
    : properties = lettingsProperties
  res.json(properties)
})

app.get("/properties", (req, res) => {
  const allProperties = salesProperties.concat(lettingsProperties)
  res.json(allProperties)
})

app.get("/property/:id", (req, res) => {
  const ID = req.params.id
  const allProperties = salesProperties.concat(lettingsProperties)
  const property = allProperties.find(property => property.ID === ID)
  res.json(property)
})
