"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rambdax_1 = require("rambdax");
const constants_1 = require("./constants");
const getConsoleLog = rambdax_1.includes('console.log');
const getResultVariableLog = rambdax_1.either(rambdax_1.includes('const result ='), rambdax_1.includes('const result='));
function attachResultVariable(input) {
    const [firstLineRaw, ...otherLines] = input.split('\n');
    const firstLine = `const result = ${firstLineRaw}`;
    return otherLines.length === 0 ?
        firstLine :
        [firstLine, ...otherLines].join('\n');
}
exports.attachResultVariable = attachResultVariable;
function rambdaREPL(input) {
    const consoleLogFlag = getConsoleLog(input);
    const resultVariableFlag = getResultVariableLog(input);
    const flag = resultVariableFlag || consoleLogFlag;
    const code = rambdax_1.when(!flag, attachResultVariable)(input);
    const encoded = encodeURIComponent(code.trim());
    return `${constants_1.REPL_URL}?${encoded}`;
}
exports.rambdaREPL = rambdaREPL;
//# sourceMappingURL=index.js.map