const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
//variaveis do scheema
  fullname: String,
  // uid: String,
  email: {
    type: String,
    lowercase: true
  },
  //cpf: Number,
  // adress: {
  //   street: String,
  //   number: Number
  // }
  // card: {
  //   numberc: Number,
  //   cvv: Number
  // },
  // password: String

}, { timestamps: true, static: false });

const UserSchema = mongoose.model('User', userSchema);

class User{
  //static getAll(){
  /**
   * Create a new User
   * @param {Object} transport - User Document Data
   * @returns {string} - New User Id
   */
   static create(transport) {
    return new Promise((resolve, reject) => {
      UserSchema.create(transport).then((result) => {
        resolve(result._id);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
//funções do scheema

module.exports = User;
