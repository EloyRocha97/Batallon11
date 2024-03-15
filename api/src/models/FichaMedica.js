const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FichaMedica",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      dni: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nameChildren: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ageChildren: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      etapa: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nameTutor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dniTutor: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      contact: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      gmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
