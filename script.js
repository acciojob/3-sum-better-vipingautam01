function threeSum(arr, target) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum === target) {
        return target; // Exact match found, return the target sum
      }

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum; // Update the closest sum if the current sum is closer to the target
      }

      if (sum < target) {
        left++; // Move the left pointer to increase the sum
      } else {
        right--; // Move the right pointer to decrease the sum
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;

