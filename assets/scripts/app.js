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

function add() {
  const enteredValue = getUserNumberInput();
  const initialResult = currentResult;

  currentResult += enteredValue;
  createAndWriteOutput('+', initialResult, enteredValue);
  writeToLog('ADD', initialResult, enteredValue, currentResult);
}

function subtract() {
  const enteredValue = getUserNumberInput();
  const initialResult = currentResult;

  currentResult -= enteredValue;
  createAndWriteOutput('-', initialResult, enteredValue);
  writeToLog('SUBTRACT', initialResult, enteredValue, currentResult);
}

function multiply() {
  const enteredValue = getUserNumberInput();
  const initialResult = currentResult;

  currentResult *= enteredValue;
  createAndWriteOutput('*', initialResult, enteredValue);
  writeToLog('MULTIPLY', initialResult, enteredValue, currentResult);
}

function divide() {
  const enteredValue = getUserNumberInput();
  const initialResult = currentResult;

  currentResult /= enteredValue;
  createAndWriteOutput('/', initialResult, enteredValue);
  writeToLog('DIVIDE', initialResult, enteredValue, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);