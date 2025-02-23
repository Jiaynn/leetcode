function reverseList(head) {
  let p = null;
  let r = null;
  p = head.next;
  head.next = null;
  while (p) {
    r = p.next; //防止断链
    p.next = head.next; //头插法
    head.next = p; //头插法
    p = r;
  }
  return head;
}
