
var MyQueue = function() {
  this.main = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const temp = []
  while (this.main.length) {
    temp.push(this.main.pop())
  }
  this.main.push(x)
  while (temp.length) {
    this.main.push(temp.pop())
  }
};

/**
 * @return {number}
 */

 // 1 2 3
 // 3 2
MyQueue.prototype.pop = function() {
  return this.main.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.main[this.main.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.main.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */