const diameterOfBinaryTree = root => {
  if (!root) {
    return 0;
  }
  let ans = 0
  
  const dig = root => {
    if (!root) {
      return 0;
    }
    const left = dig(root.left);
    const right = dig(root.right);
    ans = Math.max(ans, left + right)
    return 1 + Math.max(left, right)
  }

  dig(root);
  return ans
};
