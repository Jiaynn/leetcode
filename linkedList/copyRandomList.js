function copyRandomList(head) {
  let map = new Map();
  let cur = head;
  while (cur) {
    map.set(cur, new Node(cur.val));
    cur = cur.next;
  }
  cur = head;
  while (cur) {
    map.get(cur).next = map.get(cur.next) || null;
    map.get(cur).random = map.get(cur.random) || null;
    cur = cur.next;
  }
  return map.get(head);
}

function copyRandomList2(head) {
  if (!head) return null;
  let cur = head;
  let next = null;
  while (cur) {
    next = cur.next;
    cur.next = new Node(cur.val);
    cur.next.next = next;
    cur = next;
  }
  cur = head;
  let curCopy = null;
  while (cur) {
    next = cur.next.next;
    curCopy = cur.next;
    curCopy.random = cur.random ? cur.random.next : null;
    cur = next;
  }
  let res = head.next;
  cur = head;
  while (cur) {
    next = cur.next.next;
    curCopy = cur.next;
    cur.next = next;
    curCopy.next = next ? next.next : null;
    cur = next;
  }
  return res;
}
