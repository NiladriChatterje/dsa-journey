class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
        this.visited = false
    }
}

const head = new TreeNode(1);
head.left = new TreeNode(2);
head.right = new TreeNode(3);
head.left.left = new TreeNode(4);
head.left.right = new TreeNode(5);
head.right.right = new TreeNode(7);
head.right.left = new TreeNode(6);

function dfs(root, set, parent = root, omittedSet = new Set(), result = []) {
    root.visited = true;
    if (parent === root && !set.has(root.val))
        result.push(root);

    if (set.has(root.val)) {
        if (root.left !== null)
            result.push(root.left);
        if (root.right !== null)
            result.push(root.right);

        omittedSet.add(root.val)
    }

    if (root.left !== null)
        dfs(root.left, set, root, omittedSet, result);
    if (root.right !== null)
        dfs(root.right, set, root, omittedSet, result);

    if (omittedSet.has(root.val) && (root.left === null || root.left.visited)
        && (root.right === null || root.right.visited)) {
        if (parent.right !== null && parent.right.val === root.val)
            parent.right = null;
        if (parent.left !== null && parent.left.val === root.val)
            parent.left = null;

    }

    return result;
}

var delNodes = function (root, to_delete) {
    const set = new Set(to_delete);
    const result = dfs(root, set)
    console.log(root)
    return result
};

console.log(delNodes(head, [5, 3]))