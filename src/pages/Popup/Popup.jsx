// Import Libraries
import React, { useState } from 'react';
import './Popup.css';

// Create the Popup component
const Popup = () => {
  // create stateful variables to store the results of the classification
  const [ response, _setResponse ] = useState({})

  // Callback function that stores the result in the stateful variable
  const setResponse = (res) => {
    _setResponse(res)
  }

  // This function is called whenever the button in the popup is clicked on
  // Sends a message to the content page which has access to the email page DOM
  // to scrape the email text and send to the back end for classification
  // Also, it sends the callback function to the backend to collect the result
  const scrapeMail = () => {
    chrome.tabs.query({active:true, currentWindow: true}, (tabs) => {
      const activeTab = tabs[0]
      chrome.tabs.sendMessage(activeTab.id, {command: "scrapeMail"}, setResponse)
    })
  }
  // This is what gets rendered on the popup tab
  return (
    <div className="App">
      <header className="App-header">
        <p>Click here to classify the email as Phishing or non-phishing</p>
        <button onClick={scrapeMail}>Classify Mail!</button>
        {response?.error && (
          <p> An error occurred</p>
        )}
        {response?.result && (
          <>
          <h4>Result</h4>
          <p> The email: "{response?.email.slice(0,50)}..." was classified as</p>
          <p>{response.result === '0' ? 'A Non-Phishing email' : 'A Phishing email'}</p>
          </>
        )}
      </header>
    </div>
  );
};

export default Popup;
