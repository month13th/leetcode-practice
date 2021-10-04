/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

//  Runtime: 136 ms, faster than 88.95% of JavaScript online submissions for Design Parking System.
//  Memory Usage: 45.7 MB, less than 74.56% of JavaScript online submissions for Design Parking System.
var ParkingSystem = function (big, medium, small) {
	this.parkingLot = [big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
	if (this.parkingLot[carType - 1] > 0) {
		this.parkingLot[carType - 1] -= 1;
		return true;
	} else {
		return false;
	}
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */