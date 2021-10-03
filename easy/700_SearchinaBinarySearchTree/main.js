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
 * @param {number} val
 * @return {TreeNode}
 */

// 第一版作法，本機可以跑但是在leetcode上面出錯
var searchBST = function (root, val) {
	let tempMap = getTreeNodesMap(val);
	return getSubTree(root, tempMap);
};

// 取得樹的所有單一節點列表
var getTreeNodesMap = function (val) {
	let resultMap = new Map();
	let tempObject = { left: undefined, right: undefined };
	for (let i = 0; i < val.length; i++) {
		if (val[i] !== undefined && val[2 * i + 1] !== undefined) {
			tempObject.left = val[2 * i + 1];
			if (val[2 * i + 2] !== undefined) {
				tempObject.right = val[2 * i + 2]
			}
			resultMap.set(val[i], tempObject)
		}
		tempObject = { left: undefined, right: undefined };
	}
	return resultMap;
}

var getSubTree = function (root, nodeMap) {
	let result = []
	let rootItem = nodeMap.get(root);
	if (rootItem === undefined) {
		return result;
	}
	result.push(root);
	result.push(rootItem.left);
	result.push(rootItem.right);

	if (rootItem.left !== undefined && nodeMap.get(rootItem.left) !== undefined) {
		let subResult = getSubTree(rootItem.left, nodeMap)
		result = result.concat(subResult.slice(1, 3));
	}

	if (rootItem.right !== undefined && nodeMap.get(rootItem.right) !== undefined) {
		let subResult = getSubTree(rootItem.right, nodeMap)
		result = result.concat(subResult.slice(1, 3));
	}
	return result;
}

// Runtime: 94 ms, faster than 53.37% of JavaScript online submissions for Search in a Binary Search Tree.
// Memory Usage: 45.4 MB, less than 51.16% of JavaScript online submissions for Search in a Binary Search Tree.
var searchBST = function (root, val) {
	if (!root) {
		return null;
	}
	if (root.val === val) {
		return root;
	}
	if (root.val > val) {
		return searchBST(root.left, val);
	} else {
		return searchBST(root.right, val);
	}
};