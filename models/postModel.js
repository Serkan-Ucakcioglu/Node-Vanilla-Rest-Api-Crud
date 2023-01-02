let data = require("../data/data.json");

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

module.exports = {
  findAllData,
  findById,
};
