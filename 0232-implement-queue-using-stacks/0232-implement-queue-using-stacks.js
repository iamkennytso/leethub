
var MyQueue = function() {
  this.queueStack = []
  this.holdStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  console.log(this)
  while(this.queueStack.length) {
    this.holdStack.push(this.queueStack.pop())
  }
  this.queueStack.push(x)
  while(this.holdStack.length) {
    this.queueStack.push(this.holdStack.pop())
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queueStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queueStack[this.queueStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queueStack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */