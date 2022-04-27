
const Maths = require('./SumOf')
maths = new Maths ()

test('2 added to 7 should equal 9', () => {
    expect(maths.Add(2,7)).toBe(9)
})

test('3 multiplied by 5 should return 15', () => {
    expect(maths.Multiply(3,5)).toBe(15)
})

