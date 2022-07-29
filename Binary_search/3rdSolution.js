
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
    
