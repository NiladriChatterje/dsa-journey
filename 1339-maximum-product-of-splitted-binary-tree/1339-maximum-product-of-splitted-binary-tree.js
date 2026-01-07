/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 const dfs = (root,set= new Set()) =>{
    if(root == null)
        return;

    if(root.left)
        dfs(root.left,set);

    if(root.right)
        dfs(root.right,set);

    let leftVal = root.left?.val??0
    let rightVal = root.right?.val??0

    set.add(root.val + leftVal + rightVal);
    root.val = root.val + leftVal + rightVal;
 }

var maxProduct = function(root) {
    const set = new Set();
    dfs(root,set);

    let rootVal = root.val;
    let pdt=1;
    let max = -Infinity;

    for(let element of set){
        pdt = element * (rootVal - element);
        max = Math.max(pdt,max);
    }
    return max % (10**9+7);
};