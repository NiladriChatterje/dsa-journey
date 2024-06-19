//constructor function
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}


var invertTree = function (root) {
    if (root == null) return root;
    [root.left, root.right] = [root.right, root.left]
    if (root.left !== null)
        invertTree(root.left);
    if (root.right !== null)
        invertTree(root.right);
    return root;
};
