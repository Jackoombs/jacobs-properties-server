import axios from "axios";
import download from "image-downloader";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { XMLParser } from "fast-xml-parser";
import _ from "lodash";

const BASE_URL = "https://webservice.reapit.net/jcb/rest/properties/";
const API_KEY = "?ApiKey=a84a420077ea1d871c3e772e4e5f396a";
const options = {
  ignoreAttributes: true,
  ignoreDeclaration: true,
};
const parser = new XMLParser(options);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const fetchAllProperties = async (searchType) => {
  const URL = BASE_URL + "general" + API_KEY + "&" + `SearchType=${searchType}`;
  try {
    const res = await axios.get(URL);
    const xmlData = await res.data;
    const jsonData = parser.parse(xmlData);
    const propertyIDs = jsonData.Response.Property;
    return propertyIDs.map((object) => object.ID);
  } catch (error) {
    return [];
  }
};

export const fetchProperty = async (propertyID) => {
  const res = await axios.get(BASE_URL + propertyID + API_KEY);
  const xmlData = await res.data;
  const jsonData = parser.parse(xmlData);
  return jsonData.Response.Property;
};

const downloadImage = async (URL, filepath) => {
  const options = {
    url: URL,
    dest: filepath,
  };
  return await download.image(options);
};

const resizeImage = async (filepath, image, newImage) => {
  await sharp(`${filepath}/${image}`)
    .resize(510, 340)
    .webp()
    .toFile(`${filepath}/${newImage}`);
};

const deleteImage = async (filepath) => {
  fs.unlinkSync(filepath);
};

export const deleteUnusedFolders = async (propertyIDs) => {
  const filepath = `${__dirname}/images/`;
  const subDirectories = await listSubDirectories(filepath);
  console.log(subDirectories, propertyIDs);
  const isDeleted = await Promise.all(
    subDirectories.map(async (subDir) => {
      if (!propertyIDs.includes(subDir)) {
        await deleteDirectory(filepath + subDir);
        return "deleted";
      } else return "kept";
    })
  );
  console.log(isDeleted);
};

const listSubDirectories = async (dir) => {
  try {
    const files = await fs.promises.readdir(dir);
    const subDirs = await Promise.all(
      files.map(async (file) => {
        const stat = await fs.promises.stat(path.join(dir, file));
        if (stat.isDirectory()) {
          return file;
        }
        return null;
      })
    );
    return subDirs.filter((dir) => dir !== null);
  } catch (err) {
    throw err;
  }
};

const deleteDirectory = async (directoryPath) => {
  fs.rm(directoryPath, { recursive: true, force: true }, (err) => {
    console.log(err);
  });
};

export const createThumbnail = async (propertyID, imageURL) => {
  let dir = `${__dirname}/images/${propertyID}`; //name of the directory/folder
  if (!fs.existsSync(dir)) {
    //check if folder already exists
    fs.mkdirSync(dir); //creating folder
  }
  await downloadImage(
    imageURL,
    `${__dirname}/images/${propertyID}/${propertyID}.jpg`
  );
  await resizeImage(
    `${__dirname}/images/${propertyID}/`,
    `${propertyID}.jpg`,
    `thumbnail.webp`
  );
  await deleteImage(`${__dirname}/images/${propertyID}/${propertyID}.jpg`);
};

export const getProperties = async (SearchType) => {
  const propertyIDs = await fetchAllProperties(SearchType);
  const data = await Promise.all(
    propertyIDs.map(async (id) => {
      const propertyData = await fetchProperty(id);
      const propertySubset = _.pick(propertyData, [
        "ID",
        "Image",
        "Description",
        "Address1",
        "Address2",
        "InternalLettingStatus",
        "InternalSaleStatus",
        "PriceString",
        "TotalBedrooms",
        "Bathrooms",
        "ReceptionRooms",
        "Floorplan",
        "EPC",
        "TimeAmended",
      ]);
      await createThumbnail(propertyData.ID, propertyData.Image[0].Filepath);
      for await (const image of propertyData.Image) {
        console.log(image);
      }
      return propertySubset;
    })
  );
  return data;
};

const generateCode = (length) => {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

  const array = [...Array(length).keys()];
  const randomIndexArray = array.map((e) =>
    Math.floor(Math.random() * letters.length)
  );

  const randomCode = randomIndexArray
    .map((index) => letters.slice(index, index + 1))
    .join("");
  return randomCode;
};

export const formattedCode = () => {
  return `${generateCode(5)}-${generateCode(5)}-${generateCode(5)}`;
};
