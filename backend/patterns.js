// Factory function 

const factory = ({ arg1 = 1, arg2 = 2 } = {}) => ({
  arg1,
  arg2,
  changeParams(arg1, arg2) {
    this.ar1 = arg1
    this.arg2 = arg2
    return this
  }
})

// see Eric Elliot's Medium article on Factory functions



