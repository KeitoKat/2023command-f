import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const COHERE_API_KEY = process.env.REACT_APP_COHERE_API_KEY;

function Chatbot() {
    const [userInput, setUserInput] = useState('');
    const [botResponse, setBotResponse] = useState('');
    const [isChatbotOpen, setIsChatbotOpen] = useState(true);

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the user input to the Cohere API and get the bot response
        const requestBody = {
            "model": "command-xlarge-nightly",
            "stream": false,
            "query": userInput
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Cohere-Version': '2022-12-06',
                'accept': 'application/json',
                'content-type': 'application/json',
                'authorization': `Bearer ${COHERE_API_KEY}`
            },
            data: JSON.stringify(requestBody),
            url: 'https://api.cohere.ai/chat'
        };

        axios(requestOptions)
            .then(response => {
                console.log(response.data)
                setBotResponse(response.data.reply);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    return (
        <div>
            <button className="collapse" onClick={toggleChatbot}>
                {isChatbotOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
            </button>
            {isChatbotOpen && (
                <div className="chatbot-container">
                    <h1 className="chatbot-header">Chatbot</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="chatbot-input-container">
                            <input
                                type="text"
                                placeholder="Type your message here..."
                                value={userInput}
                                onChange={handleUserInput}
                            />
                        </div>
                        <button className="button" type="submit">
                            Send
                        </button>
                    </form>
                    <div className="chatbot-message-text">
                        <p>{botResponse}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
