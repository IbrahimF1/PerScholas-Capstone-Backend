export function executeCode(code, testCases) {
    let passed = 0;
    let total = testCases.length;
    let errorMessage = "";

    try {
        // Append a testing block to the user's code.
        // Based on our seed data, we expect a function named 'solve'
        let testScript = code + "\n\nlet __results = [];\n";

        testCases.forEach((tc) => {
            // Evaluate solve(input) and compare it loosely (==) to the expected output
            testScript += `
        try { 
          __results.push(solve(${tc.input}) == ${tc.output}); 
        } catch(e) { 
          __results.push(false); 
        }\n`;
        });

        testScript += "__results;";

        // Execute the string as JavaScript code
        const results = eval(testScript);

        // Tally the results
        results.forEach((res) => {
            if (res) passed++;
        });

    } catch (error) {
        errorMessage = error.message;
    }

    const status = (passed === total && total > 0) ? "passed" : "failed";
    return { passed, total, status, errorMessage };
}