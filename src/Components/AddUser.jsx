import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/AddUser.css'

const userRepository = require('../core/Repositories/userRepository')

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      weight: '',
      height: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
    this.handleWeightChange = this.handleWeightChange.bind(this)
    this.handleHeightChange = this.handleHeightChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    
    console.log(`
      ${this.state.firstName}
      ${this.state.lastName}
      ${this.state.age}
      ${this.state.gender}
      ${this.state.weight}
      ${this.state.height}
    `)
    let userInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      gender: this.state.gender,
      weight: this.state.weight,
      height: this.state.height
    }
    userRepository.createUser(userInfo, (err, result) => {
      err ? console.log(err) : console.log(result)
    })
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value })
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value })
  }

  handleAgeChange(e) {
    if(!e.target.value) {
      this.setState({ age: e.target.value})
    } else {
      this.setState({ age: parseInt(e.target.value) })
    }
  }

  handleGenderChange(e) {
    this.setState({ gender: e.target.value })
  }

  handleWeightChange(e) {
    if(!e.target.value) {
      this.setState({ weight: e.target.value })
    } else {
      this.setState({ weight: parseInt(e.target.value) })
    }
  }

  handleHeightChange(e) {
    this.setState({ height: e.target.value })
  }

  render() {
    return(
      <div className="AddUser">
        <form onSubmit={this.handleSubmit} className="inputForm">
          <div className="inputInfo">
            <h5>FirstName</h5>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
              placeholder="First Name" />
          </div>
          <div className="inputInfo">
            <h5>Last Name</h5>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
              placeholder="Last Name" />
          </div>
          <div className="inputInfo">
            <h5>Age</h5>
            <input
              type="text"
              value={this.state.age}
              onChange={this.handleAgeChange}
              placeholder="Age" />
          </div>
          <div className="inputInfo">
            <h5>Gender</h5>
            <input
              type="text"
              value={this.state.gender}
              onChange={this.handleGenderChange}
              placeholder="Gender" />
          </div>
          <div className="inputInfo">
            <h5>Weight</h5>
            <input
              type="text"
              value={this.state.weight}
              onChange={this.handleWeightChange}
              placeholder="Weight in pounds (optional)" />
          </div>
          <div className="inputInfo">
            <h5>Height</h5>
            <input
              type="text"
              value={this.state.height}
              onChange={this.handleHeightChange}
              placeholder="Height in FT'IN'' format (optional)" />
          </div>
          <input type="submit" value="Submit" style={{margin: 'auto', 'marginTop': 2}}></input>
        </form>
      </div>
    )
  }
}

AddUser.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
  weight: PropTypes.number,
  height: PropTypes.string
}

export default AddUser