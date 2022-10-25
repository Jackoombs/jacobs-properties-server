import axios from "axios"
import download from "image-downloader"
import sharp from "sharp"
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';
import { XMLParser } from "fast-xml-parser"
import _ from 'lodash'
 
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
  try {
    const res = await axios.get(URL)
    const xmlData = await res.data
    const jsonData = parser.parse(xmlData)
    const propertyIDs = jsonData.Response.Property
    return propertyIDs.map(object => object.ID)
  }
  catch (error) {
    console.log(error)
    return []
  }
}

export const fetchProperty = async (propertyID) => {
  const res = await axios.get(BASE_URL + propertyID + API_KEY)
  const xmlData = await res.data
  const jsonData = parser.parse(xmlData)
  return jsonData.Response.Property
}

const downloadImage = async (URL, filepath) => {
  const options = {
    url: URL,
    dest: filepath
  }
  return await download.image(options)  
}

const resizeImage = async (filepath, image, newImage) => {
  await sharp(`${filepath}/${image}`)
    .resize(750, 500)
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

export const getProperties = async (emptyArray, SearchType) => {
  const propertyIDs = await fetchAllProperties(SearchType)
  for (const ID of propertyIDs) {
    const propertyData = await fetchProperty(ID)
    const propertySubset = _.pick(propertyData, 
      [
        "ID",
        "Image",
        "Address1",
        "Address2",
        "InternalLettingStatus",
        "InternalSaleStatus",
        "PriceString", 
        "TotalBedrooms",
        "Bathrooms",

      ])
    emptyArray.push(propertySubset)
    await createThumbnail(propertyData.ID, propertyData.Image[0].Filepath)
  }
  return emptyArray
}

export const generateCode = (length) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
  const array = [...Array(length).keys()].map(e => Math.floor(Math.random() * letters.length ))
  const code = array.map(index => letters.slice(index, index+1))
  return code.join('')
}