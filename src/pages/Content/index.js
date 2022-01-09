// Development backend URL
// const backendURL = 'http://localhost:5000/classify'

// Production backend URL
const backendURL = 'https://phishing-detector-backend-7sgvu.ondigitalocean.app/classify'

// A chrome API message listener is used to listen to messages
// from the extension pop up, confirms the
// command is scrapeMail and executes the functions
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if(msg.command === 'scrapeMail'){
    try {
      let mail = scrapeMail()
      sendForClassification(mail, sendResponse)
    } catch (e) {
      sendResponse({error: 'An error occurred'})
      return false
    }
    // Return true to keep callback function valid so async request can be made
    return true
  }
})

// Function to collect the text from the email
const scrapeMail = () => {
  const email = document.querySelector(".a3s").innerText
  if (email && typeof(email) === 'string'){
    return JSON.stringify({text: email})
  }
  console.log('Email not found');
  throw new Error('Email not found')
}

// sends the email to the backend for classification
const sendForClassification = (body, sendResponse) => {
  // params: body (object) a json object containing the email
  // sendResponse (function) callback function to recieve the response
  // Compose request header
  const headers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body
  }
  // Send request to backend
  fetch(backendURL, headers)
  .then(response => response.json())
  // Pass the response to the callback function
  .then(data => {
    sendResponse(data)
  })
  .catch( error => {
    console.error(error)
    sendResponse({error: 'A connection error occured'})
  })
}

// Add real time functionality to classify the email as soon as it it opened
window.addEventListener('hashchange', () => {
  // Check url to see if email page is open before running script
  if (location.href.search(/all\/|inbox\/|imp\/|starred\/|snoozed\/|social\/|updates\/|forums\/|promotions\/|Trash\/|spam\//) > 0) {
    let mail = scrapeMail()
    sendForClassification(mail, (res) => {
      // Alert the user of the classfication results
      if (res?.error) {
        alert(res.error)
      }
      else if (res?.result) {
        res.result === '0' ? alert('This email has been classified as a non-phishing email') : alert('This email has been classified as a phishing email')
      }
    })
  }
})
