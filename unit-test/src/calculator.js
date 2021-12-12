class Calculator{
  constructor(){
    this.value = 0;
  }

  set(num){
    this.value = num;
  }

  clear(){
    this.value = 0;
  }

  add(num){
    const sum = this.value + num;
    if(sum > 10000000000) {
      throw new Error('Value can not be greater than 10000000000');
    }
    this.value = this.value + num;
  }

  subtract(num){
    this.value = this.value - num;
  }

  multiply(num){
    this.value = this.value * num;
  }

  divide(num){
    this.value = this.value / num;
  }
}

module.exports = Calculator;