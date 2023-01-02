let data = require("../data/data.json");
let { writeDataToFile } = require("../utils/post");
const path = require("path");

const findAllData = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    const findPost = data.find((post) => post.id == id);
    resolve(findPost);
  });
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    const newPost = { id: Date.now(), ...post };
    data.push(newPost);
    writeDataToFile(path.join(__dirname, "..", "data", "data.json"), data);
    resolve(newPost);
  });
};

module.exports = {
  findAllData,
  findById,
  createPost,
};
