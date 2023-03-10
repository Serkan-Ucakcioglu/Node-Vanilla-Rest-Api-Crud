const http = require("http");
const post = require("./controllers/postController");

const server = http.createServer((req, res) => {
  if (req.url === "/all" && req.method === "GET") {
    post.getData(req, res);
  } else if (req.url.match(/\/all\/[0-9]+/) && req.method === "GET") {
    const id = req.url.split("/")[2];
    post.getPost(req, res, id);
  } else if (req.url === "/add" && req.method === "POST") {
    post.create(req, res);
  } else if (req.url.match(/\/all\/[0-9]+/) && req.method === "PUT") {
    const id = req.url.split("/")[2];
    post.update(req, res, id);
  } else if (req.url.match(/\/all\/[0-9]+/) && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    post.deletePosts(req, res, id);
  }
});

const PORT = 3500;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
