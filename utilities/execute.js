// backend/utilities/execute.js
export function executeCode(code, testCases) {
    let passed = 0;
    let total = testCases.length;
    let errorMessage = "";
    let results = []; // Array to store { passed, actual }

    try {
        let testScript = code + "\n\nlet __results = [];\n";

        testCases.forEach((tc) => {
            // Evaluate solve(input) and compare it loosely (==) to the expected output
            testScript += `
        try { 
          let val = solve(${tc.input});
          __results.push({ passed: val == ${tc.output}, actual: val }); 
        } catch(e) { 
          __results.push({ passed: false, actual: e.message }); 
        }\n`;
        });

        testScript += "__results;";
        results = eval(testScript);

        results.forEach((res) => {
            if (res.passed) passed++;
        });

    } catch (error) {
        errorMessage = error.message;
    }

    const status = (passed === total && total > 0) ? "passed" : "failed";
    return { passed, total, status, errorMessage, results };
}