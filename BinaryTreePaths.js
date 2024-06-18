class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
var binaryTreePaths = function (root = new TreeNode(), res = '', arr = []) {
    if (root.left === null && root.right === null) { res += root.value; arr.push(res); return }
    if (root.left === null) {
        binaryTreePaths(root.right, res + root.value + '->', arr);
        return;
    }
    if (root.right === null) {
        binaryTreePaths(root.left, res + root.value + '->', arr);
        return
    }
    binaryTreePaths(root.left, res + root.value + '->', arr);
    binaryTreePaths(root.right, res + root.value + '->', arr);
    return arr
};

const head = new TreeNode(1);
let temp = head;
temp.left = new TreeNode(2);
temp.right = new TreeNode(3);
temp = temp.left;
temp.right = new TreeNode(5);
console.log(binaryTreePaths(head))