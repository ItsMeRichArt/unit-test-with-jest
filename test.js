const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js')

test("One euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dollar should be 127.9 yens", function(){
    expect(fromDollarToYen(3.5)).toBe(447.65000000000003);
})

test("One yen should be 0.0062 pounds", function(){
    expect(fromYenToPound(3.5)).toBe(0.0218921032056294);
})