//通过递归得到先序、中序、后序遍历的序列
function recursion(head) {
  if (head == null) return;
  console.log(head.val);

  recursion(head.left);
  console.log(head.val);
  recursion(head.right);

  console.log(head.val);
}
