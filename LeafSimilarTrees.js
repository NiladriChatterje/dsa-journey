`leetcode 872`
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const HEAD = new TreeNode(3);
let temp = HEAD;

temp.left = new TreeNode(5);
temp.right = new TreeNode(1);

temp = temp.left;
temp.left = new TreeNode(6);
temp.right = new TreeNode(2);

temp = temp.right;
temp.left = new TreeNode(7);
temp.right = new TreeNode(4);

temp = HEAD;
temp = temp.right;
temp.left = new TreeNode(9);
temp.right = new TreeNode(8);

var leafSequence = (root, arr = []) => {
    if (root.left === null && root.right === null) {
        arr.push(root.val);
        return arr;
    }
    if (root.left)
        leafSequence(root.left, arr);
    if (root.right)
        leafSequence(root.right, arr);
    return arr;
}

var leafSimilar = function (root1, root2) {
    const seq_1 = leafSequence(root1);
    const seq_2 = leafSequence(root2);
    if (seq_1.length !== seq_2.length) return false;
    for (let i = 0; i < seq_1.length; i++)
        if (seq_1[i] !== seq_2[i]) return false;
    return true
};

console.log(leafSimilar(HEAD, HEAD));