/**
 *  输入：
 *   ["RecentCounter", "ping", "ping", "ping", "ping"]
 *   [[], [1], [100], [3001], [3002]]
 *  输出：
 *   [null, 1, 2, 3, 3]
 */
var RecentCounter = function () {
  this.q = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // 将传入的t入队
  this.q.push(t);
  // 判断队列中的首元素是否在合理范围内[t-3000,t]
  while (this.q[0] < t - 3000) {
    // 小于该范围，将队列首元素剔除，继续遍历下一个新的首元素
    this.q.shift();
  }
  // 返回队列长度
  return this.q.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
