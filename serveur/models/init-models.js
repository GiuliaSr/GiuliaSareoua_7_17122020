var DataTypes = require("sequelize").DataTypes;
var _posts = require("./posts");
var _users = require("./users");

function initModels(sequelize) {
  var posts = _posts(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  posts.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(posts, { as: "posts", foreignKey: "id_user"});

  return {
    posts,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
