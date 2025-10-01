
// index.js

// 1️⃣ Define the current user
let currentUser = "Wangeci";

// 2️⃣ welcomeMessage
// Format: "Welcome to Flatbook, <username>!"
let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";

// 3️⃣ excitedWelcomeMessage
// Format: "WELCOME TO FLATBOOK, <USERNAME>!"
let excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser.toUpperCase() + "!";

// 4️⃣ shortGreeting
// Format: "Welcome, <first initial>!"
let shortGreeting = "Welcome, " + currentUser[0] + "!";


module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};
