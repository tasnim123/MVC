const { DataTypes, Model } = require("sequalize");
const sequelize = require("../config/sqlconnection");

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "post",
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);
module.exports = Post;
