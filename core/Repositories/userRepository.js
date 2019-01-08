
const User = require('../Models/User').User

const createUser = (userInfo, callback) => {
  const newUser = new User(userInfo)

  newUser.save((err, user) => {
    return callback(err, {
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      weight: user.weight,
      height: user.height,
      id: user._id
    })
  })
}

const getAllUsers = callback => {
  User.find({}, (err, users) => {
    return callback(err, users.map(user => {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        gender: user.gender,
        weight: user.weight,
        height: user.height,
        id: user._id
      }
    }))
  })
}

const getUserById = (userId, callback) => {
  User.findById(userId, (err, user) => {
    return callback(err, {
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      weight: user.weight,
      height: user.height,
      id: user._id
    })
  })
}

const deleteUser = (userId, callback) => {
  User.deleteOne({ _id: userId }, err => {
    return callback(err, { message: 'Successfully deleted user'})
  })
}

const updateUser = (userId, body, callback) => {
  User.findOneAndUpdate({ _id: userId }, body, { new: true, runValidators: true }, (err, user) => {
    return callback(err, {
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      weight: user.weight,
      height: user.height,
      id: user._id
    })
  })
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser
}