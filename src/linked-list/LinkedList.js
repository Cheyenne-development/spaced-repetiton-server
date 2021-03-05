class Node {
  constructor({ value, next }) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor({ id, name, total_score }) {
    this.id = id
    this.name = name
    this.total_score = total_score
    this.head = null
  }

  insertFirst(value) {
    let newHead = new Node({
      value,
      next: this.head,
    })

    this.head = newHead
  }

  findLast() {
    let last = this.head

    while (last.next)
      last = last.next

    return last
  }

  insertLast(value) {
    let newLast = new Node({
      value,
      next: null,
    })

    const last = this.findLast()

    if (!last)
      this.head = newLast
    else
      last.next = newLast
  }

  insert(value) {
    if (!this.head)
      this.insertFirst(value)
    else
      this.insertLast(value)
  }

  findNode(index) {
    let count = 0
    let node = this.head

    while ((count < index) && node) {
      node = node.next
      count++
    }

    return node
  }

  insertAt(index, value) {
    let previousNode = this.findNode(index - 1)

    if (!previousNode)
      return this.insertLast(value) 

    let newNode = new Node({
      value,
      next: previousNode.next,
    })

    previousNode.next = newNode
  }

  clear() {
    this.head = null
  }

  removeHead() {
    this.head = this.head.next
  }

  removeLast() {
    let prev = this.head
    let current = prev.next

    if (!current)
      return this.clear()

    while (current && current.next) {
      prev = current
      current = current.next
    }

    prev.next = null
  }

  removeAt(index) {
    let previousNode = this.findNode(index - 1)

    if (!previousNode)
      return this.removeLast()

    previousNode.next = previousNode.next.next
  }

  shiftHead(spaces) {
    let head = this.head
    this.removeHead()
    this.insertAt(spaces, head.value)
  }

  map(callback) {
    let node = this.head
    let arr = []
    while (node) {
      arr.push(callback(node))
      node = node.next
    }
    return arr
  }
}

module.exports = {
  Node,
  LinkedList,
}