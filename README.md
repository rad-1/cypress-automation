# Cypress Automation (macOS)
An automation framework written in JavaScript and Cypress that aims to follow basic PageObject principles.

## Requirements
* [Homebrew](https://brew.sh/)
* [Node.js and npm](https://nodejs.org/en/)
* [Cypress](https://www.cypress.io/)

## Installation
1. Install Homebrew with the following command:

    ~~~ sh
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
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

5. Brew install node (npm will be installed alongside node):

    ~~~ sh
    $ brew install node
    ~~~

7. Now that Node.js is installed, it's time to install Cypress (either locally or globally):
    
    Local Installation:
    ~~~ sh
    $ cd /your/project/path
    $ npm install cypress --save-dev
    ~~~
    
    Global Installation:
    ~~~ sh
    $ npm install cypress -g
    ~~~
    
    Sidenote: Make sure to run npm init or have a node_modules folder or package.json file in the root of your project to ensure Cypress is installed in the correct directory.
    
8. Cypress is now installed and can be opened by using one of the following commands:
    
    if Local Cypress Installation:
    ~~~ sh
    $ cd /your/project/path
    $ npx cypress open
    ~~~
    
    if Global Cypress Installation:
    ~~~ sh
    $ cd /your/project/path
    $ (npm bin)/cypress open
    ~~~

## Running the Tests

1. Navigate to the root of your project and open Cypress:

    if Local Cypress Installation:
    ~~~ sh
    $ cd /your/project/path
    $ npx cypress open
    ~~~
    
    if Global Cypress Installation:
    ~~~ sh
    $ cd /your/project/path
    $ (npm bin)/cypress open
    ~~~
    
2. Test files are located at `$ cd /your/project/path/cypress/integration/` and Cypress makes it really easy to run these test files. Just click the GoogleSearchTest.spec.js file to run this test, as seen in the image below:

<p align="center">
  <img src="https://github.com/rad-1/cypress-automation/blob/master/readme/images/readme-one.png">
</p>

3. Now sit back and watch as Cypress runs your test file. The test steps and results will be printed in the left column of the Cypress app, as seen in the image below:


<p align="center">
  <img src="https://github.com/rad-1/cypress-automation/blob/master/readme/images/readme-two.png">
</p>

4. That's it! Now go forth and write more tests!

## Support
Please send a message to [radicalrad1ance](https://github.com/radicalrad1ance/) if you have questions or suggestions.
