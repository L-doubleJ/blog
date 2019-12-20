const loginCheck = (userName, password) => {
  if (userName === "ljj" && password === "123") {
    return true;
  }
  return false;
};

module.exports = { loginCheck };
