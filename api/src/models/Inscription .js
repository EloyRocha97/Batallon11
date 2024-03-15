const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Inscription",
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
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      etapa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nameTutor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dniTutor: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      contact: {
        type: DataTypes.BIGINT,
        allowNull: false,
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
