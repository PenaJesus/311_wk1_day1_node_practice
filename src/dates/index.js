// import moment here; use this package in each function
const moment = require('moment')

const day = moment().format('dddd')

console.log('Today is', day)


const today = () => {
  return moment().format('dddd')
  // write code for dates.today

}

const calendar = () => {
  return moment().format('MMM DD, yyyy')
  // write code for dates.calendar

}

const currentTime = () => {
  return moment().format('hh:mm:ss A')
  // write code for dates.currentTime

}

module.exports = {
  today,
  calendar,
  currentTime
}