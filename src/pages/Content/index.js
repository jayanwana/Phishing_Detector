// Development backend URL
// const backendURL = 'http://localhost:5000/classify'

// Production backend URL
const backendURL = 'https://phishing-detector-backend-7sgvu.ondigitalocean.app/classify'

// A chrome message listener to listen to messages from the pop, confirms the
// command is scrapeMail and executes the functions
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if(msg.command === 'scrapeMail'){
    let mail = scrapeMail()
    sendForClassification(mail, sendResponse)
    return true
  }
})

// Function to collect the text from the email
const scrapeMail = () => {
  const email = document.querySelector(".a3s").innerText
  return JSON.stringify({text: email})
}

// sends the email to the backend for classification
const sendForClassification = (body, sendResponse) => {
  const headers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body
  }
  fetch(backendURL, headers)
  .then(response => response.json())
  .then(data => {
    sendResponse(data)
  })
  .catch(console.error)
}
