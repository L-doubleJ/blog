const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require("../controller/blog");
const { SuccessModule, ErrorModule } = require("../module/resModule");

const handleBlogRouter = (req, res) => {
  const method = req.method;

  const id = req.query.id;
  const path = req.path;

  if (method === "GET" && path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModule(listData);
  }

  if (method === "GET" && path === "/api/blog/detail") {
    const data = getDetail(id);
    return new SuccessModule(data);
  }

  if (method === "POST" && path === "/api/blog/new") {
    const data = newBlog(req.body);
    return new SuccessModule(data);
  }

  //更新博客
  if (method === "POST" && path === "/api/blog/update") {
    const result = updateBlog(id, req.body);

    if (result) {
      return new SuccessModule("更新博客成功");
    } else {
      return new ErrorModule("更新博客失败");
    }
  }
  //删除 博客
  if (method === "POST" && path === "/api/blog/del") {
    const result = delBlog(id);
    if (result) {
      return new SuccessModule("删除博客成功");
    } else {
      return new ErrorModule("删除博客失败");
    }
  }
};

module.exports = handleBlogRouter;
