<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Phishing Email Classifier Chrome Extension</h3>

  <p align="center">
    A Simple Chrome Extension to classify emails as phishing or non-phishing
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A simple Chrome extension application built to communicate with a backend API.
Works by scraping the text from emails on GMail.    
The email is then sent to a backend API (Flask App), found [here](https://github.com/jayanwana/Phishing_Detector_Backend.git), that exposes a catboost
email classifier which then classifies the email as either a phishing or
non-phishing email after processing the text from the email.  
The result of the classification is then displayed to the user on the extension
popup.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This project was built using the following Libraries and frameworks

* [React.js](https://reactjs.org/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Sass](https://sass-lang.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The working extension is contained in the build folder of the repository.  
Load the extension on Chrome by following these steps after cloning the repository.

1. On your chrome browser, navigate to ``` chrome://extensions/ ```
2. Enable developer mode (Top right hand corner).
3. Select load unpacked (Top left hand).
4. Navigate to the repository folder and select the build folder.
5. The extension should be in extensions to right of the URL bar.
6. Click on the extension to reveal the pop up page.
7. The extension only works on an open Gmail email tab.

### Prerequisites

Node.js => 14
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Navigate to the repository directory
      ```sh
      cd Phishing_Detector
      ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the application using
   ```sh
   npm run start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

John Anwana - john2.anwana@live.uwe.ac.uk.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

I would like to thank [Lxieyang]((https://github.com/lxieyang/) for the boilerplate for this extension located [here](https://github.com/lxieyang/chrome-extension-boilerplate-react)
<p align="right">(<a href="#top">back to top</a>)</p>
