// let incrementScoreVar = document.getElementById("scoreIncrement()")

let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
// scoreEl.textContent = 0
// let currentScore = 00
let homeScoreVar = 00
let awayScoreVar = 00

function homeIncrementOne() {
    console.log("button clicked")
    homeScoreVar = homeScoreVar + 1
      homeScoreEl.textContent =  homeScoreVar
}

function homeIncrementTwo() {
    homeScoreVar = homeScoreVar + 2
    homeScoreEl.textContent = homeScoreVar
}

function homeIncrementThree() {
    homeScoreVar = homeScoreVar+3
    homeScoreEl.textContent = homeScoreVar
}

function awayIncrementOne() {
    console.log("button clicked")
    awayScoreVar = awayScoreVar + 1
    awayScoreEl.textContent =  awayScoreVar
}

function awayIncrementTwo() {
    awayScoreVar = awayScoreVar+2
    awayScoreEl.textContent = awayScoreVar    

}

function awayIncrementThree() {
    awayScoreVar =awayScoreVar+3
    awayScoreEl.textContent = awayScoreVar
}

function resetScores() {
    // let homeScoreEl = document.getElementById("home-score")
    homeScoreVar = 0
   
    awayScoreVar = 0
    awayScoreEl.textContent = 0
    homeScoreEl.textContent = 0    
}


