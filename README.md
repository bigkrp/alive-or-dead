# Getting Started with Alive or Dead

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problem

This grid is subject to changes on what is called a tick. When a grid “ticks”, these are the rules to determine the next state of the grid:

* Any live cell with fewer than two live neighbours dies (underpopulation).
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies (overcrowding).
* Any dead cell with exactly three live neighbours becomes a live cell (reproduction).

Try to look at the first state of this grid and apply the rules above. The result will be the second grid, as shown below:


`00000           00000`  
`00000           00100`  
`01110 - tick -> 00100`  
`00000           00100`  
`00000           00000`  

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.