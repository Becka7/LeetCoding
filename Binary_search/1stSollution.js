var search = function(nums, target) {
    for(i=0;i<nums.length;i++){
        if(nums[i] == target){
            return i;
        } 
    }
   return -1;
    
};
console.log(search([4,5,6,7,8,9],9))