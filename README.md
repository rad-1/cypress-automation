# Cypress Automation (macOS)
An automation framework written in JavaScript and Cypress that aims to follow basic PageObject principles.

## Requirements
* [Homebrew](https://brew.sh/)
* [Node.js and npm](https://nodejs.org/en/)
* [Cypress](https://www.cypress.io/)

## Installation
1. Install Homebrew with the following command:

    ~~~ sh
    $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    ~~~

2. Brew update to make sure Homebrew is up to date:

    ~~~ sh
    $ brew update
    ~~~
    
3. Brew doctor to make sure that your system is ready to brew:

    ~~~ sh
    $ brew doctor
    ~~~

4. Add Homebrew’s location to your $PATH in your .bash_profile or .zshrc file:

    ~~~ sh
    $ export PATH="/usr/local/bin:$PATH"
    ~~~

5. Brew install node to install Node.js (npm will be installed alongside node):

    ~~~ sh
    $ brew install node
    ~~~

7. Now that Node.js is installed, it's time to install Cypress (either locally or globally):
    
    To install Cypress locally:
    ~~~ sh
    $ cd /your/project/path
    $ npm install cypress --save-dev
    ~~~
    
    To install Cypress globally:
    ~~~ sh
    $ npm install cypress -g
    ~~~
    
    Note: Make sure to run `$ npm init` or have a `node_modules` folder or `package.json` file in the root of your project to ensure that Cypress is installed in the correct directory.
    
8. Cypress is now installed and can be opened by using one of the following commands:
    
    If you installed Cypress locally:
    ~~~ sh
    $ cd /your/project/path
    $ npx cypress open
    ~~~
    
    If you installed Cypress globally:
    ~~~ sh
    $ cd /your/project/path
    $ (npm bin)/cypress open
    ~~~

9. Installation complete!

## Running the Tests

1. Navigate to the root of your project and open Cypress:

    If you installed Cypress locally:
    ~~~ sh
    $ cd /your/project/path
    $ npx cypress open
    ~~~
    
    If you installed Cypress globally:
    ~~~ sh
    $ cd /your/project/path
    $ (npm bin)/cypress open
    ~~~
    
2. Test files are located at `$ cd /your/project/path/cypress/integration/` and Cypress makes it really easy to run these test files. Just click `GoogleSearchTest.spec.js` to execute all tests in this file, as seen in the image below:

<p align="center">
  <img src="https://github.com/rad-1/cypress-automation/blob/master/readme/images/readme-one.png">
</p>

3. Now sit back and watch as Cypress runs your tests. The test steps and results will be printed in the left column of the Cypress app, as seen in the image below:


<p align="center">
  <img src="https://github.com/rad-1/cypress-automation/blob/master/readme/images/readme-two.png">
</p>

4. That's it! Now go forth and test all the things!

## Support
Please send a message to [radicalrad1ance](https://github.com/radicalrad1ance/) if you have questions or suggestions.
