/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    while (head) {
        if (head.checked) return true;
        head.checked = 1;
        head = head.next;
    }
    return false;
};
