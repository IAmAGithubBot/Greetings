const bot = {name: "IAmAGitHubBot", repo: "Greetings", files: "script.js, README.md"}

document.write(`Hello my name is ${bot.name}. I am just a bot. The files i use are: ${bot.files}. Well as you guessed my repo is ${bot.repo}.`)

const botTime = (function(bot){
  var message = bot + " probably the only bot in here..."
  return message
})

console.log(botTime(bot.name))