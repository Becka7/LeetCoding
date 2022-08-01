var solution = function(isBadVersion) {
    
    return function(n) {
        var left = 0;
        var right = n+1;
        

        while(left <= right){
            const piv = Math.floor((right+left)/2);
            if(isBadVersion(piv)){
                return piv;
            }if(isBadVersion()){
                return -1;

            }
        }

       
    };
};