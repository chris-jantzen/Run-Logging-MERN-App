const mongoose = require('mongoose')
const userRepository = require('../Repositories/userRepository')
const UserSchema = require('../Models/User').UserSchema

const User = mongoose.model('User', UserSchema)

// Create User
const createUser = (req, res) => {
  let newUser = new User(req.body)

  userRepository.createUser(newUser, (err, result) => {
    err ? res.send(err) : res.json(result)
  })
}

// Get Users *** Look into adding security to routes like this one ***
const getAllUsers = (req, res) => {
  userRepository.getAllUsers((err, users) => {
    err ? res.send(err) : res.json(users)
  })
}

// Get User by ID
const getUserById = (req, res) => {
  userRepository.getUserById(req.params.userId, (err, user) => {
    err ? res.send(err) : res.json(user)
  })
}

// Delete User
const deleteUser = (req, res) => {
  userRepository.deleteUser(req.params.userId, (err, response) => {
    err ? res.send(err) : res.json(response)
  })
}

// Update User
const updateUser = (req, res) => {
  userRepository.updateUser(req.params.userId, req.body, (err, results) => {
    err ? res.send(err) : res.json(results)
  })
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser
}