// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $("#signUp").on("submit", authEvents.onSignUp)
  $("#signIn").on("submit", authEvents.onSignIn)
  $("#changePassword").on("submit", authEvents.onChangePassword)
  $("#signOut").on("click", authEvents.onSignOut)
})
