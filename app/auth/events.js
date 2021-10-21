'use strict'


// require the getFormFields function
const getFormFields = require('../../lib/get-form-fields')


// require api auth functions
const api = require('./api')

// require our ui functions
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)

  api
    .signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()


  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)


  // we pass in the formData because it will need the info like email, password etc
  // make a POST /sign-up request, pass it the email/password/confirmation
  api
    .signIn(formData)
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.signInSuccess)
    // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.signInFailure)
}


const onSignOut = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()


  // we pass in the formData because it will need the info like email, password etc
  // make a POST /sign-up request, pass it the email/password/confirmation
  api
    .signOut()
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.signOutSuccess)
    // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.signOutFailure)
}
// make a variable to check the winner of the game
// we will have to do this for every possible winning combo - so 8 total


const checkWinner = function () {
  // check if each possible win combo is there and for X or O
  if (
    $('.play1').text() === 'O' &&
    $('.play2').text() === 'O' &&
    $('.play3').text() === 'O'
  ) {
    console.log('123')
    return true
  } else if (
    $('.play1').text() === 'O' &&
    $('.play4').text() === 'O' &&
    $('.play7').text() === 'O'
  ) {
    console.log('147')
    return true
  } else if (
    $('.play2').text() === 'O' &&
    $('.play5').text() === 'O' &&
    $('.play8').text() === 'O'
  ) {
    console.log('258')
    return true
  } else if (
    $('.play3').text() === 'O' &&
    $('.play6').text() === 'O' &&
    $('.play9').text() === 'O'
  ) {
    console.log('369')
    return true
  } else if (
    $('.play4').text() === 'O' &&
    $('.play5').text() === 'O' &&
    $('.play6').text() === 'O'
  ) {
    console.log('456')
    return true
  } else if (
    $('.play7').text() === 'O' &&
    $('.play8').text() === 'O' &&
    $('.play9').text() === 'O'
  ) {
    console.log('789')
    return true
  } else if (
    $('.play1').text() === 'O' &&
    $('.play5').text() === 'O' &&
    $('.play9').text() === 'O'
  ) {
    console.log('159')
    return true
  } else if (
    $('.play3').text() === 'O' &&
    $('.play5').text() === 'O' &&
    $('.play7').text() === 'O'
  ) {
    console.log('357')
    return true
  } else if (
    $('.play1').text() === 'X' &&
    $('.play2').text() === 'X' &&
    $('.play3').text() === 'X'
  ) {
    console.log('123 X')
    return true
  } else if (
    $('.play1').text() === 'X' &&
    $('.play4').text() === 'X' &&
    $('.play7').text() === 'X'
  ) {
    console.log('147 X')
    return true
  } else if (
    $('.play2').text() === 'X' &&
    $('.play5').text() === 'X' &&
    $('.play8').text() === 'X'
  ) {
    console.log('258 X')
    return true
  } else if (
    $('.play3').text() === 'X' &&
    $('.play6').text() === 'X' &&
    $('.play9').text() === 'X'
  ) {
    console.log('369 X')
    return true
  } else if (
    $('.play4').text() === 'X' &&
    $('.play5').text() === 'X' &&
    $('.play6').text() === 'X'
  ) {
    console.log('456 X')
    return true
  } else if (
    $('.play7').text() === 'X' &&
    $('.play8').text() === 'X' &&
    $('.play9').text() === 'X'
  ) {
    console.log('789 X')
    return true
  } else if (
    $('.play1').text() === 'X' &&
    $('.play5').text() === 'X' &&
    $('.play9').text() === 'X'
  ) {
    console.log('159 X')
    return true
  } else if (
    $('.play3').text() === 'X' &&
    $('.play5').text() === 'X' &&
    $('.play7').text() === 'X'
  ) {
    console.log('357 X')
    return true
    // check tie game
  } else if (
    $('.play1').text() !== '' &&
    $('.play2').text() !== '' &&
    $('.play3').text() !== '' &&
    $('.play4').text() !== '' &&
    $('.play5').text() !== '' &&
    $('.play6').text() !== '' &&
    $('.play7').text() !== '' &&
    $('.play8').text() !== '' &&
    $('.play9').text() !== ''
  ) {
    console.log('tie')
    $('#winnerOne').text('TIE GAME')
    $('#winnerOne').show()
  } else {
    return false
  }
}

const onNewGame = function (event) {
  firstPlay = 'O'
  // prevent the default action of refreshing the page
  event.preventDefault()
  api
    .newGame()
    // start new game
    .then(ui.newGameStart)
  $('.play1').css('background-color', 'white')
  $('.play2').css('background-color', 'white')
  $('.play3').css('background-color', 'white')
  $('.play4').css('background-color', 'white')
  $('.play5').css('background-color', 'white')
  $('.play6').css('background-color', 'white')
  $('.play7').css('background-color', 'white')
  $('.play8').css('background-color', 'white')
  $('.play9').css('background-color', 'white')

  $('#winnerOne').hide()
}


// define a variable for the first move, but make it the opposite so the first move is X
let firstPlay = 'O'
const onClick = function (event) {
  const box = $(event.target)
  box.css('background', 'transparent')

  if ($(event.target).text() === '') {
    let win = checkWinner()
    if (win === false) {
      if (firstPlay === 'O') {
        $(event.target).text('X')
        firstPlay = 'X'
      } else {
        $(event.target).text('O')
        firstPlay = 'O'
      }
      $('#gameOver').show()
    }
    win = checkWinner()
    if (win === true) {
      if (firstPlay === 'O') {
        $('#winnerOne').text('O has won!')
      } else if (firstPlay === 'X') {
        $('#winnerOne').text('X has won!')
      }
      $('#gameOver').show()
      $('#winnerOne').show()
    }
  }
}


// reset the game board after a winner/tie game
const onNewGameReset = function (event) {
  firstPlay = 'O'
  event.preventDefault()
  $('.play1').css('background-color', 'white')
  $('.play2').css('background-color', 'white')
  $('.play3').css('background-color', 'white')
  $('.play4').css('background-color', 'white')
  $('.play5').css('background-color', 'white')
  $('.play6').css('background-color', 'white')
  $('.play7').css('background-color', 'white')
  $('.play8').css('background-color', 'white')
  $('.play9').css('background-color', 'white')

  $('#winnerOne').hide()
  $('#sign-out').show()

  api
    .newGame()
    // reset the game by starting a new one
    .then(ui.newGameStart)
}


module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onClick,
  checkWinner,
  onNewGame,
  onNewGameReset
}
