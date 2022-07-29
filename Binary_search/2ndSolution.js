var search = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target);
    }
    return -1;
    
};
console.log(search([4,5,6,7,8,9],9))