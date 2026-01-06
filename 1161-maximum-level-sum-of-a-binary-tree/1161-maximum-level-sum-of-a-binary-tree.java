/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public void traverse(TreeNode root, HashMap map, int depth){
        if(root == null)
            return;
        
        map.put(depth,(int)map.getOrDefault(depth,0) + root.val);

        if(root.left != null)
            traverse(root.left,map,depth+1);
            
        if(root.right != null)
            traverse(root.right,map,depth+1);    
    }

    public int maxLevelSum(TreeNode root) {
        HashMap<Integer,Integer> map = new HashMap<>();
        traverse(root,map,1);
        int max = Integer.MIN_VALUE;
        int index = 0;
        int j = 1;
        for(int i : map.values()){
            if(i>max){
                max = i;
                index = j;
            }
            j++;
            }
        return index;
    }
}