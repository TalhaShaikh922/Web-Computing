// =======================
//  Node.js Smart Calculator
//  Author: Shaikh Mohd Talha
//  Roll No: 23AI53 | Batch: 03
// =======================

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Color codes for nice terminal UI
  const colors = {
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    reset: "\x1b[0m"
  };
  
  function banner() {
    console.log(`${colors.cyan}=======================================${colors.reset}`);
    console.log(`${colors.yellow}        Smart Calculator (Node.js)      ${colors.reset}`);
    console.log(`${colors.cyan}=======================================${colors.reset}`);
    console.log("Available operations: +   -   *   /");
    console.log("---------------------------------------");
  }
  
  function calculate(num1, operator, num2) {
    switch (operator) {
      case "+": return num1 + num2;
      case "-": return num1 - num2;
      case "*": return num1 * num2;
      case "/": return num2 !== 0 ? num1 / num2 : "❌ Cannot divide by zero!";
      default: return "❌ Invalid operator!";
    }
  }
  
  function askInputs() {
    banner();
  
    readline.question("Enter first number: ", (a) => {
      readline.question("Enter operator (+, -, *, /): ", (op) => {
        readline.question("Enter second number: ", (b) => {
  
          const num1 = parseFloat(a);
          const num2 = parseFloat(b);
  
          if (isNaN(num1) || isNaN(num2)) {
            console.log(`${colors.red}❌ Invalid input! Please enter numbers only.${colors.reset}`);
            return askAgain();
          }
  
          const result = calculate(num1, op, num2);
          console.log(`\n${colors.green}✅ Result: ${result}${colors.reset}\n`);
          askAgain();
        });
      });
    });
  }
  
  function askAgain() {
    readline.question(`${colors.cyan}Do you want to perform another calculation? (y/n): ${colors.reset}`, (ans) => {
      if (ans.toLowerCase() === "y") {
        console.clear();
        askInputs();
      } else {
        console.log(`${colors.yellow}Thank you for using Smart Calculator!${colors.reset}`);
        readline.close();
      }
    });
  }
  
  // start
  askInputs();
  