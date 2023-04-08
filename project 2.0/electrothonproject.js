// Selecting elements from the DOM
const chatWindow = document.querySelector('.chat-window');
const chatBody = chatWindow.querySelector('.chat-body');
const chatFooter = chatWindow.querySelector('.chat-footer');
const inputField = chatFooter.querySelector('input');
const sendButton = chatFooter.querySelector('button');

// Bot's response messages
const botMessages = [
  "Welcome to our Wonderlust adventure chatbot! How can I assist you today?",
 "Tell me your name?",
 "Give me your current location",
 "Tell me your budget and destination",
 "Are you planing for solo or group trip",
"Thank you for choosing our travel website!"];

// Function to generate a random bot message from the array
function generateBotMessage(i) {
 

  return botMessages[i];
}
let count=0;

// Function to add a message to the chat body
function addMessageToChat(message, sender) {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message', `${sender}-message`);
  chatMessage.innerHTML = `<p>${message}</p>`;
  chatBody.appendChild(chatMessage);
  chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the bottom of the chat body
}

// Event listener for sending messages
sendButton.addEventListener('click', function() {
  const userMessage = inputField.value.trim();
  if (userMessage) {
    addMessageToChat(userMessage, 'user');
    inputField.value = '';
    const botMessage = generateBotMessage(count);
    count++;
    
    addMessageToChat(botMessage, 'bot');
  }
});

// Event listener for pressing Enter key to send messages
inputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendButton.click();
  }
});
const viewToursButton = document.querySelector('button');
viewToursButton.addEventListener('click', () => {
  // code to execute when the button is clicked
  console.log('The "View our tours" button was clicked!');
});
