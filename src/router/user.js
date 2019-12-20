const { loginCheck } = require("../controller/user");
const { SuccessModule, ErrorModule } = require("../module/resModule");

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split("?")[0];

  if (method === "POST" && path === "/api/blog/login") {
    const { userName, passWord } = req.body;
    const result = loginCheck(userName, passWord);
    if (result) return new SuccessModule("登录成功");
    else return new ErrorModule("登录失败");
  }
};

module.exports = handleBlogRouter;
