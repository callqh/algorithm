class MinHeap {
  constructor() {
    this.heap = [];
  }
  // 交换元素
  swap(i1, i2) {
    [this.heap[i2], this.heap[i1]] = [this.heap[i1], this.heap[i2]];
  }
  // 元素上移
  shiftUp(index) {
    // 比较到堆顶元素直接返回
    if (index === 0) return;
    const parentIndex = this.parentIndex(index);
    // 比较当前节点与父节点的大小
    if (this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      // 递归比较下一个节点与父节点
      this.shiftUp(parentIndex);
    }
  }
  // 元素下移
  shiftDown(index) {
    const left = this.leftIndex(index);
    const right = this.rightIndex(index);
    // 判断左子节点是否比自己小
    if (this.heap[left] < this.heap[index]) {
      this.swap(left, index);
      this.shiftDown(left);
    }
    // 判断右子节点是否比自己小
    if (this.heap[right] < this.heap[index]) {
      this.swap(right, index);
      this.shiftDown(right);
    }
  }
  // 插入
  insert(n) {
    this.heap.push(n);
    // 插入之后需要考虑将该元素上移
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶
  pop() {
    // 用堆底元素替换堆顶元素
    this.heap[0] = this.heap.pop();
    // 将更新后的堆顶元素向下移动
    this.shiftDown(0);
  }
  // 获取堆顶元素
  peek() {
    return this.heap[0];
  }
  // 获取堆的大小
  size() {
    return this.heap.length;
  }
  // 获取父节点的下标
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  // 获取左侧子节点下标
  leftIndex(index) {
    return index * 2 + 1;
  }
  // 获取右侧子节点下标
  rightIndex(index) {
    return index * 2 + 2;
  }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.insert(0);
h.pop();
console.log(h.heap);
