class Node {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.dummy = new Node();
    this.dummy.prev = this.dummy;
    this.dummy.next = this.dummy;
    this.keyToNode = new Map();
  }

  get(key) {
    const node = this.#getNode(key); //取出并放到表头
    return node ? node.value : -1;
  }

  put(key, value) {
    let node = this.#getNode(key);
    if (node) {
      //存在这本书
      node.value = value;
      return;
    }
    //不存在这本书
    node = new Node(key, value);
    this.keyToNode.set(key, node);
    this.#pushFront(node);
    if (this.keyToNode.size > this.capacity) {
      const backNode = this.dummy.prev;
      this.keyToNode.delete(backNode.key);
      this.#remove(backNode);
    }
  }

  #getNode(key) {
    //获取 key 对应的节点，同时把该节点移到链表头部
    if (!this.keyToNode.has(key)) {
      //没有这个节点
      return null;
    }
    const node = this.keyToNode.get(key);
    this.#remove(node); //取出该节点
    this.#pushFront(node); //放在最上面
    return node;
  }
  #remove(x) {
    //取出一个节点
    x.prev.next = x.next;
    x.next.prev = x.prev;
  }
  #pushFront(x) {
    //将指定节点放到表头
    x.prev = this.dummy;
    x.next = this.dummy.next;
    x.prev.next = x;
    x.next.prev = x;
  }
}
