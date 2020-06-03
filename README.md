# Cypress Automation (macOS)
An automation framework written in JavaScript and Cypress that aims to follow basic PageObject principles.

## Requirements
* [Homebrew](https://brew.sh/)
* [Node.js and npm](https://nodejs.org/en/)
* [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install)

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

## Running the Tests (coming soon...)

## Support
Please send a message to [radicalrad1ance](https://github.com/radicalrad1ance/) if you have questions or suggestions.
