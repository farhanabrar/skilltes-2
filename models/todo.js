'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todo.init({
    rencana: DataTypes.STRING(30),
    waktu_mulai: DataTypes.DATEONLY,
    Waktu_berakhir: DataTypes.DATEONLY,
    berakhir:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todo',
    tableName: 'todolist',
  });
  return todo;
};