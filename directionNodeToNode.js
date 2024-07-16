`2096 leetcode`
class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
        this.visited = 0;
    }
}

const head = new TreeNode(5);
head.left = new TreeNode(1);
head.right = new TreeNode(2);
head.left.left = new TreeNode(3);
head.right.left = new TreeNode(6);
head.right.right = new TreeNode(4);

const head2 = new TreeNode(2);
head2.left = new TreeNode(1);

const head3 = new TreeNode(7);
head3.left = new TreeNode(8);
head3.right = new TreeNode(3);
head3.left.left = new TreeNode(1);
head3.left.left.left = new TreeNode(6);
head3.left.left.right = new TreeNode(2);
head3.right.left = new TreeNode(4);
head3.right.right = new TreeNode(5);

function changeTreeToGraph(root, start, parent = null, start_node = []) {
    root.parent = parent;
    root.visited = 0;

    if (start === root.val)
        start_node[0] = root;

    if (root.left !== null)
        changeTreeToGraph(root.left, start, root, start_node);
    if (root.right !== null)
        changeTreeToGraph(root.right, start, root, start_node);

    return start_node;
}

function spaceSearch(start_node, destValue, charArr = [], check = { destFlag: false }) {
    // console.log(charArr, start_node.val)
    if (start_node.visited)
        return charArr

    start_node.visited = start_node.visited + 1;

    if (start_node.val === destValue) {
        check.destFlag = true;
        return charArr
    }

    if (check.destFlag)
        return charArr;

    if (start_node.left !== null && !start_node.left.visited) {
        charArr.push('L');
        spaceSearch(start_node.left, destValue, charArr, check);

    }
    else if (start_node.right !== null && !start_node.right.visited) {
        charArr.push('R');
        spaceSearch(start_node.right, destValue, charArr, check);
    }
    else if (start_node.parent !== null) {

        if (start_node.parent.visited + 1 > 1) {
            charArr.pop();
            start_node.parent.visited = 0
        } else
            charArr.push('U');
        spaceSearch(start_node.parent, destValue, charArr, check);
    }

    return charArr.join('');
}

var getDirections = function (root, startValue, destValue,) {
    const start_node = changeTreeToGraph(root, startValue);
    const result = spaceSearch(start_node[0], destValue);
    return result
};

console.log(getDirections(head, 3, 6))
console.log(getDirections(head2, 2, 1))