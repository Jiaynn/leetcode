function isPalindrome(head) {
  let stack = [];
  let cur = head;
  while (cur) {
    stack.push(cur.val);
    cur = cur.next;
  }
  cur = head;
  while (cur) {
    if (cur.val !== stack.pop()) {
      return false;
    }
    cur = cur.next;
  }
  return true;
}

function isPalindrome_Optimize(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse the second half
  //直接逆置
  let prev = null;
  let cur = slow;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  // compare the first half and the reversed second half
  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }
  return true;
}
