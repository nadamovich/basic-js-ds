const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l.value === k) { // если текущее значение равно к
    l = l.next // переходим к следующему
  }
  let currentList = l // сейчас = л
  while (currentList.next) { // пока есть следующий элемент
    if (currentList.next.value === k) { // если следубщее значение равно к
        currentList.next = currentList.next.next // следующее = следющее+следующее (перепрыгиваем)
    } else { // если не равно
        currentList = currentList.next // сменили текущее на следующее
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
