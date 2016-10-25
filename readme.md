# mention-feed
Here's my solution for the Mention coding challenge. Please the following instructions
to run the project locally. (Not deployed yet).

I started this project from a redux-starter
simple app that I previsouly used for different project. It makes use of Babel, Redux, Webpack
for the main part. It also contains a simple test suite that handles both e2e tests with Protractor and unit test with JSDOM.

Hope you'll enjoy it

## Install and Set up
### Prerequisite
I assume you already have a node.js environment set up locally. I personally use [NVM](https://github.com/creationix/nvm) to make sure I can switch easily
from one Node environment to another.

### Environment
#### Development
The application has been built under Node `v4.4` + NPM `v3.10.2`


1. Pull the repository.
2. Run `npm install`. This will install the development dependencies.
3. Run `npm run dev`. This will start a webpack server on [http://127.0.0.1:8888](http://127.0.0.1:8888) by default but you can override WEBPACK_SERVER_PORT.
Hot reload of all src files inside `/src` is activated.
4. Enjoy

#### Build (Optionnal)

> Ideally we would want to test our compiled files to make sure everything has beend correcly
> bundled up. In this particular case, we use a static Node server that serves files through
> one basic endpoint. However, if PORT is different than 8888, then the callback redirect_uri
> won't work as expected, so make sure you start the server on port 8888.
> (.env file is configured)

1. Run `npm run fakeserve`. This will build the production files and start a static server on previously specified port and address.
2. Browse the `http://IP:PORT` page
3. Make sure app is displayed nominally.

#### Testing
No tests were added has although test suite is ready for both e2e and unit/components testing. It's part of main improvement. (See the final section below)
Test suite tools :
[JSDOM](https://github.com/tmpvar/jsdom) / [Mocha](https://mochajs.org/) / [Chai](http://chaijs.com/)
JSDOM is a Javascript implementation of the DOM and has pretty much all HTML feature we need
to render HTML page on Node.js. (Except Canvas ...)

1. Run `npm run test`. This will simply executes unit and components tests. (Use `npm run test:watch` if you want to run tests while developing)
2. Run `npm run e2e`. This will end to end tests with [Protractor](http://www.protractortest.org/#/) (Works also for React based app)

#### Browser
The application has been optimized for Chrome Version 54. Also it has been tested for Firefox Version 49, but CORS addons make my browser crash unexpectedly. As a result, I don't ensure compatibility with Firefox.

launch Chrome with CORS disabled under OSX :

`open -n -a /Applications/Google\ Chrome.app --args --user-data-dir="/tmp/chrome_dev_session" --disable-web-security`

## Implementation & Technical choices

I choose the Oauth protocol to connect user to the simple app. IMHO, it made more sense to open the auth process to anyone who'd like to connect to his own Mention account information but mine. Also, I decided to store the account_id in the LocalStorage so we don't have to fetch the account_id every time we refresh the page.

## Improvements:
* Fix bug with React router during sign out
* Add tests
* Add mentions pagination by using links
* Improve GUI
* CI with Travis and Heroku
