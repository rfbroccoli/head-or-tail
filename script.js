document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display")

  const tossButton = document.querySelector(".toss")
  const headButton = document.querySelector(".head")
  const tailButton = document.querySelector(".tail")
  const countDisplay = document.querySelector(".count")
  
  const choice = document.querySelector(".choice")
  const score = document.querySelector(".score")
  const record = document.querySelector(".record")

  
  let headCount = 0
  let tailCount = 0

  let userScore = 0
  let computerScore = 0

  const recordArray = []
  
  const choices = ["head", "tail"]

  tossButton.addEventListener("click", toss)

  function toss() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]

    recordArray.push(randomChoice.toUpperCase())
    
    record.innerHTML = recordArray.join(" ")
    
    if (randomChoice === "head") {
      // headCount = headCount + 1
      // headCount += 1
      headCount++
    } else {
      tailCount++
    }
  
    // countDisplay.innerHTML = "Head: "+ headCount + " vs Tail: " + tailCount
    countDisplay.innerHTML = `Head: ${headCount} vs Tail: ${tailCount}`
    display.innerHTML = randomChoice.toUpperCase()
    // NOTE : display class reset
    display.className = "display"
     choice.innerHTML = ""

    return randomChoice
  }




  
  headButton.addEventListener("click", function () {
    play("head")
  })
  tailButton.addEventListener("click", function() {
    play("tail")
  })

  function play(userChoice) {
    const randomChoice = toss()

    choice.innerHTML = `You choce ${userChoice}`
    
    if (userChoice === randomChoice) {
      // win
      display.classList.add("green")
      userScore++
    } else {
      // lose
      display.classList.add("red")
      computerScore++
    }
    countDisplay.innerHTML = `Head: ${headCount} vs Tail: ${tailCount}`
    score.innerHTML = `You: ${userScore} vs computer: ${computerScore}`

  }
  
})