let homeScoreBtn = document.getElementById('home-score');
let guestScoreBtn = document.getElementById('guest-score');
let homeScore = 0;
let guestScore = 0;

function addOne() {
  homeScore += 1;
  homeScoreBtn.textContent = homeScore;
}

function addTwo() {
  homeScore += 2;
  homeScoreBtn.textContent = homeScore;
}

function addThree() {
  homeScore += 3;
  homeScoreBtn.textContent = homeScore;
}

function addOneGuest() {
  guestScore += 1;
  guestScoreBtn.textContent = guestScore;
}

function addTwoGuest() {
  guestScore += 2;
  guestScoreBtn.textContent = guestScore;
}

function addThreeGuest() {
  guestScore += 3;
  guestScoreBtn.textContent = guestScore;
}
