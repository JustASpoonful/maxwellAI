const chatContainer = document.getElementById('chat-container');
        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send-button');
        
        let aiResponses = [
            { messages: ["hello", "hi", "hey"], responses: ["Hi there!", "Hello!"] },
            { messages: ["time", "clock"], responses: ["It's currently {current time}.", "The time is {current time}."] },
            { messages: ["joke"], responses: ["Why couldn't the bicycle stand up by itself? It was two tired!", "I'm reading a book on anti-gravity. It's impossible to put down!"] },
            { messages: ["weather"], responses: ["I'm not sure about the weather, maybe you should check a weather app."] }
        ];

        function appendUserMessage(message) {
            const messageElem = document.createElement('div');
            messageElem.classList.add('chat-message', 'user-message');
            messageElem.textContent = message;
            chatContainer.appendChild(messageElem);

            dispatchAiResponse(message);
        }

        function appendAiMessage(message) {
            const messageElem = document.createElement('div');
            messageElem.classList.add('chat-message', 'ai-message');
            messageElem.textContent = message;
            chatContainer.appendChild(messageElem);
        }

        function getRandomResponse(responses) {
            const randomIdx = Math.floor(Math.random() * responses.length);
            return responses[randomIdx].replace("{current time}", new Date().toLocaleTimeString());
        }

        function dispatchAiResponse(userMessage) {
            let foundResponse = false;
            
            for (let i = 0; i < aiResponses.length; i++) {
                for (let j = 0; j < aiResponses[i].messages.length; j++) {
                    if (userMessage.toLowerCase().includes(aiResponses[i].messages[j])) {
                        appendAiMessage(getRandomResponse(aiResponses[i].responses));
                        foundResponse = true;
                        break;
                    }
                }
                if (foundResponse) {
                    break;
                }
            }

            if (!foundResponse) {
                appendAiMessage("I'm sorry, I didn't quite understand that. Could you please rephrase?");
            }

            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        sendButton.addEventListener('click', () => {
            const userMessage = messageInput.value;
            if (userMessage.trim() !== '') {
                appendUserMessage(userMessage);
                messageInput.value = '';
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        });

        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });
    
