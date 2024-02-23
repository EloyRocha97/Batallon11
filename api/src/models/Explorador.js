const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Explorador",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameChildren: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ageChildren: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      etapa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
