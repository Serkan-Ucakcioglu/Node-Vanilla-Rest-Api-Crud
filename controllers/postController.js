const post = require("../models/postModel");
let { getPostData } = require("../utils/post");

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

const create = async (req, res) => {
  try {
    const bodys = await getPostData(req);

    const { name, title, body } = JSON.parse(bodys);

    const product = {
      name,
      title,
      body,
    };

    const newPost = await post.createPost(product);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newPost));
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getData,
  getPost,
  create,
};
