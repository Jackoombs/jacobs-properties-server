import axios from "axios"
import { XMLParser } from "fast-xml-parser"
 
const BASE_URL = "https://webservice.reapit.net/jcb/rest/properties/"
const API_KEY = "?ApiKey=a84a420077ea1d871c3e772e4e5f396a"
const options = {
  ignoreAttributes: true,
  ignoreDeclaration: true
}
const parser = new XMLParser(options);

export const fetchAllProperties = async () => {
  const res = await axios.get(BASE_URL + "general" + API_KEY)
  const xmlData = await res.data
  const jsonData = parser.parse(xmlData)
  const propertyIDs = jsonData.Response.Property
  return propertyIDs.map(object => object.ID)
}

export const fetchProperty = async (propertyID) => {
  const res = await axios.get(BASE_URL + propertyID + API_KEY)
  const xmlData = await res.data
  const jsonData = parser.parse(xmlData)
  return jsonData.Response.Property
}
 
