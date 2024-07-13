class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = this.left = null;
    }
}

const head = new TreeNode(6);
head.left = new TreeNode(2)
head.right = new TreeNode(8);
head.right.right = new TreeNode(9);
head.right.left = new TreeNode(7);
head.left.left = new TreeNode(0);
head.left.right = new TreeNode(4);
head.left.right.right = new TreeNode(5);
head.left.right.left = new TreeNode(3);

const p = head;
const q = head.left.right

var lowestCommonAncestor = function (root, p, q, parent = root, check = { val: undefined, foundP: null, foundQ: null }) {

    if (root.val === p.val) {
        check.foundP = p;
        if (check.val === undefined)
            check.val = p;
    }
    else if (root.val === q.val) {
        check.foundQ = q;
        if (check.val === undefined)
            check.val = q;
    }

    if (p.val < root.val && root.left !== null && !check.foundP)
        lowestCommonAncestor(root.left, p, q, root, check)
    else if (p.val > root.val && root.right !== null && !check.foundP)
        lowestCommonAncestor(root.right, p, q, root, check)

    if (q.val < root.val && root.left !== null && !check.foundQ)
        lowestCommonAncestor(root.left, p, q, root, check)
    else if (q.val > root.val && root.right !== null && !check.foundQ)
        lowestCommonAncestor(root.right, p, q, root, check);

    if (check.foundP === null || check.foundQ === null)
        check.val = parent;

    return check.val
};

console.log(lowestCommonAncestor(head, p, q))