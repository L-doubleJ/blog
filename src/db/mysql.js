const mysql = require("mysql");

// 创建连接对象
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ljj.123456",
  port: "3306",
  database: "blog"
});

// 连接
con.connect();

const sql = "select * from users";

const exec = sql => {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

// 结束连接
con.end();

module.exports = {
  exec
};
