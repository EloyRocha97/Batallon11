const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Banda",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameExplo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ageExplo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dni: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      schoolTime: {
        type: DataTypes.ENUM("Mañana", "Tarde", "Diurno", "Doble turno"),
        allowNull: false,
      },
      institution: {
        type: DataTypes.ENUM("Batallon", "Escuadra"),
        allowNull: false,
      },
      etapa: {
        type: DataTypes.ENUM(
          "Baqueanos/Antorchas",
          "Rastreadores/Hogueras",
          "Pioneros/Fuegos"
        ),
        allowNull: false,
      },
      expMusical: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      instrument: {
        type: DataTypes.ENUM(
          "Clarinete",
          "Saxofón Tenor",
          "Saxofón Soprano",
          "Percusion",
          "Bastón de marcha"
        ),
        allowNull: false,
      },
      mobility: {
        type: DataTypes.ENUM("Auto/Moto", "Colectivo", "Caminando"),
        allowNull: false,
      },
      practice: {
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
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
