const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: "无敌J哥",
      content: "人称荣耀教科书的人",
      createTime: 1546610491112,
      author: "追哥"
    },
    {
      id: 2,
      title: "李狗",
      content: "追哥的小弟",
      createTime: 1546610491112,
      author: "李狗"
    }
  ];
};
const getDetail = id => {
  return {
    id: 1,
    title: "无敌J哥",
    content: "人称荣耀教科书的人",
    createTime: 1546610491112,
    author: "追哥"
  };
};

const newBlog = (blogData = {}) => {
  // blogData 是一个对象 title content 等等
  return {
    id: 3 // 新建成功后的新博客的id
  };
};

const updateBlog = (id, blogData = {}) => {
  //id是要更新的id
  return true;
};

const delBlog = id => {
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
