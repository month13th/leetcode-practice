/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
// 	let sum1 = 0
// 	let sum2 = 0
// 	switch (nums.length) {
// 		case 0:
// 			return 0;
// 		case 1:
// 		case 2:
// 			return Math.max(...nums);
// 		default:
// 			sum1 = nums[0] + rob(nums.slice(2, nums.length));
// 			sum2 = nums[1] + rob(nums.slice(3, nums.length));
// 			return Math.max(sum1, sum2);
// 	}
// };

var rob = function (nums) {
	// resultArray為，在第i間房子時，無論此時搶或不搶，能獲得的最大的錢
	let resultArray = []
	let tempMax
	switch (nums.length) {
		case 0:
			return 0;
		case 1:
		case 2:
			return Math.max(...nums);
		default:
			break;
	}
	// 第1間房子能得到最大的錢
	resultArray.push(nums[0])
	// 第2間房子能得到最大的錢
	resultArray.push(Math.max(nums[0], nums[1]));
	// 第n間房子能得到最大的錢，從第2間開始
	for (let i = 2; i < nums.length; i++) {
		tempMax = Math.max(resultArray[i - 2] + nums[i], resultArray[i - 1]);
		resultArray.push(tempMax)
	}
	return resultArray.pop();
};
