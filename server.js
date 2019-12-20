const querystring = require("querystring");
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");
var fs = require('fs');

//处理postData
const getPostData = req => {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }
    let postData = "";
    req.on("data", chunk => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
};

const serverHandle = (req, res) => {
  res.setHeader("Content-type", "application/json");

  //获取path
  const url = req.url;
  req.path = url.split("?")[0];

  // 解析query
  req.query = querystring.parse(url.split("?")[1]);

  //处理postData
  getPostData(req).then(postData => {
    req.body = postData;
    console.log(postData);
    //处理博客路由
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
      return res.end(JSON.stringify(blogData));
    }
    //处理user路由
    const userData = handleUserRouter(req, res);
    if (userData) {
      return res.end(JSON.stringify(userData));
    }

    //未命中返回404
    fs.readFile('./index.html',(err,data)=>{
      console.log();
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data.toString())
      res.end();
    })
    // res.writeHead(404, { "Content-type": "text/plain" });
    // res.write("404 Not \n");
    // res.end();  
   
  });

  //处理博客路由
  // const blogData = handleBlogRouter(req, res);
  // if (blogData) {
  //   return res.end(JSON.stringify(blogData));
  // }
  // //处理user路由
  // const userData = handleUserRouter(req, res);
  // if (userData) {
  //   return res.end(JSON.stringify(userData));
  // }

  // //未命中返回404
  // res.writeHead(404, { "Content-type": "text/plain" });
  // res.write("404 Not \n");
  // res.end();
};

module.exports = serverHandle;
