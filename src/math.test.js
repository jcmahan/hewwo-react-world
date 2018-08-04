const { sum, mul, sub, div } = require('./math');

test('adding 1 + 1 equals 2', ()=> { 
    expect(sum(1,1)).toBe(2)
})
test('multiplying 1 x 1 equals 1', () => {
    expect(mul(1,1).toBe(1))
})
test('subtracting 1 -1 equals 0', ()=> {
    expect(sub(1,1).toBe(0))
})
test('dividing 1 by 1 equals 1', ()=> {
    expect(div(1,1).toBe(1))
})