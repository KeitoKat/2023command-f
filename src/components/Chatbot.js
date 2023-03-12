import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Chatbot.css';


const COHERE_API_KEY = process.env.REACT_APP_COHERE_API_KEY;

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

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

  return (
    <div>
        
        <div class = "chatbot-container">
            <h1 class="chatbot-header">Chatbot</h1>
            <form onSubmit={handleSubmit}>
                <dev class="chatbot-input-container">
                    <input type="text" value={userInput} onChange={handleUserInput}/>
                </dev>
                <button class= "button" type="submit">Send</button>
            </form>
            <div class ="chatbot-message-text">
                <p>{botResponse}</p>
            </div>
        </div>
    </div>
  );
}

export default Chatbot;
