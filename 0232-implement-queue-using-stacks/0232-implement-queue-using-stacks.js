
var MyQueue = function() {
  this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  const hold = []
  while (this.queue.length) {
    hold.push(this.queue.pop())
  }
  this.queue.push(x)
  while (hold.length) {
    this.queue.push(hold.pop())
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.queue.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.queue[this.queue.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queue.length === 0    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */