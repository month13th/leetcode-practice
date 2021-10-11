var threeSum = function (nums) {
	nums.sort((a, b) => a - b);
	const resultArray = [];
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) break;
		if (i > 0 && nums[i] == nums[i - 1]) continue;
		let j = i + 1;
		let k = nums.length - 1;
		while (j < k) {
			const s = nums[i] + nums[j] + nums[k];
			if (s < 0) {
				j += 1;
			} else if (s > 0) {
				k -= 1;
			} else {
				resultArray.push([nums[i], nums[j], nums[k]]);
				while (j < k && nums[j] == nums[j + 1]) j += 1;
				while (j < k && nums[k] == nums[k - 1]) k -= 1;
				j += 1
				k -= 1
			}
		}
	}
	return resultArray;
};