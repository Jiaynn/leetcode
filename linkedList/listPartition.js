function listPartition(head, pivot) {
  let sH = null;
  let sT = null;
  let eH = null;
  let eT = null;
  let gH = null;
  let gT = null;
  let next = null;
  while (head) {
    next = head.next;
    if (head.value < pivot) {
      if (sH === null) {
        sH = head;
        sT = head;
      } else {
        sT.next = head;
        sT = head;
      }
    } else if (head.value === pivot) {
      if (eH === null) {
        eH = head;
        eT = head;
      } else {
        eT.next = head;
        eT = head;
      }
    } else {
      if (gH === null) {
        gH = head;
        gT = head;
      } else {
        gT.next = head;
        gT = head;
      }
    }
    head = next;
  }

  if (sT !== null) {
    //如果有小于区域
    sT.next = eH;
    eT = eT === null ? sT : eT; // 下一步 谁去连大于区域的头，谁就是eT
  }
  if (eT !== null) {
    //如果有等于区域
    eT.next = gH;
  }
  return sH !== null ? sH : eH !== null ? eH : gH;
}
