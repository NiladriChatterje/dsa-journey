class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
var searchBST = function (root, val) {
    if (root === null) return null;
    if (root.val === val)
        return root;
    let res;
    if (val < root.val)
        res = searchBST(root.left, val);
    else
        res = searchBST(root.right, val);

    return res;
};