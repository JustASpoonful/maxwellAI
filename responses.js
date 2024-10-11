const predefinedResponses = [];

// Function to add new response triggers and replies
function addResponse(triggers, replies) {
    predefinedResponses.push({ triggers, replies });
}

// Adding predefined responses using the helper function
addResponse(["hello", "hi", "hey"], [
    "Hello! How can I assist you today?",
    "Hi there! What can I do for you?",
    "Greetings! How may I help you?"
]);

addResponse(["how are you", "how's it going", "how do you do"], [
    "I'm just a bot, but I'm doing great! How about you?",
    "I don't have feelings, but I'm here to help!",
    "I'm doing well, thanks for asking! What about you?"
]);

addResponse(["math", "math help", "math question"], [
    "I can help you with math questions. Just ask!",
    "Math is fun! What do you need help with?",
    "Ask me anything about math!"
]);

addResponse(["what is your name", "do you have a name", "who are you"], [
    "I'm your friendly chatbot!",
    "You can call me Chatbot!",
    "I'm just a bot without a name!"
]);

addResponse(["calculate", "solve", "math problem"], [
    "What would you like me to calculate?",
    "Please provide the equation you'd like me to solve.",
    "I'm ready to calculate! Just give me the numbers."
]);

addResponse(["addition", "add"], [
    "I can help with addition! Just provide the numbers.",
    "What numbers would you like to add?",
    "Let me know what you want to add!"
]);

addResponse(["subtraction", "subtract"], [
    "Ask me to subtract two numbers!",
    "What do you want to subtract?",
    "Let me know the numbers for subtraction!"
]);

addResponse(["multiplication", "multiply", "times"], [
    "Let me know what you'd like to multiply!",
    "What numbers should I multiply?",
    "I can help with multiplication. Just tell me!"
]);

addResponse(["division", "divide", "over"], [
    "What would you like to divide?",
    "Let me know the numbers for division!",
    "I can help with division. Just give me the numbers."
]);

addResponse(["thanks", "thank you", "appreciate it"], [
    "You're welcome!",
    "Glad to help!",
    "Anytime!"
]);
