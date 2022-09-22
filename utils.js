import axios from "axios"
import download from "image-downloader"
import sharp from "sharp"
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';
import { XMLParser } from "fast-xml-parser"
 
const BASE_URL = "https://webservice.reapit.net/jcb/rest/properties/"
const API_KEY = "?ApiKey=a84a420077ea1d871c3e772e4e5f396a"
const options = {
  ignoreAttributes: true,
  ignoreDeclaration: true
}
const parser = new XMLParser(options);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const fetchAllProperties = async (searchType) => {
  const URL = BASE_URL + "general" + API_KEY + "&" + `SearchType=${searchType}`
  const res = await axios.get(URL)
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

const downloadImage = async (URL, filepath) => {
  // const URL = BASE_URL + propertyID + "/thumbnail" + API_KEY + "&Width=500"
  const options = {
    url: URL,
    dest: filepath
  }
  return await download.image(options)  
}

const resizeImage = async (filepath, image, newImage) => {
  await sharp(`${filepath}/${image}`)
    .resize(498, 332)
    .toFile(`${filepath}/${newImage}`)
}

const deleteImage = async (filepath) => {
  fs.unlinkSync(filepath) 
}

export const createThumbnail = async (propertyID, imageURL) => {
  await downloadImage(imageURL,`${__dirname}/images/${propertyID}.jpg`)
  await resizeImage(`${__dirname}/images/`, `${propertyID}.jpg`, `${propertyID}-resized.jpg`)
  await deleteImage(`${__dirname}/images/${propertyID}.jpg`)
}