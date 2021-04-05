# Chess Board Contest

## Table of Contents
 - [Description](#-description)
 - [Getting Started](#-getting-started)
 - [File Structure of App](#-file-structure-of-app)

## Description

This code test and compare performance of files that create chess boards.

Files are processed in random order and test 0, 1, 2, 3,20 sizes. On check performance process each file create the same `PERFORMANCENUMBEROFTEST` (10 by default) creating boards with sizes in the range of `PERFORMANCESIZE` (1000 by default) to 2*`PERFORMANCESIZE`.

Finally results are showed in a table.

![Results table](https://raw.githubusercontent.com/jbarog/chessBoardContest/master/src/assets/results-table.png?raw=true)

### Board generators
This board generators should include a function named "chessBoard" that returns a n-sized chees board.
Example:
`chessBoard(4)`
Should return a string like:
``` # #
# #
 # #
# #
```

## Getting started

To set up the project, you must follow one of 2 different paths:

### Test files
* Add testing files to 'files' directory
* Run `node test.js` from the project root.

### Customize
#### Change tests
Change TESTINGBOARDS variable on config.js file.
#### Change performance tests
Change PERFORMANCENUMBEROFTESTS, PERFORMANCEMINBOARDSIZE, PERFORMANCEMAXBOARDSIZE variables on config.js file.
#### Test one file
* Run `node test.js ./XXXX/XXXX.js` from the project root.





## File Structure of App

```
|
|-- files/
├── custom-log.js
├── config.js
├── test.js
```
