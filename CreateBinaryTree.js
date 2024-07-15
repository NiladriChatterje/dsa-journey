class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}

var createBinaryTree = function (descriptions) {
    const map = new Map();
    const childSet = new Set();
    let root = null;
    let node = null;
    for (let [parent, child, left] of descriptions) {

        if (!map.has(parent)) {
            node = new TreeNode(parent);
            if (left === 1)
                node.left = map.get(child) ?? new TreeNode(child);
            else
                node.right = map.get(child) ?? new TreeNode(child);
            map.set(parent, node);

            childSet.add(child)
            map.set(child, left === 1 ? node.left : node.right)
        } else {

            if (left === 1)
                map.get(parent).left = map.get(child) ?? new TreeNode(child);
            else
                map.get(parent).right = map.get(child) ?? new TreeNode(child)

            childSet.add(child)
            map.set(child, left === 1 ? map.get(parent).left : map.get(parent).right)
        }
    }

    for (const [key, value] of map)
        if (!childSet.has(key)) {
            root = value;
            break
        }

    return root;
};

// console.log(createBinaryTree([[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]))
// console.log(createBinaryTree([[1, 2, 1], [2, 3, 0], [3, 4, 1]]))
console.log(createBinaryTree([[39, 70, 1], [13, 39, 1], [85, 74, 1], [74, 13, 1], [38, 82, 1], [82, 85, 1]]))
console.log(createBinaryTree([[85, 82, 1], [74, 85, 1], [39, 70, 0], [82, 38, 1], [74, 39, 0], [39, 13, 1]]))