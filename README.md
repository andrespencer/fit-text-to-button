## Overview

"Fit text to button" is a React-based solution to make a variable length text fit inside a container with
flexible width but fixed height. The app will always try to have the largest font size possible.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Overview of the app](https://i.ibb.co/dpQwHFh/fittexttobutton.png)

## Setup

1. Make sure you have modern versions of `npm` and `yarn`
2. Download the repo and cd into it
3. Run `npm install`
4. Run `npm start`
5. Open http://localhost:3000 to view it in the browser.

## Suggestions of improvement

- Find the average width of a character and prevent the box from being resized to a smaller width than averageCharacterWidth * textValue.length
- Upon a change in the text or width of the output box, use the average character width to guess a probable maximum font-size and then fine tune from that value.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
