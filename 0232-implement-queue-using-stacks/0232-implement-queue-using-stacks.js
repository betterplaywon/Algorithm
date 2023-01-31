
var MyQueue = function() {
    this.first = [];
    this.second = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
   if(!this.second.length){
       this.first.push(x);
   } else {
       this.second.push(x);
   }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(!this.second.length){
      let firstIdx = this.first[0];
        this.second = this.first.slice(1);
        this.first = [];
        return firstIdx;
  } else {
       let secondIdx = this.second[0];
        this.second = this.second.slice(1);
        this.first = [];
        return secondIdx;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.second.length){
        return this.first[0]
    }else{
        return this.second[0]
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
   return !this.first.length && !this.second.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */