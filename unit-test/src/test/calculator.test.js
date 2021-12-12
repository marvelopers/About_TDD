const Calculator = require('../calculator.js');


describe('Calculator',()=>{
  let calc;
  beforeEach(()=>{
    calc =  new Calculator();
  })

  it('init with 0', ()=>{
    expect(calc.value).toBe(0);
  })

  it('sets', ()=>{
    calc.set(9)
    expect(calc.value).toBe(9);
  })

  it('clear', ()=>{
    calc.clear()
    expect(calc.value).toBe(0);
  })

  
  it('add', ()=>{
    calc.set(2)
    calc.add(3)
    expect(calc.value).toBe(5);
  })

  it('add should throw an error if value is greater than 10000000000', ()=>{
    expect(()=>{
      calc.add(10000000001)
    }).toThrow('Value can not be greater than 10000000000')
  })

  it('subtract', ()=>{
    calc.set(2)
    calc.subtract(3)
    expect(calc.value).toBe(-1);
  })
  
  it('multiply', ()=>{
    calc.set(2)
    calc.multiply(3)
    expect(calc.value).toBe(6);
  })

  describe('divides', () => {
    it('0/0 === NaN', ()=>{
      calc.divide(0)
      expect(calc.value).toBe(NaN);

    })

    it('1/0 === Infinity', ()=>{
      calc.set(1)
      calc.divide(0)
      expect(calc.value).toBe(Infinity);

    })

    it('2/2 === Infinity', ()=>{
      calc.set(2)
      calc.divide(2)
      expect(calc.value).toBe(1);

    })
  })
})