// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {

  $("#sign-up").on("submit", authEvents.onSignUp);

  $("#sign-in").on("submit", authEvents.onSignIn);

  $("#sign-out").on("submit", authEvents.onSignOut);

  $("#new-game").on("submit", authEvents.onNewGame);
  
  $("#resetGame").on("submit", authEvents.onNewGameReset);


  $(".play1").on("click", authEvents.onClick);
  $(".play2").on("click", authEvents.onClick);
  $(".play3").on("click", authEvents.onClick);
  $(".play4").on("click", authEvents.onClick);
  $(".play5").on("click", authEvents.onClick);
  $(".play6").on("click", authEvents.onClick);
  $(".play7").on("click", authEvents.onClick);
  $(".play8").on("click", authEvents.onClick);
  $(".play9").on("click", authEvents.onClick);
})
