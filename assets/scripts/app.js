const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    previousResult: prevResult,
    number: operationNumber,
    result: newResult
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(type) {
  const enteredValue = getUserNumberInput();

  if (type !== 'ADD' && type !== 'SUBTRACT' && type !== 'MULTIPLY' && type !== 'DIVIDE' || !enteredValue) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;

  if (type === 'ADD') {
    currentResult += enteredValue;
    mathOperator = '+';
  } else if (type === 'SUBTRACT') {
    currentResult -= enteredValue;
    mathOperator = '-';
  } else if (type === 'MULTIPLY') {
    currentResult *= enteredValue;
    mathOperator = '*';
  } else if (type === 'DIVIDE') {
    currentResult /= enteredValue;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredValue);
  writeToLog(type, initialResult, enteredValue, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);