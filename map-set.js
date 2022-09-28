// new Set([1,1,2,2,3,4])
// [1,2,3,4]

// [...new Set("referee")].join("")
// 'ref'

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// empty. it would show nothing because you removed it. 

function hasDuplicate([arr]) {
    let valsSeen = []
    for(let i = 0; i < arr.length; i++){
    let val = arr[i];
    if (valsSeen.indexOf(val) !== -1) {
    return true;
    }
    valsSeen.push(val);
}
    return false;
}