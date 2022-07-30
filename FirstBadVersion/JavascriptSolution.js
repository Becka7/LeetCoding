var solution = function(isBadVersion) {
    
    return function(n) {
        var left = 0;
        var right = n+1;
        const piv = Math.floor((right+left)/2);

        while(left <= right){
            if(isBadVersion(piv)){
                return piv;
            }if(isBadVersion())
        }

       
    };
};