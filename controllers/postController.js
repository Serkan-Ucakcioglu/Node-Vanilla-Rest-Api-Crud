const post = require("../models/postModel");

const getData = async (req, res) => {
  try {
    const allData = await post.findAllData();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(allData));
  } catch (error) {
    console.log(error, "error");
  }
};

const getPost = async (req, res, id) => {
  try {
    const posts = await post.findById(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(posts));
  } catch (error) {
    throw new Error("no");
  }
};

module.exports = {
  getData,
  getPost,
};
