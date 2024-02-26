// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 150.36 yen", function() {
    //Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    //If 1 dollar is 150.36 yen, then 2.5 dollars should be 375.9 yen
    const expected = 2.5 * 150.36;

    //this is the comparison for unit test
    expect(fromDollarToYen(2.5)).toBe(expected);
})

test("One yen should be .0053 pounds", function() {
    //Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    //If 1 Yen is .0053 pounds, then 50 yen should be 0.265 pounds
    const expected = 50 * .0053;

    //this is the comparison for the unit test
    expect(fromYenToPound(50)).toBe(expected);
})