
const healthTest = (req, res) => {
  res.status(200).send('Success')
}

module.exports = {
  healthTest
}