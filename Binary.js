// Given an array of integers nums which is sorted in ascending order, and an integer target, 
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var search = function(nums, target) {


    var left = 0;
    var right = nums.length-1;
    
    
    while(left<=right){
         var pv = Math.floor((right+left)/2);
         if(nums[pv]== target) return pv;
       
         if(target<nums[pv])right=pv-1;
        
         else left=pv+1;
    
    }
   
    return -1;
};

console.log(search([3,5,6,7],8) ) ;
    
