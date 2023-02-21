'use strict';

const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.login = (email, password) => {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          email: email
        }
      }).then(user => {
        if (user) {
          bcrypt.compare(password, user.password_hash, (err, result) => {
            if (result) {
              resolve(user);
            } else {
              reject('Invalid password');
            }
          });
        } else {
          reject('Invalid email');
        }
      }).catch(err => {
        reject(err);
      });
    });
  }


  User.beforeCreate((user, options) => {

    return new Promise((resolve, reject) => {
      if (user.password) {
        bcrypt.hash(user.password, 10, (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            user.password_hash = hash;
            resolve();
          }
        });
      }
    })
  })
  return User;
};