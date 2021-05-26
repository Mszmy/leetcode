var xorQueries = function(arr, queries) {
    var result_arr = [];
    for(var i=0;i<queries.length;i++){
        var start = queries[i][0];
        var end = queries[i][1];
        // console.log(arr[start])
        var new_arr = arr.slice(start,end+1)
        //console.log('new_arr',new_arr)
        var result = 0;
        for(var j=0;j<new_arr.length;j++){
            //console.log(' ',new_arr[j])
            result ^= new_arr[j]
        }
        result_arr.push(result)
    }
    return result_arr
};
