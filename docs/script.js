document.addEventListener('DOMContentLoaded', () => {
  const chatMessages = document.getElementById('chatMessages');
  const userInput = document.getElementById('userInput');
  const sendButton = document.getElementById('sendButton');
  const suggestionCards = document.querySelectorAll('.suggestion-card');

  function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'ai-message');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleUserMessage(message) {
    addMessage(message, true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage = "I am here to help you!";
      addMessage(aiMessage, false);
    }, 1000);
  }

  sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      handleUserMessage(userMessage);
      userInput.value = '';  // Clear input field
    }
  });

  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });

  suggestionCards.forEach(card => {
    card.addEventListener('click', () => {
      userInput.value = card.textContent;
      sendButton.click();
    });
  });
});
