# Description

This is my implementation of game of Yahtzee. Game is played with 5 dices and there are 13 rounds. User can throw dices for three times in each round, but first throwing occurs every time when user starts game.

After each round user can write his or her result in any of available scoring categories enlisted bellow dices and score cooresponding number of points in case if values of the dices match description criteria. Total score is updated after every move.

Results are saved in localStorage and high score is displayed at the beging of each game, if there are any stored resultd in local storage.

## Initialization of the App
To start app enter npm start in terminal.

## Git ignore
If you clone app from GitHub please install node modules to be able to run app.

## Components
App is composed of five components

1. Dices (main logic of the game)
2. Game.js (wrapper component) 
3. Die.js (Component which enabled rendering of dices) 
4. ScoringCategory (displays game score and enables user to pick scoring category based on dices values) 
5. GameOver (displayed after the end of 13 rounds)


## Dependencies
semantic-ui is used in the app

## Try on SandBox
[https://codesandbox.io/s/nice-lamarr-vwq49t?file=/src/App.js](https://nvq09w.csb.app/)

