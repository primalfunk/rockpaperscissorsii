$(document).ready( function() {
  var wins = 0
  var losses = 0
  var draws = 0
  arr = ['rock', 'paper', 'scissors']
  
  function runGame(sel) {
    var pNum = 0
    var cNum = 0
    //winner 0 = player, 1 = computer
    var winner = ""
    if(sel == 'rock') {
      pNum = 0
    }else if(sel == 'paper') {
      pNum = 1
    }else{
      pNum = 2
    }
    cNum = Math.floor(Math.random() * 3)
    //pick a winner
    if ((cNum == 0 && pNum == 1) || (cNum == 1 && pNum == 2) || (cNum == 2 && pNum == 0)) {
      winner = "Player"
      //player wins
      wins ++
    }else if (cNum == pNum) {
      winner = "No one"
      //draw
      draws ++
    }else{
      winner = "Computer"
      //computer wins
      losses ++
    }
    $('#winnerBanner').hide()
    $('#photoSpace').empty()
    var leftImage = document.createElement('img')
    var rightImage = document.createElement('img')
    leftImage.src = "img/" + sel + "_left.jpg"
    rightImage.src = "img/" + arr[cNum] + "_right.jpg"
    leftImage.width = 300
    rightImage.width = 300
    leftImage.height = 200
    rightImage.height = 200
    $('#photoSpace').append(leftImage)
    $('#photoSpace').append(rightImage)
    setTimeout(function() {
      $('#winnerBanner').html("Player: " + sel + ", Computer: " + arr[cNum] + ". <br />And the winner is: "+ winner + '!')
      $('#winnerBanner').show()
    },1000)
    $('#stats').html("Wins: " + wins + "<br />Losses: " + losses + "<br />Draws: " + draws)
    if ((wins + draws + losses) == 10) {
      animateImg()
    }
  }

  $('#rockButton').on('click', function() {
    runGame('rock')
  })
  $('#paperButton').on('click', function() {
    runGame('paper')
  })
  $('#scissorsButton').on('click', function() {
    runGame('scissors')
  })

  function animateImg() {
    var fallOutBoy = document.createElement('img')
    fallOutBoy.src = "img/fallout.jpg"
    $('#falloutdiv').append(fallOutBoy)
  }











});